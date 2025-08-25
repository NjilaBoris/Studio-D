import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Container from "./Container";
const ITEMS = ["Home", "Project", "Services", "About us", "Contact"];
const sub = ["ontwerp", "visualisatie", "interactie"];
const Navigation = () => {
  const [hovered, setHovered] = useState(0);
  const hover = `relative  after:content-[''] after:absolute after:left-0 after:-bottom-1 
                 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 
                 hover:after:w-full `;
  return (
    <div className="relative">
      <nav className="fixed w-full z-5">
        <Container>
          <div className="flex items-center z-2 justify-between relative">
            <p className="font-normal text-[1.6rem]">Studio D</p>
            <div className="flex items-center gap-3.5">
              <p className="font-normal  font-Neue text-neutral-800/90 text-[13.2px]">
                Menu
              </p>
              <div className="bg-black cursor-pointer flex flex-col items-center justify-center size-11  gap-1 p-4 rounded-full">
                <div className="w-[19px]   h-[1.4px] bg-white" />
                <div className="w-[19px]  h-[1.4px] bg-white" />
              </div>
            </div>
          </div>
        </Container>
      </nav>
      <div className="h-dvh w-full bg-black absolute justify-center flex items-center">
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
                  <ul className="font-Polysans overflow-clip   w-fit relative pb-2  font-medium leading-[60px] text-[60px]">
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
                <div className="list-none text-left absolute text-[23px] capitalize leading-[30px] right-0 bottom-0 font-Ivar items-end  flex flex-col justify-end">
                  {sub.map((item) => (
                    <li className={hover} key={item}>
                      {item}
                    </li>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full mt-[4rem] font-Neue text-neutral-400 flex items-start justify-between">
              <h1 className={hover}>Language</h1>
              <div className="flex text-[1rem] flex-col">
                <p className={hover}> +31 (0)26 2344 904</p>
                <p className={hover}>mail@studiod.nu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
