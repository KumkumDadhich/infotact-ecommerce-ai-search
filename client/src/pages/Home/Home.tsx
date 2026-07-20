import SearchBar from "../../components/common/SearchBar";
import ProductGrid from "../../components/ProductGrid/ProductGrid";

function Home() {
  return (
    <div className="space-y-8 p-6">
      <SearchBar />
      <ProductGrid />
    </div>
  );
}

export default Home;