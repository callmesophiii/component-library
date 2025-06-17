import { useState } from 'react';
import { AlertBox } from './components/AlertBox/AlertBox';
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard';
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay';

const user = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'Software Engineer',
  avatarUrl: 'https://example.com/avatar.jpg',
};

const product = {
  id: '1',
  name: 'Wireless Headphones',
  price: 199.99,
  description: 'High-quality wireless headphones with noise cancellation.',
  imageUrl: 'https://example.com/headphones.jpg',
  inStock: true,
};

const App = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div className="p-4">
      {showAlert && (
        <AlertBox type="success" message="Product added to cart!" onClose={() => setShowAlert(false)} />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <UserProfileCard user={user} showEmail showRole />
        <ProductDisplay product={product} showDescription showStockStatus onAddToCart={handleAddToCart} />
      </div>
    </div>
  );
};

export default App;
