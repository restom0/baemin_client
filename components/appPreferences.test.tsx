import { fireEvent, render, screen } from '@testing-library/react';
import { AppPreferencesProvider, useAppPreferences } from './appPreferences';

function Consumer() {
  const { language, theme, t, setLanguage, setTheme } = useAppPreferences();
  return (
    <div>
      <span data-testid="lang">{language}</span>
      <span data-testid="theme">{theme}</span>
      <span data-testid="home">{t.home}</span>
      <button onClick={() => setLanguage('fr')}>set-fr</button>
      <button onClick={() => setTheme('dark')}>set-dark</button>
    </div>
  );
}

function renderWithProvider() {
  return render(
    <AppPreferencesProvider>
      <Consumer />
    </AppPreferencesProvider>,
  );
}

describe('AppPreferencesProvider', () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
    document.documentElement.removeAttribute('lang');
  });

  it('defaults to Vietnamese and the light theme, persisting them', () => {
    renderWithProvider();

    expect(screen.getByTestId('lang')).toHaveTextContent('vi');
    expect(screen.getByTestId('theme')).toHaveTextContent('light');
    expect(screen.getByTestId('home')).toHaveTextContent('Trang Chu');
    expect(window.localStorage.getItem('baemin-language')).toBe('vi');
    expect(window.localStorage.getItem('baemin-theme')).toBe('light');
    expect(document.documentElement.dataset.theme).toBe('light');
    expect(document.documentElement.lang).toBe('vi');
  });

  it('updates and persists language and theme changes', () => {
    renderWithProvider();

    fireEvent.click(screen.getByText('set-fr'));
    fireEvent.click(screen.getByText('set-dark'));

    expect(screen.getByTestId('lang')).toHaveTextContent('fr');
    expect(screen.getByTestId('theme')).toHaveTextContent('dark');
    expect(screen.getByTestId('home')).toHaveTextContent('Accueil');
    expect(window.localStorage.getItem('baemin-language')).toBe('fr');
    expect(window.localStorage.getItem('baemin-theme')).toBe('dark');
    expect(document.documentElement.dataset.theme).toBe('dark');
  });

  it('restores valid persisted preferences', () => {
    window.localStorage.setItem('baemin-language', 'de');
    window.localStorage.setItem('baemin-theme', 'dark');

    renderWithProvider();

    expect(screen.getByTestId('lang')).toHaveTextContent('de');
    expect(screen.getByTestId('theme')).toHaveTextContent('dark');
  });

  it('restores a persisted light theme', () => {
    window.localStorage.setItem('baemin-theme', 'light');

    renderWithProvider();

    expect(screen.getByTestId('theme')).toHaveTextContent('light');
  });

  it('ignores unknown persisted values and falls back to defaults', () => {
    window.localStorage.setItem('baemin-language', 'zz');
    window.localStorage.setItem('baemin-theme', 'neon');

    renderWithProvider();

    expect(screen.getByTestId('lang')).toHaveTextContent('vi');
    expect(screen.getByTestId('theme')).toHaveTextContent('light');
  });

  it('throws when used outside the provider', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => render(<Consumer />)).toThrow(
      'useAppPreferences must be used inside AppPreferencesProvider',
    );

    spy.mockRestore();
  });
});
