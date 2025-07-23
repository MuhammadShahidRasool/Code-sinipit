import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Laptop' },
  { id: 2, name: 'Phone' },
  { id: 3, name: 'Shoes' },
  { id: 4, name: 'Watch' }
];

function ProductSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductSearch;