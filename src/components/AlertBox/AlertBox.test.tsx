import { render, screen, fireEvent } from '@testing-library/react';
import { AlertBox } from './AlertBox';

describe('AlertBox', () => {
  it('renders the message and type correctly', () => {
    render(<AlertBox type="success" message="Test success message" />);
    expect(screen.getByText('Test success message')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const handleClose = vi.fn();
    render(<AlertBox type="error" message="Error" onClose={handleClose} />);
    fireEvent.click(screen.getByText('×'));
    expect(handleClose).toHaveBeenCalled();
  });
});
