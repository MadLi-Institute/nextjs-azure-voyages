import { RevealProvider } from "@/providers/RevealProvider";

const AchieveSec = () => {
  return (
    <section className="py-5 md:py-16 max-w-7xl mx-auto px-3">
      <RevealProvider>
        <h3 className="text-xl font-semibold uppercase">
          The most boring cruise destinations
        </h3>
      </RevealProvider>
      <RevealProvider>
        <h1 className="font-semibold text-4xl md:text-5xl uppercase py-2">
          and most-boring ships
        </h1>
      </RevealProvider>
      <RevealProvider>
        <p className="text-lg py-2">
          Unlock a world of wonder and intrigue as our brand takes you on
          immersive cultural encounters, providing a deep connection to the
          destinations you visit. Explore the azure seas with us and redefine
          your travel experience.
        </p>
      </RevealProvider>
      <RevealProvider>
        <p className="text-lg py-2">
          These luxurious floating cities are the gateway to breathtaking
          tourist destinations, be it the pristine beaches of the Caribbean or
          the magnificent glaciers of Alaska. Imagine waking up to the soothing
          sound of waves, knowing that each day will be a brand-new adventure.
          In the Caribbean, passengers disembark to explore tropical wonders,
          swim with colorful fishes in vibrant coral reefs, and bask under the
          warm Caribbean sun. Alternatively, in Alaska, visitors are greeted by
          awe-inspiring icy landscapes, witnessing the mighty glaciers calving
          into the sea, and spotting majestic whales breaching the surface.
        </p>
      </RevealProvider>
      <RevealProvider>
        <p className="text-lg py-2">
          Cruise ships not only offer a memorable escape from the ordinary, but
          they also provide an opportunity to form lifelong connections.
          Travelers from all walks of life come together to share stories, dance
          to lively rhythms, and create unforgettable memories. As the ship
          sails back towards the port of embarkation, passengers bid farewell to
          their floating home, cherishing the moments of joy and mesmerizing
          scenery that will forever remain etched in their hearts.
        </p>
      </RevealProvider>
    </section>
  );
};

export default AchieveSec;
