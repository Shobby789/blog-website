import BlogPage from "@/components/BlogPage/BlogPage";
import Layout from "@/components/Global/Layout";
import React from "react";

const page = () => {
  return <Layout children={<BlogPage />} />;
};

export default page;
