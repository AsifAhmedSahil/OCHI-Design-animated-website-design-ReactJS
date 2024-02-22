import React from "react";

const About = () => {
  return (
    <div className="w-full p-20 bg-[#CDEA68] text-black rounded-tl-3xl rounded-tr-3xl ">
      <div>
        <h1 className='text-[4vw] leading-[4.5vw] font-["Neue_Montreal"] tracking-tighter'>
          Ochi is a strategic partner for fast-grow­ing tech businesses that
          need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire
          great peo­ple.
        </h1>
      </div>

      <div className="w-full pt-10  border-t-[1px] border-[#7d865b] mt-20 flex">
        <div className="w-1/2 ">
          <h1 className="text-6xl">Our Approach</h1>
          <button className="px-10 py-6 rounded-full mt-10 bg-zinc-900 text-white flex items-center gap-8">
            Read More
            <div className="w-2 h-2 rounded-full bg-zinc-100 "></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] bg-green-300">
            {/* <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt=""  /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
