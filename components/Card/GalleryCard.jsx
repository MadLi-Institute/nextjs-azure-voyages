"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import { RevealProvider } from "@/providers/RevealProvider";

const GalleryCard = ({ card }) => {
  const dropIn = {
    hidden: {
      y: "-4vh",
      x: "0",
      scale: 0.95,
      opacity: 0,
    },
    visible: {
      y: "0",
      x: "0",
      scale: 1,
      opacity: 1,
    },
    trans: {
      transition: 1.5,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition="trans"
      key={card.id}
      className="rounded-lg px-8 py-4 z-40 relative h-full w-full top-16"
    >
      <Image
        src={`/images/landing/galleries/${card.images}`}
        alt={card.images}
        loading="lazy"
        fill={true}
        className="object-cover rounded-lg absolute inset-0"
      />
      <div className="absolute inset-0 bg-black/30 rounded-lg" />
      <div className="absolute inset-0 h-fit my-auto ms-2 max-w-2xl md:ms-10 lg:ms-28">
        <RevealProvider>
          <div className="text-white flex flex-col gap-1">
            <h1 className="font-semibold text-2xl md:text-6xl">{card.types}</h1>
            <p className="text-base md:text-xl">
            {card.desc}
            </p>
          </div>
        </RevealProvider>
      </div>
    </motion.div>
  );
};

export default GalleryCard;
