import { Check, Eye, EyeClosed, EyeOff} from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

function Register({ isVisible }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showpassword, setShowPassword] = useState(false);
  const isEmailValid = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const isPasswordValid = (password) => password.length >= 5;
  const isUsernameValid = (username) => username.length >= 4;

  function handleSubmit(e) {
    e.preventDefault();
    if (!isEmailValid(email)) {
      toast.error("Kindly Fill proper Email!");
    } else if (!isPasswordValid(password)) {
      toast.error("Password should be minimum 5 letters!");
    } else if (!isUsernameValid(username)) {
      toast.error("Username should be minimum 4 letters!");
    } else {
      toast.success("Registration Successful!");
      setEmail("");
      setPassword("");
      setUsername("");
    }
  }

  return (
    <div
      className={`absolute top-0 w-full md:left-1/2 md:w-1/2 flex flex-col items-center justify-center transition-all duration-500 ease-in-out h-full px-10 ${
        isVisible
          ? "opacity-100 z-10 translate-y-0"
          : "opacity-0 z-0 translate-y-[25%]"
      }`}
    >
      <form
        className="w-full flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <h1 className="md:text-3xl  text-2xl font-bold pb-3">Create Account</h1>
        <div className="relative w-full">
          <input
          type="text"
          placeholder="Name"
          className="bg-[#eee] my-2 p-2 pl-3 rounded-full w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {isUsernameValid(username) && (
            <Check className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white size-6 bg-green-500 rounded-full p-1" />
          )}
        </div>
       <div className="relative w-full ">
         <input
          type="email"
          placeholder="Email"
          className="bg-[#eee] my-2 p-2 pl-3 rounded-full w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
         {isEmailValid(email) && (
            <Check className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white size-6 bg-green-500 rounded-full p-1" />
          )}
       </div>
        <div className="relative w-full "> 
          <input
          type={showpassword ? "text" : "password"}
          placeholder="Password"
          className="bg-[#eee] my-2 p-2 pl-3 rounded-full w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
       {showpassword ? (
            <div
              className="absolute top-4 right-2"
              onClick={() => setShowPassword(false)}
            >
              <Eye />
            </div>
          ) : (
            <div
              className="absolute top-4 right-2" onClick={() => setShowPassword(true)}><EyeOff /></div>
          )}
        </div>
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-full mt-4 w-full cursor-pointer hover:bg-blue-700"
          type=""
        >
          Register
        </button>
      </form>
      <button className="w-full border-1 flex items-center justify-center mt-4 rounded-full p-2 gap-2 cursor-pointer hover:bg-gray-800 hover:text-white font-semibold">
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

export default Register;
