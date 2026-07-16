import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          AI Store
        </Link>

        {/* Navigation */}
        <nav className="hidden gap-6 md:flex">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link to="/products" className="hover:text-blue-600">
            Products
          </Link>

          <Link to="/login" className="hover:text-blue-600">
            Login
          </Link>
        </nav>

        <button className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Navbar;