import { RevealProvider } from "@/providers/RevealProvider";
import Image from "next/image";

const BannerSec = () => {
  return (
    <section className="w-full h-96 relative group text-center py-6 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/landing/banners/fernando-jorge-rMaWin9-9Gk-unsplash.jpg"
          alt="fernando-jorge-rMaWin9-9Gk-unsplash.jpg"
          fill={true}
          sizes="auto"
          className="object-cover absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 transition duration-300 ease-in bg-black/30 group-hover:bg-black/50" />
      <div className="absolute md:bottom-4 h-fit inset-0 m-auto max-w-4xl transition-transform duration-300 group-hover:scale-105 md:group-hover:scale-105">
        <div className="text-white flex flex-col gap-1">
          <RevealProvider>
            <h1 className="font-semibold text-4xl md:text-6xl">Get Ready for Adventure</h1>
            <p className="text-base md:text-lg">Set sail for unforgettable memories and discover a world of adventure for less with our exclusive membership promos.</p>
            <button
              type="button"
              className="rounded-full border border-white py-2 px-4 w-fit mt-2 hover:bg-white hover:text-black ease-in duration-150"
            >
              Sign Up
            </button>
          </RevealProvider>
        </div>
      </div>
    </section>
  );
};

export default BannerSec;
