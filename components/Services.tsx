import React from "react";
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

const Services = () => {
  return (
    <div
      className={"w-full flex justify-center items-center my-20 "}
      id={"services"}
    >
      <div
        className={
          "flex flex-col gap-14 justify-center items-center w-[95%] bg-gradient-to-br from-teal-700 to-teal-900 tablet:px-14 xsPhone:px-6 py-14 rounded-[1.5rem]"
        }
      >
        <div className={"text-white text-center space-y-2"}>
          <motion.p
            whileInView={"visible"}
            initial={"hidden"}
            variants={items}
            className={
              "smTablet:text-[min(6vh,6vw)] xsPhone:text-[min(8vh,8vw)] font-semibold"
            }
          >
            Our Services
          </motion.p>
          <motion.p
            whileInView={"visible"}
            initial={"hidden"}
            variants={items}
            className={
              "smTablet:text-[min(3vh,3vw)] xsPhone:text-[min(4vh,4vw)] text-wrap max-w-[800px]"
            }
          >
            Business Transformation Services to Stay Ahead of the Curve
          </motion.p>
        </div>
        <div className={"smLaptop:grid-cols-3 xsPhone:grid-cols-1 grid gap-4"}>
          <div
            className={
              " bg-white text-black p-10 rounded-[1.3rem] smLaptop:smLaptop:col-span-2 relative bg-gradient-to-br from-white to-teal-400/20 transition"
            }
          >
            <motion.p
              whileInView={"visible"}
              initial={"hidden"}
              variants={items2}
              className={
                "text-teal-700 font-semibold smTablet:text-[min(3.5vh,3.5vw)] xsPhone:text-[min(7vh,7vw)]"
              }
            >
              Corporate finance
            </motion.p>
            <motion.p
              whileInView={"visible"}
              initial={"hidden"}
              variants={items2}
              className={
                "my-4 xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.2vh,2.2vw)]"
              }
            >
              We offer facilitation of various sources of funding to up and
              becoming businesses ranging from Working Capital Loan, Loan
              against Property, Overdraft Facility, Letter of Credits, Bank
              Guarantees, Long-Term Loans to meet short and long range needs.
            </motion.p>
            <motion.ul
              whileInView={"visible"}
              initial={"hidden"}
              variants={items2}
              className={
                " w-full space-y-2 xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.2vh,2.2vw)]"
              }
            >
              <li>- Working capital loan </li>
              <li>- Term loan </li>
              <li>- Overdraft facility </li>
              <li>- Letter Of Credit/ Bank Guarantee Facility </li>
              <li>- Invoice Discounting </li>
            </motion.ul>
            <div
              className={
                "absolute text-[min(20vh,20vw)] smTablet:-bottom-5 xsPhone:bottom-0 smTablet:right-14 xsPhone:right-8 text-teal-600/30"
              }
            >
              1
            </div>
          </div>
          <div
            className={
              " bg-white text-black p-10 rounded-[1.3rem] smLaptop:col-span-1 relative bg-gradient-to-br from-white to-teal-400/20 transition"
            }
          >
            <motion.p
              whileInView={"visible"}
              initial={"hidden"}
              variants={items2}
              className={
                "text-teal-700 font-semibold smTablet:text-[min(3.5vh,3.5vw)] xsPhone:text-[min(7vh,7vw)]"
              }
            >
              Business Incorporation
            </motion.p>
            <motion.p
              whileInView={"visible"}
              initial={"hidden"}
              variants={items2}
              className={
                "my-4 xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.2vh,2.2vw)]"
              }
            >
              We help businesses set up their shop in UAE based on their
              requirements of Geography, Logistics, Business Activity, Tax
              Incentive. We offer both Mainland and Free-zone Company Setup. We
              have partnered with all the leading Free-zones across UAE.
            </motion.p>
            <motion.ul
              whileInView={"visible"}
              initial={"hidden"}
              variants={items2}
              className={
                " w-full space-y-2 xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.2vh,2.2vw)]"
              }
            >
              <li>- Mainland Company Setup</li>
              <li>- Free-Zone Company Setup</li>
              <li>- Off-Shore Company Setup</li>
              <li>- Outside UAE Jurisdictions Company Setup</li>
            </motion.ul>
            <div
              className={
                "absolute text-[min(20vh,20vw)] smTablet:-bottom-5 xsPhone:bottom-0 smTablet:right-14 xsPhone:right-8 text-teal-600/30"
              }
            >
              2
            </div>
          </div>
          <div
            className={
              " bg-white text-black p-10 rounded-[1.3rem] smLaptop:col-span-1 relative bg-gradient-to-br from-white to-teal-400/20 transition"
            }
          >
            <motion.p
              whileInView={"visible"}
              initial={"hidden"}
              variants={items2}
              className={
                "text-teal-700 font-semibold smTablet:text-[min(3.5vh,3.5vw)] xsPhone:text-[min(7vh,7vw)] "
              }
            >
              Personal finance
            </motion.p>
            <motion.p
              whileInView={"visible"}
              initial={"hidden"}
              variants={items2}
              className={
                "my-4 xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.2vh,2.2vw)]"
              }
            >
              Whether it&apos;s your Dream Home or an urgent cash crunch, we
              offer a wide range of Personal Financing solutions including
              Personal Loan, Real-Estate Mortgage, Credit Card, Auto Loan.
            </motion.p>
            <motion.ul
              whileInView={"visible"}
              initial={"hidden"}
              variants={items2}
              className={
                " w-full space-y-2 xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.2vh,2.2vw)]"
              }
            >
              <li>- Personal loan</li>
              <li>- Credit Cards</li>
              <li>- Real Estate Mortage</li>
              <li>- Education Loan</li>
              <li>- Vehicle Loan</li>
            </motion.ul>
            <div
              className={
                "absolute text-[min(20vh,20vw)] smTablet:-bottom-5 xsPhone:bottom-0 smTablet:right-14 xsPhone:right-8 text-teal-600/30"
              }
            >
              3
            </div>
          </div>
          <div
            className={
              "bg-white  text-black p-10 rounded-[1.3rem] smLaptop:col-span-2 relative bg-gradient-to-br from-white to-teal-400/20 transition"
            }
          >
            <motion.p
              whileInView={"visible"}
              initial={"hidden"}
              variants={items2}
              className={
                "text-teal-700 font-semibold smTablet:text-[min(3.5vh,3.5vw)] xsPhone:text-[min(7vh,7vw)]"
              }
            >
              Business Advisory
            </motion.p>
            <motion.p
              whileInView={"visible"}
              initial={"hidden"}
              variants={items2}
              className={
                "my-4 text-neutral-700 smTablet:text-[min(2.2vh,2.2vw)] xsPhone:text-[min(3.5vh,3.5vw)]"
              }
            >
              We help businesses to set up and thrive across all markets and for
              this we offer following services under one-roof:
            </motion.p>
            <motion.ul
              whileInView={"visible"}
              initial={"hidden"}
              variants={items2}
              className={
                "w-full space-y-2 text-neutral-700 smTablet:text-[min(2.2vh,2.2vw)] xsPhone:text-[min(3.5vh,3.5vw)]"
              }
            >
              <li>- Corporate Restructuring</li>
              <li>- Accounting And Book-Keeping</li>
              <li>- Tax Advisory</li>
              <li>- Proceeds Automation</li>
              <li>- Management Advisory</li>
            </motion.ul>
            <div
              className={
                "absolute text-[min(20vh,20vw)] smTablet:-bottom-5 xsPhone:bottom-0 smTablet:right-14 xsPhone:right-8 text-teal-600/30"
              }
            >
              4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
