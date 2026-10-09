import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Alert from './Alert';

describe('Alert Component', () => {
  it('renders children correctly', () => {
    render(<Alert type="error">Test Error Message</Alert>);
    expect(screen.getByText('Test Error Message')).toBeInTheDocument();
  });

  it('applies error styling', () => {
    const { container } = render(<Alert type="error">Error</Alert>);
    // Tailwind classes for error in Alert component
    expect(container.firstChild).toHaveClass('bg-error-container');
    expect(container.firstChild).toHaveClass('text-on-error-container');
  });

  it('applies success styling', () => {
    const { container } = render(<Alert type="success">Success</Alert>);
    expect(container.firstChild).toHaveClass('bg-[#EDFDF2]');
    expect(container.firstChild).toHaveClass('text-[#05603A]');
  });
});
