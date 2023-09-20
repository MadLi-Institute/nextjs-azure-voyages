"use client";
import { RevealProvider } from "@/providers/RevealProvider";
import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";
import Image from "next/image";

const PromoCard = ({ type, price, desc, image }) => {
  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className="relative h-96 w-64 md:w-80 shrink-0 overflow-hidden rounded-xl bg-slate-700/25 p-8"
    >
      <div className="relative z-10 text-white text-start h-full">
        <RevealProvider>
          <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
            {type}
          </span>
        </RevealProvider>
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="my-2 block origin-top-left font-bold text-3xl"
        >
          <RevealProvider>{desc}</RevealProvider>
        </motion.span>
        <div className="absolute bottom-14">
          <RevealProvider>
            <p className="text-base">Starting from*</p>
            <p className="text-2xl font-semibold">${price}/person</p>
          </RevealProvider>
        </div>
      </div>
      <Image
        src={`/images/landing/promos/${image}`}
        alt={image}
        fill={true}
        sizes="auto"
        className="absolute inset-0 object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <Button
        variant="flat"
        className="absolute bottom-4 left-4 right-4 z-20 tracking-wider"
      >
        View Date
      </Button>
    </motion.div>
  );
};

export default PromoCard;
