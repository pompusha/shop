type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-cover rounded mb-2"
      />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-700">${product.price}</p>
      <button className="mt-2 bg-black text-white px-4 py-1 rounded">Add to Cart</button>
    </div>
  );
}
