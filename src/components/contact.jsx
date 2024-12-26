import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { ReactTyped,Typed } from "react-typed";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/azyydgvb", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-lg mx-auto px-4 md:px-20 py-16 bg-gray-100"
      >
        {/* Header Section */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Contact Me
        </h1>
        <p className="text-center  mb-10 text-red-900">
        <ReactTyped
        className="text-green-700 font-bold text-xl"
          strings={[" Fill out the form to get in touch!"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
        
        </p>

        {/* Form Section */}
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white shadow-lg rounded-lg w-full max-w-md px-8 py-6"
          >
            <h2 className="text-xl font-semibold mb-6 text-gray-800 text-center">
              Send Your Message
            </h2>

            {/* Name Field */}
            <div className="flex flex-col mb-6">
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Full Name
              </label>
              <input
                {...register("name", { required: true })}
                className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-100"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
              />
              {errors.name && (
                <span className="text-red-500 text-sm mt-1">
                  This field is required
                </span>
              )}
            </div>

            {/* Email Field */}
            <div className="flex flex-col mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
                Email Address
              </label>
              <input
                {...register("email", { required: true })}
                className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-100"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1">
                  This field is required
                </span>
              )}
            </div>

            {/* Message Field */}
            <div className="flex flex-col mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium"
              >
                Message
              </label>
              <textarea
                {...register("message", { required: true })}
                className="border border-gray-300 rounded-lg py-2 px-4 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-100"
                id="message"
                name="message"
                placeholder="Enter your query"
              />
              {errors.message && (
                <span className="text-red-500 text-sm mt-1">
                  This field is required
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
