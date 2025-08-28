import React from "react";
import TextReveal from "../Components/TextReveal";

const Hero = () => {
  return (
    <>
      <section
        data-bg="#ffff"
        className="pt-[183px] mx-[28.5px] h-[200dvh] w-full overflow-clip relative"
      >
        <div className="grid w-full h-dvh grid-cols-16 gap-x-[19px] grid-rows-2">
          <div className="col-span-16  h-fit relative row-start-1 ml-10 row-end-2 mx-auto z-3">
            <div className="overflow-clip">
              <h1 className="font-Roman mb-[53px] font-medium text-[1.3rem] text-neutral-800 italic titleHeading">
                Spatial design, visualisation & Interaction
              </h1>
              <h2 className="heading h-fit font-Polysans text-[6.7rem] leading-[110px] text-neutral-800 !font-[300]">
                <div className="heading-mask">Spatial design</div>
                <div className="heading-mask">from an eye-level</div>
                <div className="heading-mask">perspective</div>
              </h2>
              <TextReveal>
                <blockquote className="mt-[202px] ml-[84px] italic text-[17px] font-Roman text-[#1E1D1C]">
                  <div className="quote-mask">
                    “Together, we turn your challenges{" "}
                  </div>
                  <div className="quote-mask">
                    into opportunities and your goals{" "}
                  </div>
                  <div className="quote-mask">
                    into reality through collaboration,{" "}
                  </div>
                  <div className="quote-mask">innovation, and design.</div>
                </blockquote>
              </TextReveal>
            </div>
            <div className="-z-1 h-full w-[40rem] max-h-[40rem]  absolute top-50 left-[40rem] ">
              <video
                src="/Home.mp4"
                preload="auto"
                autoPlay
                loop
                muted
                playsInline
                className="object-center object-cover h-full heroVideo"
              />

              <TextReveal>
                <p className="mt-11 font-Polysans">
                  As specialists in urban design and landscape <br />{" "}
                  architecture, we utilize advanced technology <br /> to create
                  spaces that are both aesthetically <br /> pleasing and
                  exciting.
                </p>
              </TextReveal>
            </div>
          </div>
          <div className="col-span-16 row-start-2 row-end-3"></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
