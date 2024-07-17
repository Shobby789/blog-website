"use client";
import React, { useContext } from "react";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";

const BlogCard = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Link href="/blog">
      <div className="w-full">
        <Image
          src="/blog-1.jpg"
          alt="blog-image"
          height={250}
          width={400}
          priority
          className="w-full bg-contain rounded-3xl h-[250px]"
        />
        <div className="py-4 px-1 flex flex-col items-start gap-3">
          <div className="w-full flex items-center justify-start gap-3">
            <div className="px-3 py-1 rounded-full bg-indigo-600 text-white">
              <span className="text-xs font-medium">Business Models</span>
            </div>
            <GoDotFill className="text-gray-500" />
            <p className="text-sm text-gray-500">24 March, 2024</p>
          </div>
          <h1
            className={`text-lg font-medium ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          >
            Blog Title
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
