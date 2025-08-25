import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Container from "./Container";
import { useGSAP } from "@gsap/react";
import CustomEase from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

const ITEMS = ["Home", "Project", "Services", "About us", "Contact"];
const sub = ["ontwerp", "visualisatie", "interactie"];
const Navigation = () => {
  // useGSAP(() => {
  //   CustomEase.create("hop", ".87, 0, .13, 1");
  //   const textContainer = document.querySelectorAll(".menu-col");
  //   let splitTextContainer = [];
  //   textContainer.forEach((container) => {
  //     const textElement = container.querySelectorAll("li, p, h1, a");
  //     let containerSplits = [];
  //     textElement.forEach((element) => {
  //       const split = SplitText.create(element, {
  //         type: "lines",
  //         mask: "lines",
  //         linesClass: "line",
  //       });
  //       containerSplits.push(split);
  //       gsap.set(split.lines, { y: "-110%" });
  //     });
  //     splitTextContainer.push(containerSplits);
  //   });
  // }, []);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(0);
  const hover = `relative  after:content-[''] after:absolute after:left-0 after:-bottom-1 
                 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 
                 hover:after:w-full `;
  return (
    <div className="relative">
      <nav className="fixed w-full z-5">
        <Container>
          <div className="flex items-center z-2 justify-between relative menu-bar">
            <div className="menu-logo">
              <p className="font-normal text-[1.6rem]">Studio D</p>
            </div>
            <div className="flex items-center gap-3.5 overflow-clip">
              <motion.p
                layout
                initial={{ y: 0 }}
                animate={{ y: open ? "-100%" : 0, opacity: open ? 0 : 1 }}
                transition={{
                  type: "spring",
                  bounce: 0,
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="font-normal  font-Neue text-neutral-800/90 text-[13.2px]"
              >
                Menu
              </motion.p>
              <motion.div
                whileHover={{ scale: 0.95 }}
                onClick={() => setOpen((open) => !open)}
                style={{ backgroundColor: open ? "white" : "black" }}
                className=" cursor-pointer flex transition-colors duration-200 flex-col items-center justify-center size-11  gap-1 p-4 rounded-full"
              >
                <div
                  className="w-[19px]  h-[1.4px] transition-colors duration-150 "
                  style={{ backgroundColor: open ? "black" : "white" }}
                />
                <div
                  className="w-[19px]  h-[1.4px] transition-colors duration-150  "
                  style={{ backgroundColor: open ? "black" : "white" }}
                />
              </motion.div>
            </div>
          </div>
        </Container>
      </nav>
      <motion.div
        initial={{ y: "-200%" }}
        animate={{ y: open ? 0 : "-200%" }}
        transition={{ type: "spring", bounce: 0, duration: 0.3 }}
        className="h-[100dvh] w-dvw bg-black absolute inset-0 justify-center flex items-center"
      >
        <div className="w-full h-full relative">
          <video
            src="/Home.mp4"
            className="h-full w-full object-center object-cover"
          />
        </div>
        <div className="w-full h-full text-white">
          <div className="mx-auto flex flex-col gap-4 px-[4rem] w-full pt-[6rem]">
            <div className="flex items-center gap-2 w-full">
              <div className="flex flex-col  p-2 w-full">
                {ITEMS.map((item, index) => (
                  <ul
                    key={index}
                    className="menu-col font-Polysans overflow-clip   w-fit relative pb-2  font-medium leading-[60px] text-[60px]"
                  >
                    <a
                      href="#"
                      key={index}
                      className=""
                      onMouseEnter={() => setHovered(index)}
                      onMouseLeave={() => setHovered(0)}
                    >
                      <AnimatePresence>
                        {hovered === index && (
                          <motion.div
                            exit={{ scaleX: 0 }}
                            key={index}
                            layoutId={`underline-${index}`}
                            transition={{
                              type: "spring",
                              bounce: 0.3,
                              delay: 0.03,
                              duration: 1,
                              stiffness: 200,
                              damping: 30,
                              layout: { duration: 1 },
                              ease: "easeInOut",
                            }}
                            initial={{
                              scaleX: 0,
                              originX: index === 0 ? 1 : 0,
                            }}
                            animate={{
                              scaleX: 1,
                              transformOrigin: index === 0 ? "right" : "left",
                            }}
                            style={{
                              transformOrigin: index === 0 ? "right" : "left",
                            }}
                            className="bg-neutral-400 h-1 w-full absolute z-5  -bottom-[2px]  left-0 right-0"
                          />
                        )}
                      </AnimatePresence>

                      {item}
                    </a>
                  </ul>
                ))}
              </div>
              <div className="relative  w-full h-[20rem]">
                <div className="list-none menu-col text-left absolute text-[23px] capitalize leading-[30px] right-0 bottom-0 font-Ivar items-end  flex flex-col justify-end">
                  {sub.map((item) => (
                    <li className={hover} key={item}>
                      {item}
                    </li>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full mt-[4rem] font-Neue text-neutral-400 flex items-start justify-between">
              <h1 className={`${hover} menu-col`}>Toronto, Canada</h1>
              <div className="flex text-[1rem] flex-col menu-col">
                <p className={hover}> +31 (0)26 2344 904</p>

                <p className={hover}>mail@studiod.nu</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navigation;
