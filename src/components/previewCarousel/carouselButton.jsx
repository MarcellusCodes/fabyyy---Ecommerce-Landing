import React from "react";
import { useSelector } from "react-redux";

const CarouselButton = () => {
  const theme = useSelector((state) => state.theme.theme);
  const buttonVariants = {
    initial: {
      translateX: -100,
      opacity: 0,
    },
    animate: {
      translateX: 0,
      opacity: 1,

      boxShadow:
        button.index === carouselIndex
          ? `0 .1rem .2rem .3rem ${
              theme === "light"
                ? "rgb(155, 248, 244, 0.6)"
                : "rgb(131, 100, 232, 0.6)"
            }`
          : 0,
    },
    transition: {
      type: "spring",
      opacity: { delay: button.index * 0.3 + 1.7 },
      translateX: { delay: button.index * 0.3 + 1.7 },
    },
  };
  return (
    <motion.button
      onClick={() => {
        setCarouselIndex(button.index);
      }}
      variants={buttonVariants}
      initial="initial"
      animate="animate"
      transition="transition"
      className="relative rounded-full w-6 h-6 bg-gradient-to-r from-light-tertiary shadow-lg to-light-quaternary dark:from-dark-tertiary dark:to-dark-quaternary font-paragraph transition-colors duration-300 text-light-primary dark:text-dark-secondary"
    >
      {button.id}
    </motion.button>
  );
};

export default CarouselButton;
