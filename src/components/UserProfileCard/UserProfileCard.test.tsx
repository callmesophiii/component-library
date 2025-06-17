import { render, screen, fireEvent } from '@testing-library/react';
import { UserProfileCard } from './UserProfileCard';
import type { User } from '../../types';

const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'Developer',
};

describe('UserProfileCard', () => {
  it('renders user name', () => {
    render(<UserProfileCard user={mockUser} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('calls onEdit when edit button is clicked', () => {
    const handleEdit = vi.fn();
    render(<UserProfileCard user={mockUser} onEdit={handleEdit} />);
    fireEvent.click(screen.getByText('Edit Profile'));
    expect(handleEdit).toHaveBeenCalledWith('1');
  });
});
