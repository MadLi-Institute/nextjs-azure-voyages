'use client'
import { Select, SelectItem, SelectSection } from "@nextui-org/select";

const HeroSelect = ({ label, placeholder, data }) => {
  const headingClasses =
    "flex w-full sticky top-1 z-20 py-1.5 px-2 bg-default-100 shadow-small rounded-small";
  return (
    <Select
      label={label}
      placeholder={placeholder}
      className="px-2"
      size="sm"
      variant="underlined"
      selectionMode="multiple"
      scrollShadowProps={{
        isEnabled: false,
      }}
    >
      {data.map((v, i) => (
        <SelectSection
          key={i}
          title={v.continent}
          classNames={{
            heading: headingClasses,
          }}
        >
          {v.countries.map((x) => (<SelectItem key={x}>{x}</SelectItem>))}
        </SelectSection>
      ))}
    </Select>
  );
};

export default HeroSelect;
