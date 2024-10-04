import React from "react";
import { ChartLine } from "lucide-react";
import { Target } from "lucide-react";
import { Handshake } from "lucide-react";
import { FileChartColumnIncreasing } from "lucide-react";
import { WobbleCard } from "@/components/ui/wobble-card";

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
const items2: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
      duration: 0.7,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeIn",
      duration: 0.7,
    },
  },
};

export const sections = [
  {
    icon: (
      <ChartLine
        size="3rem"
        className={"xsPhone:w-[2rem] h-auto smTablet:w-[3rem]"}
      />
    ), // Strategy icon
    heading: "Strategy",
    description:
      "We assist companies in planning and refining all business aspects for razor-sharp focus, ensuring they achieve their objectives efficiently.",
  },
  {
    icon: (
      <Handshake
        size="3rem"
        className={"xsPhone:w-[2rem] h-auto smTablet:w-[3rem]"}
      />
    ), // Support icon
    heading: "Support",
    description:
      'Lending a "helping-hand" through all the way to the businesses connected with us with every way we can to help fulfill their end-goals.',
  },
  {
    icon: (
      <Target
        size="3rem"
        className={"xsPhone:w-[2rem] h-auto smTablet:w-[3rem]"}
      />
    ), // Management icon
    heading: "Management",
    description:
      "We guide clients from the shadows and manage at the forefront, helping them achieve targets with tailor-made strategies.",
  },
  {
    icon: (
      <FileChartColumnIncreasing
        size="3rem"
        className={"xsPhone:w-[2rem] h-auto smTablet:w-[3rem]"}
      />
    ), // Guidance icon
    heading: "Guidance",
    description:
      "Providing mentorship and guidance to help individuals and teams reach their full potential with tailored advice.",
  },
];
const AboutUs = () => {
  return (
    <div
      className="flex justify-center items-center h-auto pt-5 mb-20"
      id={"about"}
    >
      <div className=" h-auto lg:w-[95%] flex justify-center items-center">
        <div className=" h-auto flex flex-col gap-[2rem]  justify-center items-center">
          {/* top */}
          <div className="text-center smTablet:px-[1rem] xsPhone:px-4 flex flex-col gap-4 justify-center items-center  ">
            <motion.p
              whileInView={"visible"}
              initial={"hidden"}
              variants={items}
              className="font-semibold smTablet:text-[min(6vh,6vw)] xsPhone:text-[min(8vh,8vw)] text-[#008080] font-poppins "
            >
              Empowering Businesses with Strategic Insights <br />
              and Sustainable Growth
            </motion.p>
            <motion.p
              whileInView={"visible"}
              initial={"hidden"}
              variants={items}
              className="smTablet:text-[min(3vh,3vw)] xsPhone:text-[min(4vh,4vw)] font-extralight font-poppins smLaptop:w-[70%] xsPhone:w-[95%]"
            >
              We deliver strategic business solutions, expert insights, and
              tailored guidance to drive sustainable growth, operational
              efficiency, and long-term success for companies
            </motion.p>
          </div>

          {/* bottom */}
          <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
            <div className="grid xsPhone:grid-cols-1 smTablet:grid-cols-2 smLaptop:grid-cols-4 gap-4 ">
              {sections.map((section, index) => (
                <WobbleCard
                  containerClassName={"bg-transparent rounded-[1.5rem]"}
                  key={index}
                  className="p-10 overflow-clip relative flex flex-col justify-start items-start rounded-[1.5rem] shadow-lg space-y-5 bg-gradient-to-br from-[#055958] to-[#008080] text-[#FFFFFF] "
                >
                  <motion.div
                    whileInView={"visible"}
                    initial={"hidden"}
                    variants={items}
                    className=" text-[#5DA09F] p-4 bg-gradient-to-br from-white/20 via-transparent to-white/20 rounded-full"
                  >
                    {section.icon}
                  </motion.div>
                  <motion.h3
                    whileInView={"visible"}
                    initial={"hidden"}
                    variants={items}
                    className="  smTablet:text-[min(3.5vh,3.5vw)] xsPhone:text-[min(7vh,7vw)] font-semibold  text-[#FFFFFF] font-poppins "
                  >
                    {section.heading}
                  </motion.h3>
                  <motion.p
                    whileInView={"visible"}
                    initial={"hidden"}
                    variants={items}
                    className=" text-[#FFFFFF] xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.2vh,2.2vw)] text-neutral-50 font-poppins"
                  >
                    {section.description}
                  </motion.p>
                </WobbleCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
