import React from "react";
import { ChevronDown } from "lucide-react";

import { Variants } from "framer-motion";
import { motion } from "framer-motion";

const items: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      type: "tween",
      ease: "circOut",
      duration: 0.55,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "circOut",
      duration: 0.55,
    },
  },
};

const Hero = () => {
  return (
    <div className={"flex justify-center items-center w-screen"} id={"home"}>
      <div
        className={"h-[90vh] w-[95%] rounded-[1.5rem]  relative overflow-clip"}
      >
        <video
          className={
            "object-cover w-full h-full rounded-[1.5rem]  absolute brightness-75"
          }
          autoPlay
          loop
          muted
          controls={false}
        >
          <source src={"/dubai3.mp4"} type="video/mp4" />
        </video>
        <div
          className={
            "bg-white absolute bottom-0 smLaptop:left-[5rem] xsPhone:left-6 px-4 py-2 rounded-t-[1rem] flex justify-center items-center text-center gap-2"
          }
        >
          Scroll down <ChevronDown />
        </div>
        <div
          className={
            "bg-white xsPhone:hidden text-white tablet:max-w-[500px] smTablet:max-w-[400px] w-fit absolute bottom-0 smLaptop:right-[5rem] smTablet:right-[1.5rem] p-3 pb-0 rounded-t-[1.5rem] smTablet:flex justify-center items-center text-start gap-2"
          }
        >
          <div
            className={
              "bg-gradient-to-br from-neutral-800 to-black rounded-[1.2rem] py-10 px-8 smLaptop:text-[min(2vh,2vw)] smTablet:text-md space-y-6"
            }
          >
            <motion.p
              whileInView={"visible"}
              initial={"hidden"}
              variants={items}
              className={"font-semibold text-[min(2.3vh,2.3vw)]"}
            >
              Navigate the UAE Market with Expert Business Consulting
            </motion.p>
            <motion.p
              whileInView={"visible"}
              initial={"hidden"}
              variants={items}
            >
              Leading from behind the scenes while steering our clients at the
              forefront, we help them achieve their goals and objectives through
              strategies uniquely tailored to their specific needs.
            </motion.p>
          </div>
        </div>
        <motion.p
          whileInView={"visible"}
          initial={"hidden"}
          variants={items}
          className={
            "text-white relative top-[30%] smLaptop:left-[5rem] smTablet:left-[3rem] xsPhone:left-6 font-semibold smLaptop:text-[min(7vh,7vw)] smTablet:text-[min(8vh,8vw)] xsPhone:text-[min(9vh,9vw)] xsPhone:w-[95%] text-wrap"
          }
        >
          Elevating Your Wealth,
          <br className={"xsPhone:hidden smTablet:block"} />
          Fulfilling Your Financial Goals.
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
