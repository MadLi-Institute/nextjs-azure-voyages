"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { navLinks } from "@/constants/LinkConst";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBordered={true}
      shouldHideOnScroll={true}
      maxWidth="xl"
      className="z-50"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image
            src="/images/svg/navbar-logo.svg"
            width={150}
            height={150}
            quality={50}
            priority
            alt="navbar-logo.svg"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navLinks.map((v, i) => (
          <NavbarItem key={i} className="mx-7 uppercase">
            <Link color="foreground" href={v.url}>
              {v.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button as={Link} href="#" variant="flat" radius="sm" size="lg">
            Book Now
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {navLinks.map((v, i) => (
          <NavbarMenuItem key={i}>
            <Link className="w-full" href={v.url} size="lg">
              {v.title}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Button as={Link} href="#" variant="flat" radius="sm" size="lg" className="w-full">
            Book Now
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
