import barbers from "../data/barbers";

function BarberCard() {
  return (
    <>
      <div>
        <div className="">
          {barbers.map((barber) => (
            <>
              <img src={barber.photo} className="h-10 w-10" />
              <h1>{barber.name}</h1>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default BarberCard;
