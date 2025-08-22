import barbershop from "../assets/largebarber.jpg";

function HomePage() {
  return (
    <>
      <div
        className="relative h-screen w-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${barbershop})` }}
      >
        {/* Overlay  */}
        <div className="absolute inset-0 bg-black/65"></div>

        {/* Content */}
        <div className="relative flex h-full flex-col items-center justify-center">
          <h1 className="relative bg-black/85 p-5 text-center font-anton text-4xl text-white drop-shadow-lg">
            Welcome to OTBarbershop
          </h1>
          <p className="mr-2 mt-6 text-center text-lg font-bold italic text-white drop-shadow-xl">
            A modern barbershop experience where classic cuts meet clean style.
            Walk in confident, walk out sharper.
          </p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
