import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="mx-auto mt-8 flex w-full max-w-2xl items-center rounded-xl border bg-white px-4 py-3 shadow-md">
      <Search className="mr-3 text-gray-500" size={20} />

      <input
        type="text"
        placeholder="Search products with AI..."
        className="w-full border-none outline-none"
      />

      <button className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
        Search
      </button>
    </div>
  );
};

export default SearchBar;