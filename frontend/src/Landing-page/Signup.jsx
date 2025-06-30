import { Link } from 'react-router-dom';

export default function Signup() {
  const imageUrl =
    "https://i.ibb.co/JjG6hBxG/Ecommerce-online-shopping-cart-filled-bags-and-packages-Ecommerce-concept-Premium-AI-generated-image.jpg";

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-10">
      <div className="flex flex-col md:flex-row w-full max-w-5xl h-auto md:h-[550px] bg-white rounded-[10px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.1)]">
        <div
          className="flex-1 bg-cover bg-center h-52 md:h-auto"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>

        <div className="flex-1 p-10 flex flex-col justify-center">
          <h2 className="mb-5 text-2xl text-gray-800 font-semibold">SIGN UP</h2>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-2">
              <input
                type="text"
                placeholder="First Name"
                required
                className="w-full p-3 border border-gray-300 rounded-md text-base"
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                className="w-full p-3 border border-gray-300 rounded-md text-base"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full p-3 border border-gray-300 rounded-md text-base"
            />
            <select
              required
              className="w-full p-3 border border-gray-300 rounded-md text-base bg-white"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <input
              type="text"
              placeholder="Country"
              required
              className="w-full p-3 border border-gray-300 rounded-md text-base"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full p-3 border border-gray-300 rounded-md text-base"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              className="w-full p-3 border border-gray-300 rounded-md text-base"
            />
            <Link to="/dashboard">
              <button
                type="submit"
                className="w-full p-3 bg-purple-800 hover:bg-purple-400 text-white font-bold rounded-md transition duration-300"
              >
                Sign up
              </button>
            </Link>
            <Link to="/login">
              <button
                type="button"
                className="w-full p-3 bg-purple-800 hover:bg-purple-400 text-white font-bold rounded-md transition duration-300"
              >
                Already have an account?
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
