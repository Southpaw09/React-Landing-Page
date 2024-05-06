// import React from "react";

function Extra() {
  const profileArray = [
    {
      index: 1,
      img: "https://ochi.design/wp-content/uploads/2022/04/logo001.svg",
      text: "2019-2022",
      color: "red",
    },
    {
      index: 2,
      img: "https://ochi.design/wp-content/uploads/2022/04/logo002.svg  ",
      text: "Rating 5.0 on Clutch",
      color: "red",
    },
    {
      index: 3,
      img: "https://assets-global.website-files.com/5d816b07d269385f68dbcab0/5ea29a574423326d48ee3ee9_TFA-Hero-Badge-01-white.svg",
      text: "Business Bootcamp on Alumni",
      color: "red",
    },
  ];
  return (
    <div
      data-scroll
      data-scroll-speed="0.4"
      data-scroll-section
      className="w-full h-[70vh] p-20 flex gap-10"
    >
      {profileArray.map((item) => {
        return (
          <div
            key={item.index}
            className={`bg-zinc-800 hover:cursor-pointer hover:scale-95 duration-200 border-zinc-100 rounded-lg w-1/4 rounded-lg relative flex items-end justify-start p-5 ${
              item.index == 1 && "bg-white w-[50%]"
            }`}
          >
            <img
              src={item.img}
              className="w-[10vw] absolute mb-5 rounded-lg top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
            />
            <button className="hover:bg-white hover:border-white transition-all duration-300 hover:text-zinc-800 uppercase font-light text-sm rounded-full border-zinc-700 flex items-center justify-center">
              {item.text}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Extra;
