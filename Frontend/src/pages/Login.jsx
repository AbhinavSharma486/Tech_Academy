import React, { useState } from "react";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";

function Login({ isVisible }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showpassword, setShowPassword] = useState(false);

  const isEmailValid = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const isPasswordValid = (password) => password.length >= 5;

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Kindly fill all the fields!");
    } else {
      toast.success("Login Successful!");
      setEmail("");
      setPassword("");
    }
  }

  return (
    <div
      className={`absolute top-0 w-full md:w-1/2 flex flex-col items-center justify-center transition-all duration-500 ease-in-out h-full px-10 ${
        isVisible
          ? "opacity-100 z-10 translate-y-0"
          : "opacity-0 z-0 translate-y-[25%]"
      }`}
    >
      <form
        className="w-full flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <h1 className="md:text-3xl text-2xl font-bold">Sign In</h1>

        <div className="relative w-full my-2">
          <input
            type="email"
            placeholder="Email"
            className="bg-[#eee] p-2 pl-3 pr-10 rounded-full w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="relative w-full my-2">
          <input
            type={showpassword ? "text" : "password"}
            placeholder="Password"
            className="bg-[#eee] p-2 pl-3 pr-10 rounded-full w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showpassword ? (
            <div
              className="absolute top-1 right-2"
              onClick={() => setShowPassword(false)}
            >
              <Eye />
            </div>
          ) : (
            <div
              className="absolute top-1 right-2"
              onClick={() => setShowPassword(true)}
            >
              <EyeOff />
            </div>
          )}
        </div>

        <button className="bg-blue-500 text-white px-6 py-2 rounded-full mt-4 w-full cursor-pointer hover:bg-blue-700">
          Sign In
        </button>
      </form>

      <button
        className="w-full border-1 flex items-center justify-center mt-4 rounded-full p-2 gap-2 cursor-pointer hover:bg-gray-800 hover:text-white font-semibold"
        type="submit"
      >
        <img
          src="src/assets/loginpage/googleIcon.svg"
          alt=""
          className="size-5"
        />
        <h1 className="text-[14px]">Continue With Google</h1>
      </button>
    </div>
  );
}

export default Login;