import SearchBar from "../../components/common/SearchBar";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";

function Home() {
  return (
    <div className="space-y-12 p-6">
      <SearchBar />
      <CategoryFilter />
      <ProductGrid />
      <FeaturedProducts />
    </div>
  );
}

export default Home;