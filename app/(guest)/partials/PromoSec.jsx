import PromoCard from "@/components/Card/PromoCard";
import { RevealProvider } from "@/providers/RevealProvider";
import { Divider } from "@nextui-org/divider";

const PromoSec = () => {
  return (
    <section className="py-6 overflow-hidden max-w-6xl mx-auto mt-5">
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center text-center">
        <RevealProvider>
          <div className="mb-2 md:mb-10">
            <h3 className="uppercase tracking-widest text-2xl font-bold md:text-5xl">
              99% off all cruises
            </h3>
            <Divider className="py-[2px] my-2 max-w-[110px] md:max-w-xs mx-auto" />
            <p className="md:leading-loose text-sm md:text-xl max-w-6xl mx-auto">
              Plus up to $1 off and kids sail is free*
            </p>
          </div>
        </RevealProvider>
      </div>
      <div className="flex flex-wrap gap-5 px-10 justify-center items-center">
      <PromoCard
        type="Newbie"
        price={154}
        desc="3 Nights Bahamas & Perfect Day Cruise"
        image="cody-board-eDWejEt5uZM-unsplash.jpg"
      />
      <PromoCard
        type="Casual"
        price={219}
        desc="4 Nights Perfect Day Getaway"
        image="oliver-sjostrom-epRVcpr6yf8-unsplash.jpg"
      />
      <PromoCard
        type="Family Vacation"
        price={232}
        desc="4 Night Bahamas & Perfect Day Cruise"
        image="shifaaz-shamoon-qtbV_8P_Ksk-unsplash.jpg"
      />
      </div>
    </section>
  );
};

export default PromoSec;
