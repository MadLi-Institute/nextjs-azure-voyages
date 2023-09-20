import DestinationCarousel from "@/components/Carousel/DestinationCarousel";
import { RevealProvider } from "@/providers/RevealProvider";
import { Divider } from "@nextui-org/divider";

const DestinationSec = () => {
  return (
    <section className="flex flex-col items-center justify-between py-5 md:py-16 overflow-hidden text-center">
      <RevealProvider>
        <div className="mb-2 md:mb-10">
          <h3 className="uppercase tracking-widest text-2xl font-bold md:text-5xl">
            World-famous tourist destinations
          </h3>
          <Divider className="py-[2px] my-2 max-w-[110px] md:max-w-xs mx-auto" />
          <p className="md:leading-loose text-sm md:text-xl max-w-6xl mx-auto">
            These destinations showcase a combination of diverse landscapes, architectural wonders, vibrant cultures, or a rich heritage that make them highly sought-after among travelers seeking adventure, relaxation, or cultural immersion
          </p>
        </div>
      </RevealProvider>
      <div className="h-screen md:h-fit">
        <DestinationCarousel data={raw_data}/>
      </div>
    </section>
  );
};

export default DestinationSec;

const raw_data = [
  {
    id: 1,
    url: "srikant-sahoo-r2L6vCKaVRk-unsplash.jpg",
    title: "Australia",
    desc: "Known for its unique wildlife stunnig landscapes, and diverse culture. It is home to iconic landmarks such as the Great Barrier Reef, Uluru, the Sydney Opera House, and the beautiful beachess along the coastline."
  },
  {
    id: 2,
    url: "manuel-cosentino-n--CMLApjfI-unsplash.jpg",
    title: "Japan",
    desc: "An Island Nation in East Asia, is known for its rich history, unique tradition culture, and technological advancements. Japan is a popular tourist destination, attracting visitors with its stunning landscapes, modern cities like Tokyo and Kyoto, and renowned historical sites such as Mount Fuji and Hiroshima Peace Memorial Park."
  },
  {
    id: 3,
    url: "gerson-repreza-cpmZ9WkkYGE-unsplash.jpg",
    title: "U.S.A",
    desc: "Vast and Diverse country that offeres something for every type of traveler. From iconic landmarks to stunning natural landscapes, the USA has it all. From the stunning coastlines of California to the historic charm of Boston, the United States is an unforgettable destination for travelers seeking diverse experiences, cultural richness, and natural beauty."
  },
  {
    id: 4,
    url: "nikolay-kovalenko-NaizwwZcQQE-unsplash.jpg",
    title: "France",
    desc: "Vibrant and Diverse country that offeres a range of attractions for all tpyes of tourists. From stunning architecture to exquisite cuisine and beautiful landscapes, France has something to offer everyone. Parism the capital city, is known for its iconic landmarks such as the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral."
  },
  {
    id: 5,
    url: "tapio-haaja-bpDJvls-h-0-unsplash.jpg",
    title: "Finland",
    desc: "The country is famous for its numerous lakes, picturesque forests, and beautiful archipelagos, makingit an ideal destination for nature lovers. One must not miss the opportunity to explore Finland's capital city, Helsinki. With its mix of modern architecture and historical landmarks. Helsinki offers a blend of urban and cultural experiences."
  },
  {
    id: 6,
    url: "ming-jun-tan-o6ICDlt5_2k-unsplash.jpg",
    title: "United Kingdom",
    desc: "Known for its rich history, vibrant culture, and stunning landscapes. The country consists of England, Scotland, Wales, and Northern Ireland, each offering its own unique experiences. In England, visitors can explore iconic landmarks such as the Tower of London, Buckingham Palace, and Stonehenge."
  },
  {
    id: 7,
    url: "james-ting-6N2mSJsKTtA-unsplash.jpg",
    title: "Greece",
    desc: "Widely known for its ancient history, beautiful islands, and delicious cuisine, offers an incredible travle experience for tourists. Athens, is the must visit for history enthusiasts and beyond Athens, Greece's islands are its biggest draw. Santorini, with its picturesque white-washed buildings, blue-domed churches, and stunning sunsets, is one of the most popular destinations."
  },
];