"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import ShipCard from "../Card/ShipCard";

const FeatureCarousel = ({data}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {data.map((v, i) => (
            <ShipCard card={v} key={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureCarousel;
