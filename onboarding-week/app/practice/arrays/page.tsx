'use client';

import { useState } from 'react';

// Sample data
const products = [
  { id: 1, name: 'Laptop', price: 999, category: 'Electronics' },
  { id: 2, name: 'Mouse', price: 29, category: 'Electronics' },
  { id: 3, name: 'Keyboard', price: 79, category: 'Electronics' },
  { id: 4, name: 'Monitor', price: 299, category: 'Electronics' },
  { id: 5, name: 'Desk', price: 399, category: 'Furniture' },
  { id: 6, name: 'Chair', price: 249, category: 'Furniture' },
];

export default function ArrayMethodsPractice() {
  const [maxPrice, setMaxPrice] = useState<number>(500);

  // TODO: Exercise 1 - Use map() to display all products
  // Hint: products.map(product => <div key={product.id}>...</div>)
  const renderProducts = () => {
    return(products.map(product => <div key={product.id} className='flex gap-2'>
      <div>{product.name}</div>
      <div>{product.price}</div>
      <div>{product.category}</div>
    </div>));
  };

  // TODO: Exercise 2 - Use filter() to show only products under maxPrice
  // Hint: const filtered = products.filter(p => p.price <= maxPrice)
  const filtered = products.filter(p => p.price <= maxPrice)
  const filterProducts = () => {
    return (filtered.map(product => <div key={product.id} className='flex gap-2'>
      <div>{product.name}</div>
      <div>{product.price}</div>
      <div>{product.category}</div>
    </div>));
  };

  // TODO: Exercise 3 - Use reduce() to calculate total price of all products
  // Hint: products.reduce((sum, product) => sum + product.price, 0)
  const calculateTotal = (): number => {
    return products.reduce((sum, product) => sum + product.price, 0); // TODO: Replace with reduce() calculation
  };

  // TODO: Exercise 4 - Use filter() + reduce() to calculate total of filtered products

  const calculateFilteredTotal = (): number => {
    return filtered.reduce((sum, product) => sum + product.price, 0);; // TODO: Combine filter and reduce
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Array Methods Practice</h1>
        <p className="text-gray-600">
          Practice using map(), filter(), and reduce() - essential for React development
        </p>
      </div>

      {/* Exercise 1: Display all products */}
      <section className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Exercise 1: Display Products (map)</h2>
        <p className="text-sm text-gray-600 mb-4">
          Use <code className="bg-gray-100 px-1 rounded">map()</code> to render all products. Show name and price.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          {renderProducts()}
        </div>
      </section>

      {/* Exercise 2: Filter products by price */}
      <section className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Exercise 2: Filter by Price (filter + map)</h2>
        <p className="text-sm text-gray-600 mb-4">
          Use <code className="bg-gray-100 px-1 rounded">filter()</code> to show only products under the selected price.
        </p>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Max Price: ${maxPrice}
          </label>
          <input
            type="range"
            min="0"
            max="1000"
            step="50"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          {filterProducts()}
        </div>
      </section>

      {/* Exercise 3: Calculate total */}
      <section className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Exercise 3: Calculate Total (reduce)</h2>
        <p className="text-sm text-gray-600 mb-4">
          Use <code className="bg-gray-100 px-1 rounded">reduce()</code> to sum all product prices.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-lg">
            Total of all products: <span className="font-bold">${calculateTotal()}</span>
          </p>
        </div>
      </section>

      {/* Exercise 4: Combine filter + reduce */}
      <section className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Exercise 4: Filtered Total (filter + reduce)</h2>
        <p className="text-sm text-gray-600 mb-4">
          Combine <code className="bg-gray-100 px-1 rounded">filter()</code> and{' '}
          <code className="bg-gray-100 px-1 rounded">reduce()</code> to calculate total of products under ${maxPrice}.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-lg">
            Total under ${maxPrice}: <span className="font-bold">${calculateFilteredTotal()}</span>
          </p>
        </div>
      </section>

      {/* Expected Results */}
      <section className="border-t pt-6 bg-yellow-50 p-4 rounded-lg">
        <h3 className="font-semibold text-yellow-900 mb-2">✅ Expected Results:</h3>
        <ul className="text-sm text-yellow-800 space-y-1">
          <li>• Exercise 1: Shows all 6 products with names and prices</li>
          <li>• Exercise 2: Shows only products under selected price</li>
          <li>• Exercise 3: Shows $2054 (sum of all prices)</li>
          <li>• Exercise 4: Shows dynamic total based on filter</li>
        </ul>
      </section>
    </div>
  );
}
