import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import ReactLenis from "lenis/react";
import Navigation from "./Navigation";
import { CustomEase } from "gsap/all";
import Hero from "./Sections/Hero";
import Overlay from "./Sections/Overlay";

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);
const App = () => {
  return (
    <ReactLenis root options={{ duration: 1.2 }}>
      <div>
        <Overlay />
        <Navigation />
        <div
          className="container relative"
          style={{ transform: "translateY(0dvh)" }}
        >
          <Hero />
        </div>
      </div>
    </ReactLenis>
  );
};

export default App;
