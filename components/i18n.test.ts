import { dictionary, locales, Locale } from './i18n';

describe('i18n', () => {
  it('offers a switcher entry for every supported locale', () => {
    expect(locales).toHaveLength(6);
    locales.forEach(({ label, value }) => {
      expect(label).toBe(value.toUpperCase());
      expect(dictionary[value]).toBeDefined();
    });
  });

  it('provides a complete dictionary for each locale', () => {
    const expected: Locale[] = ['vi', 'fr', 'ca', 'es', 'de', 'it'];
    expect(Object.keys(dictionary).sort()).toEqual([...expected].sort());

    expected.forEach((locale) => {
      expect(dictionary[locale].home).toBeTruthy();
      expect(dictionary[locale].searchButton).toBeTruthy();
      expect(dictionary[locale].theme).toBeTruthy();
    });
  });
});
