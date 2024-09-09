import React from "react";
import { useForm } from "react-hook-form";
import a from "../../assets/b.png";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    let r = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await r.text();
    console.log(data, res);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${a})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {isSubmitting && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-white text-xl">Loading...</div>
        </div>
      )}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br">
        <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-2xl p-8 w-[50vw] max-w-md border border-green-200">
          <h2 className="text-3xl font-bold text-center text-green-900 mb-6">
            Garden Login Gate
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
            <div className="mb-6">
              <input
                placeholder="Enter Password"
                {...register("password", {
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
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full p-3 bg-green-500 hover:bg-green-700 rounded-lg text-white font-bold transition duration-300"
            >
              Submit
            </button>
            {errors.myform && (
              <div className="text-red-700 mt-2">{errors.myform.message}</div>
            )}
            {errors.blocked && (
              <div className="text-red-700 mt-2">{errors.blocked.message}</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
