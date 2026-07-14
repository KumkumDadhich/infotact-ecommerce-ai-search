import HeroButton from "./HeroButton";

const Hero = () => {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center bg-gray-50 px-6 text-center">

      <h1 className="mb-4 text-5xl font-bold text-gray-900">
        Discover Amazing Products
      </h1>

      <p className="mb-8 max-w-xl text-lg text-gray-600">
        Shop smarter with AI-powered search and discover products
        that perfectly match your needs.
      </p>

      <div className="flex gap-4">
        <HeroButton title="Shop Now" />
        <HeroButton
          title="Explore Categories"
          variant="secondary"
        />
      </div>

    </section>
  );
};

export default Hero;