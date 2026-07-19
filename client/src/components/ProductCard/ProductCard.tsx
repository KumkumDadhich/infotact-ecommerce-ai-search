interface ProductCardProps {
  title: string;
  price: number;
  image: string;
}

const ProductCard = ({ title, price, image }: ProductCardProps) => {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm transition hover:shadow-lg">
      <img
        src={image}
        alt={title}
        className="h-48 w-full rounded-lg object-cover"
      />

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {title}
        </h3>

        <p className="mt-2 text-xl font-bold text-blue-600">
          ₹{price}
        </p>

        <button className="mt-4 w-full rounded-lg bg-blue-600 py-2 text-white transition hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;