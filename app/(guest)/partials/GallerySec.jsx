import GalleryShow from "@/components/Slideshow/GalleryShow";
import { RevealProvider } from "@/providers/RevealProvider";
import { Divider } from "@nextui-org/divider";


const GallerySec = () => {

  return (
    <section className="py-5 md:py-16 overflow-hidden">
      <RevealProvider>
        <div className="mb-2 md:mb-10 text-center">
          <h3 className="uppercase tracking-widest text-2xl font-bold md:text-5xl">
            Galleries
          </h3>
          <Divider className="py-[2px] my-2 max-w-[110px] md:max-w-xs mx-auto" />
          <p className="md:leading-loose text-sm md:text-xl max-w-6xl mx-auto">
            Highlighting and Presenting the various amenities, facilities, and attractions available on a cruise ship
          </p>
        </div>
      </RevealProvider>
      <div className="flex w-full flex-col justify-center items-center mb-16 relative h-[70vh] md:h-[85vh]">
        <GalleryShow data={raw_data}/>
      </div>
    </section>
  );
};

export default GallerySec;

const raw_data = [
  {
    id: 0,
    types: "Side Deck",
    images: "jannik-BpfzQwZokcI-unsplash.jpg",
    desc: "Feature loungers, outdoor seating areas, and sometimes even jogging tracks or additional recreational activities, which provide an opportunity for passengers to enjoy the fresh air and scenic views while on cruise."
  },
  {
    id: 1,
    types: "Restobar",
    images: "pexels-quang-nguyen-vinh-6877599.jpg",
    desc: "Offers a variety of culinary options, including meals, snacks, and beverages, to provide dining and relaxation experience for cruise passengers."
  },
  {
    id: 2,
    types: "Restaurant",
    images: "elyne-anthonissen-antPBvwsFpE-unsplash.jpg",
    desc: "Offers a range of menus and dining options, including buffet-style dining, a la carte menus, specialty restaurants, and room service. Cruise ship restaurants ofter provide high quality dining experiences with a focus on quality ingredients, culinary expertise, and attentive service."
  },
  {
    id: 3,
    types: "Auditorium",
    images: "doug-morris-51knFeJrriA-unsplash.jpg",
    desc: "Refers to a large, dedicated space on a cruise ship that is designed to accommodate a sizable audience for various entertainment, performing arts, and educational activities."
  },
  {
    id: 4,
    types: "Sightseeing",
    images: "robert-linder-Hjwx-bCzpxg-unsplash.jpg",
    desc: "Passengers on a cruise ship can enjoy scenic views of coastal landscapes, landmarks, and natural wonders while onboard, with the ship often making stops at various ports of call along the way."
  },
];