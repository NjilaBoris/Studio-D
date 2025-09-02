import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import ReactLenis from "lenis/react";
import Navigation from "./Navigation";
import { CustomEase } from "gsap/all";
import Hero from "./Sections/Hero";
import Overlay from "./Sections/Overlay";
import Features from "./Sections/Features";
import Transformation from "./Sections/Transformation";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase, ScrollToPlugin);
const App = () => {
  return (
    <ReactLenis root options={{ duration: 2, smooth: true }}>
      <>
        <Overlay />
        <Navigation />
        <div
          className="containers relative overflow-clip"
          style={{ transform: "translateY(0dvh)" }}
        >
          <Hero />
          <Features />
          <Transformation />
        </div>
      </>
    </ReactLenis>
  );
};

export default App;
