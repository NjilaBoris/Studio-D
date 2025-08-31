import React, { useEffect, useRef, useState } from "react";

import { motion, useSpring } from "motion/react";

const Transformation = () => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const handleCanPlayThrough = () => setIsLoaded(true);

      video.addEventListener("canplaythrough", handleCanPlayThrough);
      return () =>
        video.removeEventListener("canplaythrough", handleCanPlayThrough);
    }
  }, []);
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
    <div className="h-[400dvh] w-full">
      {itemsImages.map((item, index) => (
        <div className="relative ">
          <div className="h-[30rem] w-full bg-black/100">
            {item.backgroundImage.endsWith(".mp4") ? (
              <video
                ref={videoRef}
                loop
                muted
                playsInline
                preload="auto"
                autoPlay
                src={item.backgroundImage}
                className="w-full h-full object-cover object-center "
              />
            ) : (
              <img
                src={item.backgroundImage}
                alt={index}
                className="w-full h-full object-cover object-center opacity-[0.65]"
              />
            )}
          </div>
          <div className="fixed top-[53%] galleryText">
            <div className="absolute flex flex-col gap-[1.5rem] top-[30%] left-20 w-full h-full  text-white ">
              <h2 className="font-bold text-[1.3rem]">{item.text}</h2>
              <p className="text-[5rem] w-[15%] leading-[5rem]">
                {item.description}
              </p>
            </div>
            <div className="h-[25rem] w-[35rem] fixed right-[5%] top-[52%] z-10">
              <img
                src={item.image}
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Transformation;
