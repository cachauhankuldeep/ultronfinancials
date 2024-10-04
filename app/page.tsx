"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutUs from "@/components/About";
import Contact from "@/components/Contact";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  if (isLoading) {
    return null;
  } else
    return (
      <div className={"w-screen font-poppins overflow-clip"}>
        <Navbar />
        <div className={"mt-[6.5rem]"}>
          <Hero />
          <Services />
          <AboutUs />
          <Contact />
        </div>
      </div>
    );
}
