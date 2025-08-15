import logo from "../assets/logo.jpg";

function Navbar() {
  return (
    <nav className="border-b-2 bg-[black]">
      <img src={logo} className="ml-2 h-20 w-40" />
    </nav>
  );
}

export default Navbar;
