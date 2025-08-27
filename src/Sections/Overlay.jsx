import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import React from "react";

const Overlay = () => {
  const container = document.querySelector(".overlay");
  useGSAP(
    () => {
      CustomEase.create("hop", "0.9, 0, 0.1, 1");
      const tl = gsap.timeline({
        defaults: {
          ease: "hop",
        },
        onComplete: () => console.log("Animation sequence completed"),
      });
      const heading = gsap.utils.toArray(".heading");
      heading.forEach((head, index) => {
        const header = head.querySelectorAll("h1");
        tl.to(
          header,
          {
            y: "0%",
            duration: 1,
            stagger: 0.575,
            opacity: 1,
          },
          index * 1
        );
        if (index < heading.length - 1) {
          tl.to(
            header,
            {
              y: "-600%",
              duration: 1,
              stagger: 0.575,
              delay: index * 3,
              opacity: 0,
            },
            index * 1 + 1
          );
        } else {
          tl.to(
            header,
            {
              y: "-600%",
              duration: 1,
              stagger: 0.875,
              delay: 0.5,
              opacity: 0,
            },
            index * 1 + 1
          );
        }
      });
    },
    { scope: container }
  );
  const items = ["Studio D", "Transforming possibility", "Designing solutions"];
  return (
    <div className="fixed  w-full !z-100 h-dvh overlay overflow-clip">
      <div className="absolute">
        <video
          src="/Home.mp4"
          preload="auto"
          playsInline
          className="object-center w-full inset-0 object-cover h-full"
        />
      </div>
      <div className="overflow-hidden">
        <div className="z-7 heading   headingContainer">
          {items.map((item) => (
            <h1
              key={item}
              className="top-[45%] left-[35%] absolute text-[2.3rem] text-white "
            >
              {item}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overlay;
