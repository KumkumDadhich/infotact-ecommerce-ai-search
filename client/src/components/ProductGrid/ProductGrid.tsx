import ProductCard from "../ProductCard/ProductCard";

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 2999,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 4999,
    image:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
  },
  {
    id: 3,
    title: "Gaming Mouse",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db",
  },
];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductGrid;