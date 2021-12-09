import { useState } from "react";
import { useTheme } from "../src/utils";
import { useDispatch } from "react-redux";
import { changeTheme } from "../src/features/theme/themeSlice";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, LayoutGroup } from "framer-motion";
import { ThemeButton, PrimaryButton } from "../src/components/index";

import Image from "next/image";
import Shirt1 from "../src/static/images/shirt-1.webp";
import Shirt2 from "../src/static/images/shirt-2.webp";
import Shirt3 from "../src/static/images/shirt-3.webp";

const carouselButtonContainer = {
  initial: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
      delayChildren: 1,
      delay: 2,
    },
  },
};

export default function Home() {
  const { colorTheme, setTheme } = useTheme();
  const dispatch = useDispatch();
  const [carouselIndex, setCarouselIndex] = useState(1);
  const [carouselItems, setCarouselItems] = useState([
    {
      id: 1,
      slogan: "New Drop",
      clothing: "Modern and Fit Lounge",
      img: Shirt1,
    },
    {
      id: 2,
      slogan: "Old but Gold",
      clothing: "Sporty and Camostyle",
      img: Shirt2,
    },
    {
      id: 3,
      slogan: "Sunny day",
      clothing: "For the beach",
      img: Shirt3,
    },
  ]);

  const shopButton = {
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
        colorTheme === "light"
          ? "rgb(155, 248, 244, 0.7)"
          : "rgb(131, 100, 232, 0.7)"
      }`,
      transition: {
        type: "spring",
        opacity: { delay: 1.7 },
        translateY: { delay: 1.7 },
      },
    },
    hover: {
      boxShadow: `0 2rem 4rem 6rem ${
        colorTheme === "light"
          ? "rgb(155, 248, 244, 0.7)"
          : "rgb(131, 100, 232, 0.7)"
      }`,
      scale: 1.3,
      rotate: 5,
      transition: {
        type: "spring",
      },
    },
    tap: {
      boxShadow: `0 1rem 2rem 4rem ${
        colorTheme === "light"
          ? "rgb(155, 248, 244, 0.7)"
          : "rgb(131, 100, 232, 0.7)"
      }`,
      scale: 0.9,
      rotate: -5,
      transition: {
        type: "spring",
      },
    },
  };

  const carouselButtons = [
    {
      id: 1,
      index: 1,
    },
    {
      id: 2,
      index: 2,
    },
    {
      id: 3,
      index: 3,
    },
  ];
  return (
    <motion.div
      className={`relative min-h-screen sm:h-screen svg-bg grid place-items-center ${
        colorTheme === "light" ? "dark-preview-bg" : "light-preview-bg"
      }`}
    >
      <ThemeButton
        onClick={() => {
          setTheme(colorTheme);
          dispatch(changeTheme());
        }}
      />
      <div className="flex justify-center flex-col items-center w-full px-6 mb-10">
        <motion.div
          initial={{
            opacity: 0,
            height: 0,
            boxShadow: `0 -0.2rem -0.4rem -0.6rem ${
              colorTheme === "light"
                ? "rgb(155, 248, 244, 0.6)"
                : "rgb(131, 100, 232, 0.6)"
            }`,
          }}
          animate={{
            opacity: 1,
            height: 625,
            boxShadow: `0 0.2rem 0.4rem 0.6rem ${
              colorTheme === "light"
                ? "rgb(155, 248, 244, 0.6)"
                : "rgb(131, 100, 232, 0.6)"
            }`,
          }}
          transition={{ type: "spring", delay: 0.3, bounce: 0 }}
          className="w-full mt-20 sm:mt-0 sm:w-[388px] md:w-[388px] lg:w-[388px] rounded-lg bg-light-primary dark:bg-dark-quaternary py-4 px-8 flex flex-col items-center justify-between space-y-16"
        >
          <motion.h1 className="font-secondary text-2xl text-light-secondary dark:text-dark-secondary transition-colors duration-300">
            "fabyyy"
          </motion.h1>
          <motion.div className="flex flex-col items-center space-y-6">
            {carouselItems
              .filter((item) => item.id === carouselIndex)
              .map((filteredItem) => (
                <>
                  <motion.p
                    initial={{ translateY: -100, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ type: "spring", delay: 0.8 }}
                    className="uppercase font-paragraph text-light-secondary dark:text-dark-secondary transition-colors duration-300"
                  >
                    {filteredItem.slogan}
                  </motion.p>
                  <motion.h3
                    initial={{ translateY: -100, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ type: "spring", delay: 1.1 }}
                    className="font-primary text-center text-light-secondary dark:text-dark-secondary transition-colors duration-300 text-3xl"
                  >
                    {filteredItem.clothing}
                  </motion.h3>
                  <motion.div
                    initial={{ translateY: 100, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ type: "spring", delay: 1.4 }}
                    className="w-[200px]"
                  >
                    <Image
                      src={filteredItem.img}
                      alt="Picture of the new clothing drop"
                      layout="responsive"
                      width={200}
                      height={200}
                      objectFit="cover"
                    />
                  </motion.div>
                  <PrimaryButton>Show Now</PrimaryButton>
                </>
              ))}
          </motion.div>
          <motion.div className="flex flex-row items-center space-x-3">
            {carouselButtons.map((button) => (
              <motion.button
                onClick={() => {
                  setCarouselIndex(button.index);
                }}
                initial={{ translateX: -100, opacity: 0 }}
                animate={{
                  translateX: 0,
                  opacity: 1,

                  boxShadow:
                    button.index === carouselIndex
                      ? `0 .1rem .2rem .3rem ${
                          colorTheme === "light"
                            ? "rgb(155, 248, 244, 0.6)"
                            : "rgb(131, 100, 232, 0.6)"
                        }`
                      : 0,
                }}
                transition={{
                  type: "spring",
                  opacity: { delay: button.index * 0.3 + 1.7 },
                  translateX: { delay: button.index * 0.3 + 1.7 },
                }}
                className="relative rounded-full w-6 h-6 bg-gradient-to-r from-light-tertiary shadow-lg to-light-quaternary dark:from-dark-tertiary dark:to-dark-quaternary font-paragraph transition-colors duration-300 text-light-primary dark:text-dark-secondary"
              >
                {button.id}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
