"use client";
import { useEffect, useState } from "react";
import GalleryCard from "../Card/GalleryCard";
import Image from "next/image";

const GalleryShow = ({data}) => {
  const [currentCard, setCurrentCard] = useState(() => data[0]);

  useEffect(() => {
    let i;
    const autoNext = () => {
      i = setInterval(() => {
        setCurrentCard(
          (currentCard) => data[(currentCard.id + 1) % data.length]
        );
      }, 3500);
    };
    currentCard && autoNext();
    return () => clearInterval(i);
  }, [currentCard, data]);
  return (
    <>
      <Image
        src={`/images/landing/galleries/${
          data[(currentCard.id + 2) % data.length].images
        }`}
        width={500}
        height={500}
        quality={10}
        loading="lazy"
        alt={data[(currentCard.id + 2) % data.length].images}
        className="absolute rounded-md transform scale-90 top-2 h-72 w-full z-20 object-cover opacity-25 blur-[1.4px]"
      />
      <Image
        src={`/images/landing/galleries/${
          data[(currentCard.id + 1) % data.length].images
        }`}
        width={500}
        height={500}
        quality={10}
        loading="lazy"
        alt={data[(currentCard.id + 1) % data.length].images}
        className="absolute rounded-md transform scale-95 top-9 h-72 w-full z-30 object-cover opacity-50 blur-[1px]"
      />
      <GalleryCard card={currentCard} />
    </>
  );
};

export default GalleryShow;
