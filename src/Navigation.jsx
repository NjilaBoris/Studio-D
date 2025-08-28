import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Container from "./Container";
import { useGSAP } from "@gsap/react";
import CustomEase from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import Lenis from "lenis";

const ITEMS = ["Home", "Project", "Services", "About us", "Contact"];
const sub = ["ontwerp", "visualisatie", "interactie"];
const Navigation = () => {
  useGSAP(() => {
    CustomEase.create("hop", ".87, 0, .13, 1");
    const textContainer = document.querySelectorAll(".menu-col");
    let splitTextContainer = [];
    textContainer.forEach((container) => {
      const textElement = container.querySelectorAll("a, p");
      let containerSplits = [];
      textElement.forEach((element) => {
        const split = SplitText.create(element, {
          type: "lines",
          mask: "lines",
          linesClass: "line",
        });
        containerSplits.push(split);
        gsap.set(split.lines, { y: "-110%" });
      });
      splitTextContainer.push(containerSplits);
    });
    const container = document.querySelector(".container");
    const menuToggleBtn = document.querySelector(".menu-toggle-btn");
    const menuOverlay = document.querySelector(".menu-overlay");
    const menuOverlayContainer = document.querySelector(
      ".menu-overlay-content"
    );
    const menuMediaWrapper = document.querySelector(".menu-media-wrapper");
    const copyContainers = document.querySelectorAll(".menu-col");
    const menuToggleLabel = document.querySelector(".menu-toggle-label");
    const hamburgerIcon = document.querySelector(".menu-hamburger-icon");
    let isMenuOpen = false;
    let isAnimating = false;

    menuToggleBtn.addEventListener("click", () => {
      if (isAnimating) return;
      if (!isMenuOpen) {
        isAnimating = true;

        const tl = gsap.timeline();
        tl.to(menuToggleLabel, {
          y: "-150%",
          duration: 1,
          ease: "hop",
        })
          .to(
            container,
            {
              y: "100dvh",
              duration: 1,
              ease: "hop",
            },
            "<"
          )
          .to(
            menuOverlay,
            {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0%, 100%)",
              duration: 1,
              ease: "hop",
            },
            "<"
          )
          .to(
            menuOverlayContainer,
            {
              y: "0%",
              duration: 1,
              ease: "hop",
            },
            "<"
          )
          .to(
            menuMediaWrapper,
            {
              opacity: 1,
              duration: 0.75,
              ease: "power2.out",
              delay: 0.5,
            },
            "<"
          );
        splitTextContainer.forEach((containerSplits) => {
          const copyLines = containerSplits.flatMap((split) => split.lines);
          tl.to(
            copyLines,
            {
              y: "0%",
              duration: 2,
              ease: "hop",
              stagger: -0.075,
            },
            -0.15
          );
        });
        hamburgerIcon.classList.add("active");
        tl.call(() => {
          isAnimating = false;
        });
        isMenuOpen = true;
      } else {
        isAnimating = true;
        hamburgerIcon.classList.remove("active");
        const tl = gsap.timeline();
        tl.to(container, {
          y: "0dvh",
          duration: 1,
          ease: "hop",
        })
          .to(
            menuOverlay,
            {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0%, 0%)",
              duration: 1,
              ease: "hop",
            },
            "<"
          )
          .to(
            menuOverlayContainer,
            {
              y: "-100%",
              duration: 1,
              ease: "hop",
            },
            "<"
          )
          .to(
            menuToggleLabel,
            {
              y: "0%",
              duration: 1,
              ease: "hop",
            },
            "<"
          )
          .to(
            [copyContainers, menuMediaWrapper],
            {
              opacity: 0,
              duration: 1,
              ease: "hop",
            },
            "<"
          );
        tl.call(() => {
          splitTextContainer.forEach((containerSplits) => {
            const copyLines = containerSplits.flatMap((split) => split.lines);
            gsap.set(copyLines, { y: "-110%" });
          });
          gsap.set(copyContainers, { opacity: 1 });
          gsap.set(menuMediaWrapper, { opacity: 1 });

          isAnimating = false;
        });
        isMenuOpen = false;
      }
    });
  });

  const [hovered, setHovered] = useState(0);
  const hover = `relative  after:content-[''] after:absolute after:left-0 after:-bottom-1 
                 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 
                 hover:after:w-full `;
  return (
    <div className="relative">
      <nav className="fixed w-full z-5">
        <Container>
          <div className="flex items-center z-2 justify-between relative menu-bar">
            <div className="menu-logo overflow-clip">
              <p className="font-normal text-[1.6rem]">Studio D</p>
            </div>
            <div className="flex items-center gap-3.5 overflow-clip menu-toggle-btn">
              <p
                className="font-normal overflow-clip font-Neue text-neutral-800/90
               text-[0.95rem] menu-toggle-label will-change-transform mix-blend-difference"
                style={{ transform: "translateY(0%)" }}
              >
                Menu
              </p>
              <motion.div
                whileHover={{ scale: 0.92 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  duration: 0.3,
                  willChange: "transform",
                  ease: "easeInOut",
                }}
                className="menu-hamburger-icon relative border border-neutral-600/50
                 bg-black cursor-pointer flex transition-colors 
                 duration-200 flex-col items-center justify-center size-[3rem]  
                 gap-3 p-4 rounded-full"
              >
                <span className="w-[15px]  h-[1.2px] transition-colors bg-white duration-150 " />
                <span className="w-[15px]  h-[1.2px] bg-white  transition-colors duration-150  " />
              </motion.div>
            </div>
          </div>
        </Container>
        <div className="menu-overlay">
          <div className="menu-overlay-content bg-black">
            <div className="w-full h-full relative menu-media-wrapper">
              <video
                src="/Home.mp4"
                className="h-full w-full object-center object-cover"
              />
            </div>
            <div className="w-full h-full  menu-content-wrapper">
              <div className="menu-content-main">
                <div className="menu-col">
                  {ITEMS.map((item, index) => (
                    <div
                      key={index}
                      className="menu-link font-Polysans overflow-clip   w-fit relative pb-2  font-medium leading-[60px] text-[67px]"
                    >
                      <a
                        href="#"
                        key={index}
                        className={`${hover} `}
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(0)}
                      >
                        {/* <AnimatePresence>
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
                      </AnimatePresence> */}

                        {item}
                      </a>
                    </div>
                  ))}
                </div>
                <div className="menu-col ">
                  <div className="menu-tag flex flex-col font-Ivar">
                    {sub.map((item) => (
                      <a className={`${hover} text-[1.5rem] w-fit`} key={item}>
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="menu-footer">
                <div className="menu-col">
                  <p className={`${hover} w-fit`}>Toronto, Canada</p>
                </div>
                <div className="menu-col">
                  <p className={`${hover} w-fit`}> +31 (0)26 2344 904</p>
                  <p className={`${hover} w-fit`}>email@studiod.nu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
