import React from "react";

import { motion, useSpring } from "motion/react";

const Transformation = () => {
  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };
  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const targetX = clientX - (window.innerWidth / 2) * 0.25;
    const targetY = clientY - (window.innerWidth / 2) * 0.3;
    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  };
  const itemsImages = [
    {
      backgroundImage:
        "https://studiod.nu/_vercel/image?url=https://wp.studiod.nu/wp-content/uploads/2025/01/project-gorssel-achtergrond.jpg&w=1536&q=80",
      text: "Urban Transformation",
      description: "Smitshamp Gorssel",
      image:
        "https://studiod.nu/_vercel/image?url=https://wp.studiod.nu/wp-content/uploads/2025/07/project-gorssel-visualisatie-01-v2.jpg&w=1536&q=80",
    },
    {
      backgroundImage: "/bg.mp4",
      text: "Urban Transformation",
      description: "Cobercokwartier",
      image:
        "https://studiod.nu/_vercel/image?url=https://wp.studiod.nu/wp-content/uploads/2023/05/project-cobercokwartier-cover.jpg&w=1536&q=80",
    },
    {
      backgroundImage: "/bg1.mp4",
      text: "Urban Transformation",
      description: "Witsen Site",
      image:
        "https://studiod.nu/_vercel/image?url=https://wp.studiod.nu/wp-content/uploads/2023/05/witsenterrein-cover.jpg&w=1536&q=80",
    },
  ];
  //const isVideo = itemsImages[backgroundImage].backgroundImage.endsWith(".mp4");

  return (
    <div onMouseMove={mouseMove} className="h-[400dvh] w-full ">
      {itemsImages.map((item, index) => (
        <div mousePosition={mousePosition} key={index} item={item} />
      ))}
    </div>
  );
};

export default Transformation;
