// import React from 'react'
import { motion } from "framer-motion";
import { FaArrowAltCircleRight } from "react-icons/fa";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-speed="-0.2"
      data-scroll-section
      className="w-full bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-52 px-20">
        <div className="masker">
          <h1 className="uppercase leading-[5.5vw] tracking-tighter text-8xl font-black">
            We Create
          </h1>
        </div>
        <div className="masker my-1 flex">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "9vw" }}
            transition={{ ease: [0.37, 0, 0.63, 1], duration: 1 }}
            className="w-[9vw] h-[6vw] bg-red-500 relative top-1"
          ></motion.div>
          <h1 className="uppercase leading-[5.5vw] tracking-tighter text-8xl font-black">
            Eye Opening
          </h1>
        </div>
        <div className="masker">
          <h1 className="uppercase leading-[5.5vw] tracking-tighter text-8xl font-black">
            Presentations
          </h1>
        </div>
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-15">
        <div className="py-10 px-5">
          <p className="text-md font-light tracking-tight leading-none">
            For public and private companies
          </p>
        </div>
        <div className="py-10 px-5">
          <p className="text-md font-light tracking-tight leading-none">
            From the first pitch to IPO
          </p>
        </div>
        <div className="py-10 px-5">
          <button className="hover:bg-white hover:border-white transition-all duration-300 hover:text-zinc-800 uppercase font-light text-sm rounded-full border-zinc-700 flex items-center justify-center">
            Start the project <FaArrowAltCircleRight className="mx-2 my-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
