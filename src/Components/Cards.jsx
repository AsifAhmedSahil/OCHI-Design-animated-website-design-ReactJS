import React from "react";

const Cards = () => {
  return (
    <div className="bg-zinc-900 w-full h-screen  flex gap-5 items-center px-32">
      <div className="cardContainer w-1/2 h-[50vh]">
        <div className="card relative w-full h-full bg-green-900 rounded-xl flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 rounded-full border-2 px-4 py-2">
            &copy;2023-2024
          </button>
        </div>
      </div>

      <div className="cardContainer w-1/2 h-[50vh] flex gap-5 ">
        <div className="card relative flex items-center justify-center w-full h-full bg-green-700 rounded-xl">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          
          <button className="absolute border-black uppercase left-10 bottom-10 rounded-full border-2 px-4 py-2">
          Rating 5.0 on Clutch
          </button>
          
        </div>
        <div className="card relative flex items-center justify-center w-full h-full bg-green-700 rounded-xl">
        <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute border-black uppercase left-10 bottom-10 rounded-full border-2 px-4 py-2">
          Business Bootcamp Alumni
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
