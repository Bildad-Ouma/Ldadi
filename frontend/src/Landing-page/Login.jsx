import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const imageUrl =
    "https://i.ibb.co/JjG6hBxG/Ecommerce-online-shopping-cart-filled-bags-and-packages-Ecommerce-concept-Premium-AI-generated-image.jpg";

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-white p-10">
        <div className="flex flex-col md:flex-row w-full max-w-5xl h-auto md:h-[550px] bg-white rounded-[10px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.1)]">
          {/* Left Side (Image) */}
          <div
            className="flex-1 bg-cover bg-center h-52 md:h-auto"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>

          {/* Right Side (Form) */}
          <div className="flex-1 p-10 flex flex-col justify-center">
            <h2 className="mb-5 text-2xl text-gray-800 font-semibold">LOG IN</h2>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full p-3 border border-gray-300 rounded-md text-base"
              />
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full p-3 border border-gray-300 rounded-md text-base"
              />
              <Link to="#" className="text-sm text-purple-700 hover:underline">
                Forgot Password?
              </Link>
              <Link to="/dashboard">
                <button
                  type="submit"
                  className="w-full p-3 bg-purple-800 hover:bg-purple-400 text-white font-bold rounded-md transition duration-300"
                >
                  LOG IN
                </button>
              </Link>
              <Link to="/signup">
                <button
                  type="button"
                  className="w-full p-3 bg-purple-800 hover:bg-purple-400 text-white font-bold rounded-md transition duration-300"
                >
                  DON'T HAVE AN ACCOUNT?
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
