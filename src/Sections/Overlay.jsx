import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import React, { useEffect, useRef, useState } from "react";

const Overlay = () => {
  const container = document.querySelector(".overlay");
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

  useGSAP(
    () => {
      // Disable scrolling while animation runs
      document.body.style.overflow = "hidden";
      let headingContainers = document.querySelectorAll(".heading");
      gsap.set(window, { scrollTo: 0 });

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
      gsap.to(window, { duration: 1, scrollTo: 0, ease: "power2.out" });
      CustomEase.create("hop", "0.9, 0, 0.1, 1");
      const tl = gsap.timeline({
        defaults: {
          ease: "hop",
        },
        onComplete: () => {
          // Re-enable scrolling when animation completes
          document.body.style.overflow = "auto";
        },
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
      gsap.fromTo(
        ".Overlaycontainer",
        {
          opacity: 0.9,
          duration: 1,
          delay: 2, // simulate load time
          ease: "power2.out",
        },
        { opacity: 1, duration: 1, ease: "power3.out" }
      );
      tl.to(
        ".Overlaycontainer",
        {
          scale: "0.95",
          duration: 0.5,
        },
        1.8
      );
      tl.to(
        ".Overlaycontainer",
        {
          x: "12%",
          y: "36%",
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
          ref={videoRef}
          preload="auto"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
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
