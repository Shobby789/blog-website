import React from "react";
import BlogCard from "../Global/BlogCard";

const BlogList = () => {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </section>
  );
};

export default BlogList;
