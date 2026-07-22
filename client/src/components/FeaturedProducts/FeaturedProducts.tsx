import ProductCard from "../ProductCard/ProductCard";

const featuredProducts = [
  {
    id: 1,
    title: "Premium Laptop",
    price: 59999,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
  },
  {
    id: 2,
    title: "Wireless Earbuds",
    price: 3499,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90",
  },
  {
    id: 3,
    title: "Smart Phone",
    price: 24999,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Featured Products
        </h2>
        <p className="mt-2 text-gray-600">
          Discover our most popular products selected for you.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;