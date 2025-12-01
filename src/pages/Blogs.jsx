import React from "react";
import PageLayOut from "../components/PagesLayout/PageLayOut";
import BlogsComponent from "../components/Blogs/BlogsComponent";

const Blogs = () => {
  // console.log(blogData);

  return (
    <div>
      <PageLayOut />

      {/* Blogs */}
      <BlogsComponent />
    </div>
  );
};

export default Blogs;
