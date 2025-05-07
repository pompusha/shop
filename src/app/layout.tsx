import "./globals.css";
import { ReactNode } from "react";
import { CartProvider } from "./context/CartContext";
import Link from "next/link";
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="p-4 bg-gray-100 flex justify-end">
          <Link href="/cart" className="underline text-blue-600">
            🛒 Cart
          </Link>
        </nav>
        <CartProvider>{children}</CartProvider>
        <nav className="p-4 bg-gray-100 flex justify-end">
          <Link href="/" className="underline text-blue-600">
            Go HomePage
          </Link>
        </nav>
      </body>
    </html>
  );
}
