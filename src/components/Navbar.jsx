import logo from "../assets/logo.jpg";

function Navbar() {
  return (
    <nav className="flex h-20 items-center justify-between border-b-2 bg-black text-white">
      <img src={logo} className="ml-2 max-h-full w-auto object-contain" />

      <a
        href="/book"
        className="font-anton flex h-full items-center px-6 text-xl tracking-wider transition-colors duration-700 ease-in-out hover:bg-white hover:text-black"
      >
        BOOK NOW
      </a>
    </nav>
  );
}

export default Navbar;
