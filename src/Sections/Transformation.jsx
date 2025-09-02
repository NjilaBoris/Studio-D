import React, { useEffect, useRef, useState } from "react";

import { motion, useSpring } from "motion/react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Transformation = () => {
  const transformationContainer = useRef(null);
  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: ".gallery",
        strart: "top top",
        end: "bottom bottom",
        pin: ".right",
      });
    },
    { scope: transformationContainer }
  );
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
      backgroundImage: "/bg-1.webp",
      text: "Urban Transformation",
      description:
        "Smitshamp Gorssel - A revitalization project focusing on sustainable urban development and community engagement in Gorssel.",
      image: "/1.webp",
    },
    {
      backgroundImage: "/bg.mp4",
      text: "Urban Transformation",
      description:
        "Cobercokwartier - Transformation of an industrial site into a vibrant mixed-use district, integrating green spaces and modern architecture.",
      image: "/2.webp",
    },
    {
      backgroundImage: "/bg1.mp4",
      text: "Urban Transformation",
      description:
        "Witsen Site - Redevelopment initiative aimed at creating innovative residential and commercial spaces while preserving local heritage.",
      image: "/3.webp",
    },
  ];
  //const isVideo = itemsImages[backgroundImage].backgroundImage.endsWith(".mp4");

  return (
    <div
      ref={transformationContainer}
      className="w-full h-dvh flex items-center justify-center"
    >
      <div className="flex justify-center gap-[5rem]">
        <div className="w-[391.359px] h-[406.266px]">
          <video
            ref={videoRef}
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: "ease-in-out",
            }}
            loop
            muted
            playsInline
            preload="auto"
            autoPlay
            src="/bg1.mp4"
            className="w-full h-full  object-cover object-center "
          />
        </div>
        <div>
          <h1 className="font-Ivar mt-[4rem] text-neutral-600">
            Looking for more work
          </h1>
          <p className="font-Polysans mt-[2rem] text-[60px] leading-[62px] font-medium  text-[#1E1D1C]">
            Browse our <br /> full portfolio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Transformation;
