type HeroButtonProps = {
  title: string;
  variant?: "primary" | "secondary";
};

const HeroButton = ({
  title,
  variant = "primary",
}: HeroButtonProps) => {
  return (
    <button
      className={`rounded-lg px-6 py-3 font-semibold transition-all duration-300 ${
        variant === "primary"
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "border border-blue-600 text-blue-600 hover:bg-blue-50"
      }`}
    >
      {title}
    </button>
  );
};

export default HeroButton;