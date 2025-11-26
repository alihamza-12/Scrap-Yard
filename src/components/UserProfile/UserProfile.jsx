import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const userData = useSelector((state) => state.auth.user);
  //   const token = useSelector((state) => state.auth.token);
 
  const { FullName, Email, PhoneNo, Role } = userData || {};
  // const {_id, Price,fromDate,ScrapItem,Quantity } = userData?.transactions || {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Profile Card */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg flex-shrink-0">
              {FullName?.charAt(0)?.toUpperCase() || "U"}
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent mb-2">
                {FullName || "User"}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                {Email || "No email"}
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <span className="font-semibold text-gray-700 dark:text-gray-300">
                Phone:
              </span>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                {PhoneNo || "No phone"}
              </p>
            </div>
            <div>
              <span className="font-semibold text-gray-700 dark:text-gray-300">
                Role:
              </span>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                {Role || "User"}
              </p>
            </div>
          </div>
        </div>

        {/* Transactions Section */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center md:text-left">
            Your Transactions
          </h2>
          {userData?.transactions.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-4xl">
                🛒
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Place your first order!
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
                Check out all the products below.
              </p>
              <Link
                to="/products"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                View Products
              </Link>
            </div>
          ) : (
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userData?.transactions.map((transaction, index) => (
                <div
                  key={ index}
                  className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-700 dark:to-gray-600 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-green-200 dark:border-gray-600 cursor-pointer"
                >
                  <h4 className="font-bold text-lg text-gray-800 dark:text-white mb-2">
                    Order #{ index + 1}
                  </h4>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                    {transaction.Price || "N/A"}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {transaction.fromDate || "No date"}
                  </p>
                  <span className="inline-block px-3 py-1 bg-green-200 dark:bg-green-800 text-xs font-semibold text-green-800 dark:text-green-200 rounded-full">
                    {transaction.ScrapItem }
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
