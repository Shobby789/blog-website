"use client";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <main className="w-full py-24">
      <h1
        className={`text-4xl md:text-5xl lg:text-7xl 2xl:text-8xl font-semibold xl:leading-[87px] ${
          theme == "light" ? "text-black" : "text-white"
        }`}
      >
        Essays to widen your perspectives
      </h1>
    </main>
  );
};

export default Hero;
