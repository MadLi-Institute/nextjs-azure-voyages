import HeroNav from "@/components/Navigation/HeroNav";
import { RevealProvider } from "@/providers/RevealProvider";
import Image from "next/image";

const HeroSec = () => {
  const image_selected = Math.floor(Math.random() * random_img.length);
  return (
    <section className="w-full h-screen mb-20 md:mb-0">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={`/images/landing/heroes/${random_img[image_selected]}`}
          alt={random_img[image_selected]}
          fill={true}
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 h-fit my-auto ms-2 max-w-4xl md:ms-10 lg:ms-28">
        <RevealProvider>
          <div className="text-white flex flex-col gap-1">
            <p className="font-semibold text-lg">Welcome</p>
            <h1 className="font-semibold text-4xl md:text-8xl">
              Azure Voyages
            </h1>
            <p className="text-base md:text-xl">
              Offers extensive range of cruise options, allowing travelers to
              explore stunning destinations around the world while enjoying
              luxurious accommodations and exceptional onboard amenities.
            </p>
            <button
              type="button"
              className="rounded-full border border-white py-2 px-3 w-fit mt-2 hover:bg-white hover:text-black ease-in duration-150"
            >
              Book Now
            </button>
            <div className="mt-10">
              <p className="text-gray-300">Features</p>
              <ul className="flex flex-wrap gap-4">
                <li>Royal Caribbeans</li>
                <li>Princess</li>
                <li>Supercat</li>
              </ul>
            </div>
          </div>
        </RevealProvider>
      </div>
      <HeroNav />
    </section>
  );
};

export default HeroSec;

const random_img = [
  "pexels-raymond-10480288.jpg",
  "georgy-trofimov-jZ_TCbVxqEM-unsplash.jpg",
  "mike-swigunski-kPUhacMkULc-unsplash.jpg",
  "steve-davison-RrrX9oPszfw-unsplash.jpg",
  "yevhen-kostiuk-WB6bhWcuwKo-unsplash.jpg",
];
