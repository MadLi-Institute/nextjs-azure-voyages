import FeatureCarousel from "@/components/Carousel/FeatureCarousel";
import { RevealProvider } from "@/providers/RevealProvider";

const FeatureSec = () => {
  return (
    <section className="py-5 md:py-16 text-center">
        <RevealProvider>
          <h3 className="uppercase tracking-widest text-2xl font-bold mb-10 md:text-5xl">
            Cruise into the Heartbeat of Luxury
          </h3>
        </RevealProvider>
        <FeatureCarousel data={raw_data}/>
        <RevealProvider>
          <p className="md:leading-loose mt-10 text-sm md:text-xl max-w-6xl mx-auto">
            Cruise ships offer a luxurious and all-inclusive vacation experience like no other. These mammoth floating resorts provide a unique way to explore the world&apos;s most beautiful destinations, combining elegant accommeodations, thrilling activities, delectable dining, and exceptional entertainment
          </p>
        </RevealProvider>
    </section>
  );
};

export default FeatureSec;

const raw_data = [
  {
    url: "windstar-cruises-star-breeze.jpg",
    title: "Star Breeze",
    company: "Windstar Cruises",
    desc: "Large enough to pamper and entertain you, yet small enough to luck into delightful tiny harbors and hidden coves that others cannot reach."
  },
  {
    url: "ponant-le-commandant-charcot.jpg",
    title: "Le Commandant Charcot",
    company: "Ponant",
    desc: "World's only luxury icebreaker powered by liquefied natural gas, and the latest addition to the PONANT fleet, has now made it possible to operate polar expedition cruises of a kind never before undertaken."
  },
  {
    url: "regent-seven-seas-cruises-seven-seas-splendor.jpg",
    title: "Seven Seas Splendor",
    company: "Regent Seven Seas Cruises",
    desc: "No matter how large you choose to live on Seven Seas Splendor, the same exceptional standards of design, comfort and all-inclusive luxury apply to every suite."
  },
  {
    url: "princess-sky-princess.jpeg",
    title: "Sky Princess",
    company: "Princess",
    desc: "Enjoy a glass of wine from Vines, escape to The Santuary retreat, or try your luck at the Casino. Sky Princess has something to offer everyone who steps onboard."
  },
  {
    url: "seabourn-seabourn-odyssey.jpg",
    title: "Seabourn Odyssey",
    company: "Seabourn",
    desc: "Onboard activities each day on board offers delicious dining options, world-class entertainment and enriching activities."
  },
  {
    url: "royal-caribbeans-sympony-of-the-seas.jpg",
    title: "Symphony of the Seas",
    company: "Royal Caribbeans",
    desc: "Get ready for a perception remixing, memory maxing mic drop Symphony of the Seas is all that and more."
  },
  {
    url: "royal-caribbeans-icon-of-the-seas.jpeg",
    title: "Icon of the Seas",
    company: "Royal Caribbeans",
    desc: "Brings on the most thrilling Western Caribbean adventures for the whole family."
  },
];
