import barbershop from "../assets/barbershop.jpg";

function HomePage() {
  return (
    <>
      <div className="flex-col justify-items-center">
        <img src={barbershop} alt="barbershop" className="" />
      </div>
    </>
  );
}

export default HomePage;
