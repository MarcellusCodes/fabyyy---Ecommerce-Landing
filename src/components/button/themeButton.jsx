import React from "react";
import { motion } from "framer-motion";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { changeTheme } from "../../features/theme/themeSlice";
import { useSelector } from "react-redux";

const ThemeButton = ({ onClick }) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <>
      <motion.button
        onClick={onClick}
        className="absolute top-1 right-1 rounded-full w-12 h-12 text-light-primary bg-gradient-to-r from-light-tertiary shadow-lg to-light-quaternary dark:from-dark-tertiary dark:to-dark-quaternary font-paragraph transition-colors duration-300"
      >
        {theme === "light" ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </motion.button>
    </>
  );
};

export default ThemeButton;
