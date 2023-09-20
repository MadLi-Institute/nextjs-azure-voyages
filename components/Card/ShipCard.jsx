import { RevealProvider } from "@/providers/RevealProvider";
import Image from "next/image";

const ShipCard = ({ card }) => {
  return (
    <div className="group relative h-screen w-screen overflow-hidden text-start">
      <Image src={`/images/landing/ships/${card.url}`} alt={card.url} fill={true} className="object-cover absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"/>
      <div className="absolute inset-0 transition duration-300 ease-in bg-black/40 group-hover:bg-black/10" />
      <div className="absolute bottom-20 md:bottom-4 h-fit my-auto ms-3 max-w-2xl md:ms-10 lg:ms-28 transition-transform duration-300 group-hover:scale-105 md:group-hover:scale-110">
        <div className="text-white flex flex-col gap-1">
          <RevealProvider>
            <p className="font-semibold text-lg">{card.company}</p>
            <h1 className="font-semibold text-5xl md:text-8xl">{card.title}</h1>
            <p className="text-lg md:text-xl">
              {card.desc}
            </p>
            <button
              type="button"
              className="rounded-full border border-white py-2 px-2 w-fit mt-2 hover:bg-white hover:text-black ease-in duration-150"
            >
              Learn More
            </button>
          </RevealProvider>
        </div>
      </div>
    </div>
  );
};

export default ShipCard;
