import SearchBar from "../../components/common/SearchBar";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import ProductGrid from "../../components/ProductGrid/ProductGrid";

function Home() {
  return (
    <div className="space-y-8 p-6">
      <SearchBar />
      <CategoryFilter />
      <ProductGrid />
    </div>
  );
}

export default Home;