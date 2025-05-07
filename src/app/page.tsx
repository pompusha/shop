"use client";

import { useState } from "react";
import ProductCard from "./components/ProductCard";
import CategoryFilter from "./components/CategoryFilter";
import { products as allProducts } from "./data/products";
import { useCart } from "./context/CartContext";

export default function HomePage() {
  const [filtered, setFiltered] = useState(allProducts);
  const { cart } = useCart(); // cart context

  const categories = Array.from(new Set(allProducts.map((p) => p.category)));

  const handleFilter = (category: string) => {
    if (category === "All") {
      setFiltered(allProducts);
    } else {
      setFiltered(allProducts.filter((p) => p.category === category));
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">SimplyWear Store</h1>

      <CategoryFilter categories={categories} onFilter={handleFilter} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* 🛒 Cart Preview Section */}
      {/* <div className="mt-10">
        <h2 className="text-xl font-bold mb-2">
          🛒 Cart Preview ({cart.length} item{cart.length !== 1 ? "s" : ""})
        </h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li key={`${item.id}-${index}`} className="border p-2 rounded">
                {item.title} – ${item.price}
              </li>
            ))}
          </ul>
        )}
      </div> */}
    </main>
  );
}
