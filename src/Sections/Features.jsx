import React from "react";
import TextReveal from "../Components/TextReveal";
import { motion } from "motion/react";

const Features = () => {
  const images = [
    {
      image: "/Home1.webp",
    },
    {
      image: "/Home2.webp",
    },
    {
      image: "/Home3.webp",
    },
  ];

  const items = [
    {
      number: "01",
      heading: "Spatial design",
      description:
        "We assist our clients with spatial design projects ranging from small to large-scale developments.",
    },

    {
      number: "02",
      heading: "Visualization",
      description:
        "We specialize in visual communication of spatial projects through visualizations, animations, and cartography.",
    },

    {
      number: "03",
      heading: "Interactive",
      description:
        "Creating immersive spatial experiences from an eye-level perspective, we utilize cutting-edge technologies to provide a glimpse into future worlds.",
    },
  ];
  return (
    <div className="h-[220dvh] w-full mx-[28.458px] mt-[20px] relative">
      <div className="flex gap-8 items-center justify-center">
        {items.map((item) => (
          <div
            key={item}
            className="p-5 absolute nth-of-type-1:top-[20%] w-[20rem] nth-of-type-2:top-[45%]
            nth-of-type-2:left-[10%] nth-of-type-3:bottom-[1%] nth-of-type-3:right-[11%]"
          >
            <h1 className="font-Neue text-[1rem] text-neutral-600 pb-[2.8rem]">
              {item.number}
            </h1>
            <p className="text-[38px] pb-[1rem] text-[#1E1D1C] font-normal border-b border-neutral-300">
              {item.heading}
            </p>
            <TextReveal>
              <p className="text-[15.1778px] font-Polysans pt-[1.8rem]">
                {item.description}
              </p>
            </TextReveal>
          </div>
        ))}
      </div>
      <div className="mt-[50px]">
        <div className="flex gap-8 items-center  justify-center">
          {images.map((image, index) => (
            <div
              className="w-[15rem] absolute nth-of-type-1:top-[-1%] nth-of-type-1:left-[11%]
            nth-of-type-2:top-[40%] nth-of-type-2:right-[10%] nth-of-type-3:bottom-[9%]"
            >
              <img
                src={image.image}
                alt={index}
                className="w-full h-full object-center object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
