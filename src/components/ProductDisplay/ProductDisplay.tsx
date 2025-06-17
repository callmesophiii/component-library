import React from 'react';
import type { ProductDisplayProps } from '../../types';

export const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showDescription = false,
  showStockStatus = false,
  onAddToCart,
  children,
}) => {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-700">${product.price.toFixed(2)}</p>
      {showDescription && <p className="mt-2 text-gray-600">{product.description}</p>}
      {showStockStatus && (
        <p className={`mt-2 font-semibold ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </p>
      )}
      {onAddToCart && product.inStock && (
        <button
          onClick={() => onAddToCart(product.id)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      )}
      {children}
    </div>
  );
};
