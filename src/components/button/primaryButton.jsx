import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const PrimaryButton = ({ children, onClick }) => {
  const theme = useSelector((state) => state.theme.theme);
  const buttonVariants = {
    initial: {
      translateY: 100,
      opacity: 0,
      transition: {
        type: "spring",
        delay: 1.7,
      },
    },
    animate: {
      translateY: 0,
      opacity: 1,
      boxShadow: `0 0.2rem 0.4rem 0.6rem ${
        theme === "light"
          ? "rgb(131, 100, 232, 0.7)"
          : "rgb(155, 248, 244, 0.7)"
      }`,
      transition: {
        type: "spring",
        opacity: { delay: 1.7 },
        translateY: { delay: 1.7 },
      },
    },
    hover: {
      boxShadow: `0 2rem 4rem 6rem ${
        theme === "light"
          ? "rgb(131, 100, 232, 0.7)"
          : "rgb(155, 248, 244, 0.7)"
      }`,
      scale: 1.3,
      rotate: 5,
      transition: {
        type: "spring",
      },
    },
    tap: {
      boxShadow: `0 1rem 2rem 4rem ${
        theme === "light"
          ? "rgb(131, 100, 232, 0.7)"
          : "rgb(155, 248, 244, 0.7)"
      }`,
      scale: 0.9,
      rotate: -5,
      transition: {
        type: "spring",
      },
    },
  };
  return (
    <motion.button
      onClick={onClick}
      variants={buttonVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      className="uppercase px-6 py-2 rounded-full text-light-primary bg-gradient-to-r from-light-tertiary to-light-quaternary dark:from-dark-tertiary dark:to-dark-quaternary font-paragraph transition-colors duration-300"
    >
      {children}
    </motion.button>
  );
};

export default PrimaryButton;
