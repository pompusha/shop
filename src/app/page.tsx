import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">SimplyWear Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
