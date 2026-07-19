import SearchBar from "../../components/common/SearchBar";
import ProductCard from "../../components/ProductCard/ProductCard";

function Home() {
  return (
    <div className="space-y-8 p-6">
      <SearchBar />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProductCard
          title="Wireless Headphones"
          price={2999}
          image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
        />

        <ProductCard
          title="Smart Watch"
          price={4999}
          image="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
        />

        <ProductCard
          title="Gaming Mouse"
          price={1499}
          image="https://images.unsplash.com/photo-1527814050087-3793815479db"
        />
      </div>
    </div>
  );
}

export default Home;