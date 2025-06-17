import { render, screen, fireEvent } from '@testing-library/react';
import { ProductDisplay } from './ProductDisplay';
import type { Product } from '../../types';

const mockProduct: Product = {
  id: '1',
  name: 'Laptop',
  price: 999.99,
  description: 'A high-quality laptop',
  inStock: true,
};

describe('ProductDisplay', () => {
  it('renders product name and price', () => {
    render(<ProductDisplay product={mockProduct} />);
    expect(screen.getByText('Laptop')).toBeInTheDocument();
    expect(screen.getByText('$999.99')).toBeInTheDocument();
  });

  it('calls onAddToCart when add button is clicked', () => {
    const handleAddToCart = vi.fn();
    render(<ProductDisplay product={mockProduct} onAddToCart={handleAddToCart} />);
    fireEvent.click(screen.getByText('Add to Cart'));
    expect(handleAddToCart).toHaveBeenCalledWith('1');
  });
});
