"use client";
import { RevealProvider } from "@/providers/RevealProvider";
import { Button } from "@nextui-org/button";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useState, useEffect } from "react";

const DestinationCarousel = ({data}) => {
  const [current, setCurrent] = useState(0);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    let i;
    const autoNext = () => {
      i = setInterval(() => {
        setCurrent((current) =>
          current != data.length - 1 ? current + 1 : 0
        );
      }, 3500);
    };
    autoNext();
    return () => clearInterval(i);
  }, [current, data]);

  const onPrevClick = () => {
    current > 0 && setCurrent(current - 1);
  };
  const onNextClick = () => {
    current < data.length - 1 && setCurrent(current + 1);
  };
  return (
    <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
      <div className="relative w-screen md:w-full h-full md:max-w-7xl flex items-center">
        <AnimatePresence>
          {isFocus && (
            <motion.div
              className="absolute left-2 right-2 flex justify-between z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onHoverStart={() => setIsFocus(true)}
              onHoverEnd={() => setIsFocus(false)}
            >
              <Button
                isIconOnly
                type="button"
                size="sm"
                variant="flat"
                onClick={onPrevClick}
              >{`<`}</Button>
              <Button
                isIconOnly
                type="button"
                size="sm"
                variant="flat"
                onClick={onNextClick}
              >{`>`}</Button>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          className="flex gap-4 flex-row w-full h-full relative"
          animate={{ x: `calc(-${current * 100}% - ${current}rem)` }}
          onHoverStart={() => setIsFocus(true)}
          onHoverEnd={() => setIsFocus(false)}
        >
          {data.map((v, i) => (
            <motion.img
              key={i}
              src={`/images/landing/destinations/${v.url}`}
              alt={v.url}
              className="object-cover"
              animate={{ opacity: i === current ? 1 : 0.4 }}
              transition={{ duration: 0.4 }}
            />
          ))}
        </motion.div>

        <motion.div
          className="absolute inset-0 transition duration-250 ease-in text-center"
          onHoverStart={() => setIsFocus(true)}
          onHoverEnd={() => setIsFocus(false)}
        >
          <div className="absolute inset-0 h-fit m-auto px-2 md:px-0 max-w-4xl">
            <RevealProvider>
              <motion.div className="text-white flex flex-col space-y-1">
                <h1 className="font-semibold text-4xl md:text-8xl uppercase tracking-wider">
                  {data[current].title}
                </h1>
                <p className="text-base md:text-xl">
                {data[current].desc}
                </p>
              </motion.div>
            </RevealProvider>
          </div>
        </motion.div>

        <AnimatePresence>
          {isFocus && (
            <motion.div
              className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onHoverStart={() => setIsFocus(true)}
              onHoverEnd={() => setIsFocus(false)}
            >
              <div className="flex gap-3 px-3 bg-slate-200/10 rounded-full opacity-80">
                {data.map((v, i) => (
                  <Button
                    isIconOnly
                    type="button"
                    variant={current === i ? "solid" : "flat"}
                    size="sm"
                    key={i}
                    onClick={() => setCurrent(i)}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
};

export default DestinationCarousel;
