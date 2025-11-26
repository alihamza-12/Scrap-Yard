import React, { useRef } from "react";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import contact_Us from "../../assets/contact-us.jpg";
import emailjs from "@emailjs/browser";

//Zod Schema
const schema = z.object({
  name: z.string().min(1, { message: "Name required" }),
  email: z.string().email({ message: "InValid Email Address" }),
  services: z.string().min(1, { message: "Please Select the Service" }),
  acceptTerms: z.literal(true, { message: "Please check the Box" }),
  textmsg: z.string().min(5, { message: "Enter Your Message" }),
});

const ContactUsForm = () => {
  const form = useRef();
  //SetUp React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  //OnSubmit
  const onSubmit = (data) => {
    console.log(data);

    // Email
    emailjs
      .sendForm("service_pxefgmr", "template_2cq57kq", form.current, {
        publicKey: "8DF0ZjqLFN33Rcdf2",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex justify-center items-center mb-10">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-stretch gap-10">
        {/* Image */}
        {/* <div className="max-w-lg rounded-3xl overflow-hidden shadow-2xl h-full border-lime-500 "> */}
        <img
          src={contact_Us}
          alt="Contact Us"
          className="w-1/2 rounded-3xl shadow-2xl"
        />
        {/* </div> */}
        {/* Form */}
        <div className="flex-1 w-full max-w-md h-full">
          <form
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className="w-full p-8 bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl border border-orange-500/20"
          >
            {/* Name */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#D2D2D2] mb-2">
                Name
              </label>
              <input
                className="bg-gray-800 p-3 rounded-xl w-full border border-orange-500/30 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all duration-300 text-white placeholder-gray-400"
                type="text"
                placeholder="Enter your Name"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            {/* Email */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#D2D2D2] mb-2">
                Email
              </label>
              <input
                className="bg-gray-800 p-3 rounded-xl w-full border border-orange-500/30 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all duration-300 text-white placeholder-gray-400"
                type="email"
                placeholder="Enter your email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            {/* Service */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#D2D2D2] mb-2">
                Service
              </label>
              <select
                {...register("services")}
                className="bg-gray-800 p-3 rounded-xl w-full border border-orange-500/30 
               focus:ring-2 focus:ring-orange-400 focus:border-orange-400 
               outline-none transition-all duration-300 text-white cursor-pointer"
              >
                <option value="">-- Select Service --</option>
                <option value="Service">Service</option>
                <option value="Pricing">Pricing</option>
                <option value="Support">Support</option>
                <option value="Account">Account</option>
              </select>

              {errors.services && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.services.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#D2D2D2] mb-2">
                Message
              </label>
              <textarea
                className="bg-gray-800 p-3 rounded-xl w-full border border-orange-500/30 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all duration-300 text-white placeholder-gray-400"
                {...register("textmsg")}
                // cols="30"
                rows="3"
                placeholder="Enter your Message"
              ></textarea>

              {errors.textmsg && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.textmsg.message}
                </p>
              )}
            </div>
            {/* CheckBox */}
            <div className="flex items-center mb-6 space-x-3">
              <input
                className="w-5 h-5 cursor-pointer rounded border border-orange-500/30 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all duration-300 text-white"
                type="checkbox"
                {...register("acceptTerms")}
                id="acceptTerms"
              />
              <label
                htmlFor="acceptTerms"
                className="cursor-pointer text-sm font-medium text-[#D2D2D2]"
              >
                I accept the terms and policies
              </label>
            </div>
            {errors.acceptTerms && (
              <p className="text-red-400 text-sm mt-1 -mb-4">
                {errors.acceptTerms.message}
              </p>
            )}
            {/* Submit */}
            <button
              className="p-3 cursor-pointer bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl text-white w-full mt-8 hover:from-orange-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-lg font-semibold"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
