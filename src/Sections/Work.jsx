import React from "react";
import TextReveal from "../Components/TextReveal";

const Work = () => {
  return (
    <div className="h-dvh w-full flex items-center justify-center">
      <div className="flex gap-10">
        <TextReveal>
          <div className="w-full h-full text-[4rem] font-Polysans font-bold leading-[4rem] text-neutral-800">
            <p>
              Driving <br /> excellence <br /> through <br /> teamwork.
            </p>
          </div>
        </TextReveal>
        <div className="w-full flex flex-col h-full">
          <div className="w-[16rem] h-[20rem]">
            <img
              src="/team.webp"
              className="w-full h-full object-center object-cover"
            />
          </div>
          <TextReveal>
            <p className="font-Polysans whitespace-nowrap mt-8 leading-[20px]">
              At the heart of our culture lies a shared sense of <br /> purpose
              and a commitment to collaboration, where <br /> every voice is
              valued and every idea is given its due <br /> consideration. We
              are united in our pursuit of <br /> excellence and our belief in
              the power of teamwork.
            </p>
          </TextReveal>
        </div>
      </div>
    </div>
  );
};

export default Work;
