import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div>
      <div className="w-[100vw] h-8"></div>
      <div
        data-scroll
        data-scroll-speed=".1"
        className="w-full  py-[2vw] bg-[#004D43] font-nerko"
      >
        <div className="text flex whitespace-nowrap border-t-2 p-2 border-b-2 overflow-hidden text-white border-[#4D837C]">
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 10,
              delay: 1,
            }}
            className="text-[3vw] leading-none uppercase px-2 py-3 font-bold pr-10"
          >
            Immursive Virtual Herbal Garden🌿
          </motion.h1>
          <motion.h1
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 10,
              delay: 1,
            }}
            className="text-[3vw] leading-none uppercase px-2 py-3  font-bold pr-10"
          >
            Immursive Virtual Herbal Garden🌿
          </motion.h1>
          <motion.h1
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 10,
              delay: 1,
            }}
            className="text-[3vw] leading-none uppercase px-2 py-3  font-bold pr-10"
          >
            Immursive Virtual Herbal Garden🌿
          </motion.h1>
        </div>
      </div>
    </div>
  );
}

export default Marquee;
