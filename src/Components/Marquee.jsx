import React from "react";

const Marquee = () => {
  return (
    <div className="w-full rounded-tl-3xl rounded-tr-3xl bg-[#004D43] py-20 ">
      <div className="text flex gap-10 whitespace-nowrap overflow-hidden border-zinc-300 border-t-2 border-b-2">
        <h1 className="text-[15vw] leading-none font-['Founders_Grotesk'] font-semibold uppercase -mb-2 pt-2 ">We are ochi</h1>
        <h1 className="text-[15vw] leading-none font-['Founders_Grotesk'] font-semibold  uppercase -mb-2 pt-2">we are ochi</h1>

      </div>
    </div>
  );
};

export default Marquee;
