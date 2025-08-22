import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";
gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <ReactLenis root options={{ duration: 1.2 }}>
      <div>App</div>
    </ReactLenis>
  );
};

export default App;
