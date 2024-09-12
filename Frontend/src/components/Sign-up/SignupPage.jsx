import React from "react";
import { useForm } from "react-hook-form";
import a from "../../assets/b.png";
import NavLogin from "../Login/NavLogin";

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      let response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        setError("submit", { type: "manual", message: "Signup failed" });
      } else {
        console.log("User registered:", data);
      }
    } catch (error) {
      setError("submit", { type: "manual", message: "An error occurred" });
      console.error("Error signing up:", error);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${a})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <NavLogin />
      {isSubmitting && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-white text-xl">Signing up...</div>
        </div>
      )}
      <div className="h-[91.2vh] flex items-center justify-center bg-gradient-to-br">
        <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-2xl p-8 w-[50vw] max-w-md border border-green-200">
          <h2 className="text-3xl font-bold text-center text-green-900 mb-6">
            Garden Signup Gate
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <input
                placeholder="Enter Username"
                {...register("username", {
                  required: { value: true, message: "This field is required" },
                  minLength: { value: 3, message: "Min length is 3" },
                  maxLength: { value: 8, message: "Max length is 8" },
                })}
                type="text"
                className="w-full p-3 bg-white bg-opacity-20 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-green-900 placeholder-green-700"
              />
              {errors.username && (
                <div className="text-red-700 mt-2">
                  {errors.username.message}
                </div>
              )}
            </div>
            <div className="mb-4">
              <input
                placeholder="Enter Email"
                {...register("email", {
                  required: { value: true, message: "This field is required" },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email format",
                  },
                })}
                type="email"
                className="w-full p-3 bg-white bg-opacity-20 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-green-900 placeholder-green-700"
              />
              {errors.email && (
                <div className="text-red-700 mt-2">{errors.email.message}</div>
              )}
            </div>
            <div className="mb-4">
              <input
                placeholder="Enter Password"
                {...register("password", {
                  required: { value: true, message: "This field is required" },
                  minLength: {
                    value: 7,
                    message: "Min length of password is 7",
                  },
                })}
                type="password"
                className="w-full p-3 bg-white bg-opacity-20 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-green-900 placeholder-green-700"
              />
              {errors.password && (
                <div className="text-red-700 mt-2">
                  {errors.password.message}
                </div>
              )}
            </div>
            <div className="mb-6">
              <input
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  validate: (value, formValues) =>
                    value === formValues.password || "Passwords do not match",
                })}
                type="password"
                className="w-full p-3 bg-white bg-opacity-20 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-green-900 placeholder-green-700"
              />
              {errors.confirmPassword && (
                <div className="text-red-700 mt-2">
                  {errors.confirmPassword.message}
                </div>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full p-3 bg-green-500 hover:bg-green-700 rounded-lg text-white font-bold transition duration-300"
            >
              Sign Up
            </button>
            {errors.submit && (
              <div className="text-red-700 mt-2">{errors.submit.message}</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
