import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import ReactLenis from "lenis/react";
import Navigation from "./Navigation";
import { CustomEase } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);
const App = () => {
  return (
    <ReactLenis root options={{ duration: 1.2 }}>
      <div className="container relative">
        <Navigation />
      </div>
    </ReactLenis>
  );
};

export default App;
