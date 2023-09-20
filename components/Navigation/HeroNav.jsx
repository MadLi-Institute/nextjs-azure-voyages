import { Button } from "@nextui-org/button";
import HeroSelect from "../Input/HeroSelect";
import { placeLists } from "@/constants/CountryConst";

const HeroNav = () => {
  return (
    <div className="absolute bg-black/80 text-gray-100 py-4 px-5 -bottom-36 md:-bottom-10 left-0 right-0 mx-auto max-w-5xl rounded-lg">
      <div className="flex flex-col gap-2 md:gap-0 md:flex-row">
        <HeroSelect label="Cruise To" placeholder="Any Destination" data={placeLists} />
        <HeroSelect label="Departing From" placeholder="Any Departure Port" data={placeLists}/>
        <Button
          variant="flat"
          radius="md"
          size="lg"
          className="w-full md:w-96 mx-1 font-extralight tracking-wider"
        >
          Temp Button
        </Button>
        <Button
          variant="flat"
          radius="md"
          size="lg"
          className="w-full md:w-96 mx-1 font-extralight tracking-wider"
        >
          Search Cruises
        </Button>
      </div>
    </div>
  );
};

export default HeroNav;