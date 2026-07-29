import { render, screen } from '@testing-library/react';
import FooterNav from './footerNav';

describe('FooterNav', () => {
  it('renders the company, app, and contact sections', () => {
    render(<FooterNav />);

    expect(screen.getByText('Công ty')).toBeInTheDocument();
    expect(screen.getByText('Ứng dụng Baemin')).toBeInTheDocument();
    expect(screen.getByText('Baemin 2024')).toBeInTheDocument();
    expect(screen.getByText('Địa chỉ công ty')).toBeInTheDocument();
    expect(screen.getByText('App Store')).toBeInTheDocument();
    expect(screen.getByText('Google Play')).toBeInTheDocument();
  });
});
