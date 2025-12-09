'use client';

// TODO: Exercise 1 - Add proper types to these props
// Hint: Create a type like: type UserCardProps = { ... }
function UserCard(props: any) {
  return (
    <div className="border p-4 rounded-lg">
      <h3 className="font-semibold">{props.name}</h3>
      <p className="text-sm text-gray-600">{props.email}</p>
      {props.role && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{props.role}</span>}
    </div>
  );
}

// TODO: Exercise 2 - Create a type for Product
// Hint: type Product = { id: number; name: string; price: number; inStock?: boolean }
// Then use it to type the products array below
const products = [
  { id: 1, name: 'Laptop', price: 999, inStock: true },
  { id: 2, name: 'Mouse', price: 29, inStock: false },
];

// TODO: Exercise 3 - Type the ProductList component props
// It should accept an array of products
function ProductList(props: any) {
  return (
    <div className="space-y-2">
      {props.products.map((product: any) => (
        <div key={product.id} className="border p-3 rounded">
          <p className="font-medium">{product.name}</p>
          <p className="text-sm text-gray-600">${product.price}</p>
          <p className="text-xs">
            {product.inStock ? '✅ In Stock' : '❌ Out of Stock'}
          </p>
        </div>
      ))}
    </div>
  );
}

// TODO: Exercise 4 - Type the form data
// Create a type for the form state
function ContactForm() {
  // TODO: Add proper types to useState
  // Hint: useState<FormData>({ name: '', email: '', message: '' })
  const [formData, setFormData] = (null as any);

  return (
    <div className="text-sm text-gray-500">
      <p>TODO: Type the form state and handlers</p>
    </div>
  );
}

export default function TypeScriptPractice() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">TypeScript Practice</h1>
        <p className="text-gray-600">
          Practice adding types to components, props, and state
        </p>
      </div>

      {/* Exercise 1 */}
      <section className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Exercise 1: Type Component Props</h2>
        <p className="text-sm text-gray-600 mb-4">
          Replace <code className="bg-gray-100 px-1 rounded">any</code> with proper types in UserCard component.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg space-y-3">
          <UserCard name="Alice" email="alice@example.com" role="Admin" />
          <UserCard name="Bob" email="bob@example.com" />
        </div>
      </section>

      {/* Exercise 2 */}
      <section className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Exercise 2: Create Product Type</h2>
        <p className="text-sm text-gray-600 mb-4">
          Define a <code className="bg-gray-100 px-1 rounded">Product</code> type and use it for the products array.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <pre className="text-xs bg-gray-800 text-gray-100 p-3 rounded overflow-x-auto">
            {JSON.stringify(products, null, 2)}
          </pre>
        </div>
      </section>

      {/* Exercise 3 */}
      <section className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Exercise 3: Type ProductList Props</h2>
        <p className="text-sm text-gray-600 mb-4">
          Add proper types to the ProductList component props.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <ProductList products={products} />
        </div>
      </section>

      {/* Exercise 4 */}
      <section className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Exercise 4: Type Form State</h2>
        <p className="text-sm text-gray-600 mb-4">
          Create a type for form data and type the useState hook.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <ContactForm />
        </div>
      </section>

      {/* Expected Results */}
      <section className="border-t pt-6 bg-yellow-50 p-4 rounded-lg">
        <h3 className="font-semibold text-yellow-900 mb-2">✅ Expected Results:</h3>
        <ul className="text-sm text-yellow-800 space-y-1">
          <li>• No TypeScript errors in the file</li>
          <li>• No <code className="bg-yellow-100 px-1">any</code> types remain</li>
          <li>• Props have proper autocomplete in your editor</li>
          <li>• Optional properties marked with <code className="bg-yellow-100 px-1">?</code></li>
        </ul>
      </section>
    </div>
  );
}
