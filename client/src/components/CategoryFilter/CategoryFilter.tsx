const categories = [
  "All",
  "Electronics",
  "Fashion",
  "Home",
  "Sports",
  "Books",
];

const CategoryFilter = () => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category}
          className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium transition hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;