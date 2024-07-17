"use client";
import React, { useContext } from "react";
import ThemeButton from "./ThemeButton";
import Link from "next/link";
import { ThemeContext, useTheme } from "@/context/ThemeContext";
// bg-[#222222]

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`w-full pb-12 overflow-y-auto overflow-x-hidden padding-horizontal ${
        theme == "light" ? "bg-white" : "bg-black"
      }`}
    >
      <div className="w-full flex justify-between pt-6">
        <Link href="/" className="text-xl">
          <img
            src={theme === "light" ? "/black-logo.png" : "/logo.png"}
            alt="logo"
            className="h-12 2xl:h-16"
          />
        </Link>
        <ThemeButton />
      </div>
      <div className="w-full">{children}</div>

      <div className="w-full pt-12 flex justify-start">
        <Link href="/" className="text-lg">
          <img
            src={theme === "light" ? "/black-logo.png" : "/logo.png"}
            alt="logo"
            className="h-12 2xl:h-16"
          />
        </Link>
      </div>
    </div>
  );
};

export default Layout;
