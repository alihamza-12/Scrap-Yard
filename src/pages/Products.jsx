import React, { useEffect } from "react";
import PageLayOut from "../components/PagesLayout/PageLayOut";
import { useGetProductsQuery } from "../../store/apiSlice/userSlice";
import { Link } from "react-router-dom";

const Products = () => {
  const { data, isLoading, error } = useGetProductsQuery();
  console.log(data?.data);
  const getProducts = data?.data;

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-64 text-gray-600 dark:text-gray-400">
        Loading products...
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-64 text-red-600 dark:text-red-400">
        Error fetching products.
      </div>
    );

  return (
    <div>
      <PageLayOut />
      {/* Products */}

      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          No of Products: {getProducts.length}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getProducts?.map((product) => (
            <div
              key={product._id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform"
            >
              <div className="mb-4">
                <img
                  src={product.imgSrc}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white leading-tight">
                  {product.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {product.desc.slice(0, 100) + "..."}
                </p>
                <h1 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Price
                </h1>
                <h2 className="text-2xl font-bold mb-3 text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900 px-3 py-1 rounded-lg inline-block leading-tight">
                  {product.price}
                </h2>
                <br />
                <Link
                  to={`/product/${product._id}`}
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300"
                >
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
