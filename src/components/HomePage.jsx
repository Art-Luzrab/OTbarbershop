import barbershop from "../assets/largebarber.jpg";

function HomePage() {
  return (
    <>
      <div
        className="h-screen w-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${barbershop})` }}
      ></div>
    </>
  );
}

export default HomePage;
