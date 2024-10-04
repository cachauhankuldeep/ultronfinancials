import React from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "@/public/assets/logo.png";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <div className={"fixed top-0 w-full bg-white z-10 h-[6rem]"}>
      <div className={"flex justify-center items-center"}>
        <div
          className={
            "tablet:w-[95%] xsPhone:w-full p-6 flex justify-between items-center"
          }
        >
          <div className={"flex justify-center items-center gap-4 text-black"}>
            <Image src={logo} alt={""} className={"w-8 h-auto"} />
            <div>
              <p
                className={
                  "font-bold uppercase smTablet:text-lg xsPhone:text-md"
                }
              >
                Ultron Financials
              </p>
              <p className={"smTablet:text-sm xsPhone:text-xs"}>
                Initiate. Elevate. Thrive.
              </p>
            </div>
          </div>
          <div
            className={
              "flex justify-evenly items-center gap-10 tablet:flex xsPhone:hidden"
            }
          >
            <AnchorLink
              href={"#home"}
              offset={"100"}
              className={"hover:text-teal-700 transition"}
            >
              Home
            </AnchorLink>
            <AnchorLink
              href={"#services"}
              offset={"100"}
              className={"hover:text-teal-700 transition"}
            >
              Services
            </AnchorLink>
            <AnchorLink
              href={"#about"}
              offset={"100"}
              className={"hover:text-teal-700 transition"}
            >
              About us
            </AnchorLink>
            <AnchorLink
              href={"#contact"}
              offset={"100"}
              className={"hover:text-teal-700 transition"}
            >
              Contact
            </AnchorLink>
          </div>
          <div className={"xsPhone:block tablet:hidden font-poppins relative"}>
            <Sheet>
              <SheetTrigger>
                <MenuIcon />
              </SheetTrigger>
              <SheetContent>
                <div
                  className={
                    "p-10 flex flex-col justify-center items-center gap-10 text-[min(5vh,5vw)]"
                  }
                >
                  <AnchorLink
                    href={"#home"}
                    offset={"100"}
                    className={"hover:text-teal-700 transition"}
                  >
                    Home
                  </AnchorLink>
                  <AnchorLink
                    href={"#services"}
                    offset={"100"}
                    className={"hover:text-teal-700 transition"}
                  >
                    Services
                  </AnchorLink>
                  <AnchorLink
                    href={"#about"}
                    offset={"100"}
                    className={"hover:text-teal-700 transition"}
                  >
                    About us
                  </AnchorLink>
                  <AnchorLink
                    href={"#contact"}
                    offset={"100"}
                    className={"hover:text-teal-700 transition"}
                  >
                    Contact
                  </AnchorLink>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
