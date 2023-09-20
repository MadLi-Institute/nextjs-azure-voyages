"use client";
import { Input, Button, Select, SelectItem } from "@nextui-org/react";
import { allCountryLists } from "@/constants/CountryConst";

const RegisterForm = () => {
  return (
    <form className="w-full flex flex-col gap-4 my-5">
      <Input
        isClearable
        type="text"
        variant="underlined"
        label="First Name"
        placeholder="Madison"
      />
      <Input
        isClearable
        type="text"
        variant="underlined"
        label="Last Name"
        placeholder="Li"
      />
      <Input
        isClearable
        type="email"
        variant="underlined"
        label="Email"
        placeholder="madli@example.com"
        description="We always share your email with anyone else."
      />
      <Select
        variant="underlined"
        label="Country/Location"
        placeholder="United States"
      >
        {allCountryLists.map((v) => (
          <SelectItem key={v} value={v}>
            {v}
          </SelectItem>
        ))}
      </Select>
      <Button type="button" variant="flat">
        Sign Up
      </Button>
    </form>
  );
};

export default RegisterForm;
