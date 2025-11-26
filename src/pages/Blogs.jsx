import React from "react";
import PageLayOut from "../components/PagesLayout/PageLayOut";
import { blogData } from "../data/data";
import { Link } from "react-router-dom";

const Blogs = () => {
  // console.log(blogData);

  return (
    <div>
      <PageLayOut />

      {/* Blogs */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          No of Blogs: {blogData.length}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog) => (
            <div
              key={blog.id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform"
            >
              <div className="mb-4">
                <img
                  src={blog.imgSrc}
                  alt="BlogImg"
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white leading-tight">
                  {blog.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {blog.desc}
                </p>
                <Link
                  to={`/blogs/${blog.id}`}
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
