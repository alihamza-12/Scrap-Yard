import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../../store/apiSlice/userSlice";
import { Link } from "react-router-dom";
import PageLayOut from "../components/PagesLayout/PageLayOut";

const ProductDetail = () => {
  const url = useParams();
  const productId = url.id;

  const { data, isLoading, error } = useGetProductsQuery();
  const getProducts = data?.data;

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-64 text-gray-600 dark:text-gray-400 animate-pulse">
        <div className="text-lg">Loading product details...</div>
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-64 text-red-600 dark:text-red-400">
        <div className="text-lg">Error fetching product details.</div>
      </div>
    );

  const product = getProducts.find((p) => p._id == productId);

  return (
    <div className="text-white min-h-screen">
      <PageLayOut />

      {/* Product Detail */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Image Section */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={product.imgSrc}
                    alt={product.title}
                    className="w-full h-80 sm:h-96 lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Scrap Material
                  </div>
                </div>
                {/* <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-2 shadow-lg animate-bounce">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div> */}
              </div>

              {/* Details Section */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="animate-in fade-in duration-1000">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-800 dark:text-white leading-tight">
                    {product.title}
                  </h1>
                  <div className="flex items-center space-x-2 mb-4">
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                      Premium Quality Scrap
                    </span>
                  </div>
                </div>

                <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                  <div className="flex items-start space-x-3 mb-6">
                    <svg
                      className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                      {product.desc}
                    </p>
                  </div>
                </div>

                <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                  <div className="flex items-center space-x-3 mb-6">
                    <svg
                      className="w-6 h-6 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      />
                    </svg>
                    <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                      Current Market Price
                    </h2>
                  </div>
                  <div className="bg-gradient-to-r from-green-400 to-green-600 dark:from-green-500 dark:to-green-700 text-white px-6 py-3 rounded-xl inline-block shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <span className="text-2xl sm:text-3xl font-bold">
                      {product.price}
                    </span>
                    <span className="text-sm opacity-90 ml-1">per KG</span>
                  </div>
                </div>

                <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700 pt-4">
                  <Link
                    to={`/products`}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      />
                    </svg>
                    <span>View All Products</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
