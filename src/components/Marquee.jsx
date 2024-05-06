// import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.3"
      className="w-full bg-[#004D43] flex items-center "
    >
      <div className="text items-center py-20 border-t-2 border-b-2 border-zinc-300 uppercase overflow-hidden flex whitespace-nowrap">
        <motion.h2
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[10vw] pr-10  font-semibold wid"
        >
          We are ochi
        </motion.h2>
        <motion.h2
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[10vw] pr-10 font-semibold wid"
        >
          We are ochi
        </motion.h2>
        <motion.h2
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[10vw] pr-10 font-semibold wid"
        >
          We are ochi
        </motion.h2>
      </div>
    </div>
  );
}

export default Marquee;
