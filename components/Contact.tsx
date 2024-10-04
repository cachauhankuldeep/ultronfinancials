import React from "react";
import maps from "@/public/assets/maps.png";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { LucideMail, PhoneIcon } from "lucide-react";

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
      ease: "circOut",
      duration: 0.55,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      ease: "circOut",
      duration: 0.55,
    },
  },
};

const Contact = () => {
  return (
    <div className={"relative w-screen h-full"} id={"contact"}>
      <div
        className={
          "absolute h-full w-full bg-gradient-to-b from-white via-white/95 to-white/40 flex justify-center items-start pt-20"
        }
      >
        <div
          className={
            " w-[95%] text-center smTablet:space-y-4 xsPhone:space-y-6"
          }
        >
          <motion.p
            whileInView={"visible"}
            initial={"hidden"}
            variants={items}
            className={
              "smTablet:text-[min(6vh,6vw)] xsPhone:text-[min(10vh,10vw)] font-semibold text-teal-700"
            }
          >
            Let&apos;s Talk.
          </motion.p>
          <motion.p
            whileInView={"visible"}
            initial={"hidden"}
            variants={items}
            className={
              "smTablet:text-[min(3vh,3vw)] xsPhone:text-[min(5vh,5vw)] font-light text-teal-700 xsPhone:px-8 smTablet:px-0"
            }
          >
            We are always ready to help you. Contact us today.
          </motion.p>
          <div className={"space-y-4 xsPhone:pt-10"}>
            <motion.p
              whileInView={"visible"}
              initial={"hidden"}
              variants={items2}
              className={
                "smTablet:text-[min(3vh,3vw)] xsPhone:text-[min(4vh,4vw)] font-light text-neutral-700 flex justify-center items-center gap-4"
              }
            >
              <LucideMail /> info@ultronfinancials.com
            </motion.p>
            <motion.p
              whileInView={"visible"}
              initial={"hidden"}
              variants={items2}
              className={
                "smTablet:text-[min(3vh,3vw)] xsPhone:text-[min(4vh,4vw)] font-light text-neutral-700 flex justify-center items-center gap-4"
              }
            >
              <PhoneIcon /> +971566687371
            </motion.p>
          </div>
        </div>
      </div>
      <div className={""}>
        <Image src={maps} alt={""} className={"w-full h-[90vh] object-cover"} />
      </div>
      <div
        className={
          "w-full py-10 bg-gradient-to-t from-white to-white/10  text-center"
        }
      >
        © All Right Reserved 2024 Ultron Financials
      </div>
    </div>
  );
};

export default Contact;
