import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Navbar() {
  return (
    <nav className="h-21 flex items-center justify-between border-b-2 bg-black text-white">
      <Link to="/" className="flex h-full items-center">
        <img src={logo} alt="Logo" className="ml-2 h-20 w-40 cursor-pointer" />
      </Link>
      <a
        href="/book"
        className="flex h-full items-center px-6 font-anton text-xl tracking-wider transition-colors duration-700 ease-in-out hover:bg-white hover:text-black"
      >
        BOOK NOW
      </a>
    </nav>
  );
}

export default Navbar;
