"use client";

import { useCart } from "../context/CartContext";
import Link from "next/link";
export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex justify-between items-center border p-4 rounded"
            >
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p>${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="mt-6 text-xl font-bold">
            Total: ${total.toFixed(2)}
          </div>

          <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
            Proceed to Checkout (not implemented)
          </button>
          
        </div>
      )}
      <Link href="/checkout">
  <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
    Proceed to Checkout
  </button>
</Link>

    </main>
  );
}
