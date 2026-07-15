import HeroButton from "./HeroButton";

const Hero = () => {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center bg-gray-50 px-6 text-center">

      <h1 className="mb-4 text-5xl font-bold text-gray-900">
        AI Powered E-Commerce
      </h1>

      <p className="mb-8 max-w-2xl text-lg text-gray-600">
        Discover products instantly using AI-powered search.
        Shop smarter, faster and better.
      </p>

      <div className="flex gap-4">
        <HeroButton title="Explore Products" />
        <HeroButton
          title="Learn More"
          variant="secondary"
        />
      </div>

    </section>
  );
};

export default Hero;