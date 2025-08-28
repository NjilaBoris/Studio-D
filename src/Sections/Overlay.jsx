import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";
import React from "react";

const Overlay = () => {
  const container = document.querySelector(".overlay");

  useGSAP(
    () => {
      let headingContainers = document.querySelectorAll(".heading");

      let splitTextContainers = [];
      headingContainers.forEach((container) => {
        const textElements = container.querySelectorAll(".heading-mask");
        let containerSplitss = [];
        textElements.forEach((element) => {
          const splits = SplitText.create(element, {
            type: "lines",
            mask: "lines",
            linesClass: "line",
          });
          containerSplitss.push(splits);
          gsap.set(splits.lines, { y: "-110%" });
        });
        splitTextContainers.push(containerSplitss);
      });

      gsap.set(".menu-toggle-label", {
        y: "200%",
      });
      gsap.set(".titleHeading", {
        opacity: 0,
        y: "-100",
        // position: "relative",
      });
      gsap.set(".menu-logo", {
        y: "100%",
        opacity: 0,
      });

      gsap.set(".menu-hamburger-icon", {
        scale: 0,
      });
      gsap.set(".heroVideo", {
        opacity: 0,
      });
      CustomEase.create("hop", "0.9, 0, 0.1, 1");
      const tl = gsap.timeline({
        defaults: {
          ease: "hop",
        },
        onComplete: true,
      });
      const heading = gsap.utils.toArray(".heading");
      heading.forEach((head, index) => {
        const header = head.querySelectorAll("h1");
        tl.to(
          header,
          {
            y: "0%",
            duration: 1,
            stagger: 1,
            opacity: 1,
          },
          index * 1
        );
        tl.to(header, {
          y: "-100%",
          duration: 1,
          opacity: 0,
        });
      });
      tl.to(
        ".Overlaycontainer",
        {
          scale: "0.9",
          duration: 0.5,
        },
        1.8
      );
      tl.to(
        ".Overlaycontainer",
        {
          x: "10%",
          y: "33%",
          width: "63.3%",
          duration: 1,
          height: "50rem",
          scale: "0.7",
          zIndex: -1,
        },
        "<+0.5"
      );

      splitTextContainers.forEach((containerSplits) => {
        const copyLines = containerSplits.flatMap((split) => split.lines);
        tl.to(
          copyLines,
          {
            y: "0%",
            duration: 0.5,
            ease: "hop",
            stagger: -0.075,
          },
          "<+0.1"
        );
      });
      tl.to(
        ".menu-logo",
        {
          opacity: 1,
          y: 0,
        },
        "<"
      );

      tl.to(
        ".menu-hamburger-icon",
        {
          scale: 1,
        },
        2.5
      );
      tl.to(
        ".menu-toggle-label",
        {
          y: 0,
        },
        "<"
      );
      tl.to(
        ".titleHeading",
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        "<+0.3"
      );

      tl.to(".Overlaycontainer", {
        zIndex: -1,
        display: "absolute",

        scale: 0,
        duration: 0,
      });
      tl.to(
        ".heroVideo",
        {
          opacity: 1,
          zIndex: 5,
        },
        2.7
      );
    },
    { scope: container }
  );
  const items = ["Studio D"];
  return (
    <div className="w-full fixed Overlaycontainer top-0 right-0 z-100 h-dvh bg-black  text-white">
      <div className="absolute inset-0 overflow-hidden videoContainer">
        <video
          src="/Home.mp4"
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
          className="object-center w-full inset-0 object-cover h-full"
        />
      </div>
      <div className="absolute  text-center h-[3rem] heading overflow-clip  z-2 top-1/2 left-1/2 -translate-1/2">
        {items.map((item) => (
          <h1 key={item} className="  text-[2.3rem] text-white ">
            {item}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Overlay;
