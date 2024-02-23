import React from "react";

const Featured = () => {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-l-zinc-600 pb-20">
        <h1 className='text-8xl tracking-tighter font-["Neue_Montreal"]'>
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10 ">
          <div className="cardcontainer relative rounded-lg w-1/2 h-[80vh]  ">
            <h1 className="absolute text-8xl text-[#CDEA68] z-[99] -translate-x-1/2 top-1/2 -translate-y-1/2 tracking-tighter font-semibold left-full">FYDE</h1>
            <div className="card w-full h-full  rounded-lg">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </div>
          <div className="cardcontainer relative rounded-lg w-1/2 h-[80vh] bg-red-500 overflow-hidden">
          <h1 className="absolute text-8xl z-[99] text-[#CDEA68] translate-x-1/2 top-1/2 -translate-y-1/2 tracking-tighter font-semibold right-full">VISE</h1>
            <div className="card w-full h-full bg-green-400 rounded-lg">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
