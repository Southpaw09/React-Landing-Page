// import React from "react";
import Image from "../assets/couple.jpg";

function About() {
  return (
    <div
      data-scroll
      data-scroll-speed="-0.2"
      data-scroll-section
      className="w-full bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl"
    >
      <h3 className="p-20 text-black font-semibold text-6xl leading-11 tracking-tight">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h3>
      <div className="p-10 w-full flex gap-5 border-t-[1px] border-[#77893c]">
        <div className="w-1/2">
          <h2 className="text-7xl text-zinc-900">Our Approach:</h2>
          <button className="transition ease-in duration-300 hover:bg-white hover:text-zinc-900 uppercase px-10 py-6 flex gap-10 bg-zinc-900 rounded-full mt-10 text-white">
            Read More
          </button>
        </div>
        <div className={`w-1/2 h-[70vh] rounded-3xl} bg-[url(${Image})]`}>
          <img src={Image} className="h-full w-full strec" />
        </div>
      </div>
    </div>
  );
}

export default About;
