import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Wrapper({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isRegister = location.pathname === "/register";

  return (
    <div className="bg-gradient-to-br from-[#1e40af] via-[#60a5fa] to-[#f0f9ff] flex flex-col items-center justify-center min-h-screen pt-20 relative">
      <div className="absolute top-[20%] right-[10%] z-0 md:block hidden animate-pulse duration-1000">
        <div className="w-[100px] h-[100px] bg-white/10 rounded-full blur-2xl absolute -top-5 -left-5"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffffff33"
          viewBox="0 0 24 24"
          className="w-[150px] h-[150px] opacity-100 relative"
        >
          <path d="M12 17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm6-6h-.5V9a5.5 5.5 0 0 0-11 0v2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2Zm-8.5-2a3.5 3.5 0 1 1 7 0v2h-7V9Z" />
        </svg>
      </div>

      <div className="absolute bottom-[20%] left-[10%] z-0 md:block hidden animate-pulse duration-1000">
        <div className="w-[100px] h-[100px] bg-white/10 rounded-full blur-2xl absolute -top-5 -left-5"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffffff33"
          viewBox="0 0 24 24"
          className="w-[150px] h-[150px] opacity-100 relative"
        >
          <path d="M12 17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm6-6h-.5V9a5.5 5.5 0 0 0-11 0v2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2Zm-8.5-2a3.5 3.5 0 1 1 7 0v2h-7V9Z" />
        </svg>
      </div>

      <div className="bg-white rounded-[30px] m-10 shadow-[0_5px_15px_rgba(0,0,0,0.35)] relative overflow-hidden min-w-[280px] w-[60%] md:min-w-[730px] md:w-[50%] max-w-[100%] min-h-[480px] md:min-h-[580px] flex flex-col md:flex-row">
        <div className="relative inset-0 z-50 pointer-events-none overflow-hidden hidden md:block">
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[200px] h-[200px] absolute top-[-50px] left-[-50px] opacity-20"
          >
            <path d="M50 5 L90 25 L50 45 L10 25 Z" fill="#60a5fa" />
            <path d="M10 25 L50 45 L50 95 L10 75 Z" fill="#3b82f6" />
            <path d="M50 45 L90 25 L90 75 L50 95 Z" fill="#2563eb" />
          </svg>

          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[180px] h-[180px] absolute bottom-[-40px] right-[-40px] opacity-20"
          >
            <path d="M50 5 L90 25 L50 45 L10 25 Z" fill="#bfdbfe" />
            <path d="M10 25 L50 45 L50 95 L10 75 Z" fill="#93c5fd" />
            <path d="M50 45 L90 25 L90 75 L50 95 Z" fill="#60a5fa" />
          </svg>
        </div>
        {children}

        <div
          className={`absolute top-0 ${isRegister
            ? "md:left-0 md:rounded-tr-[150px] md:rounded-br-[100px] md:rounded-tl-0 md:rounded-bl-0 translate-y-[85%] md:translate-y-0"
            : "md:left-[50%] md:rounded-tl-[150px] md:rounded-bl-[100px] md:rounded-tr-0 md:rounded-br-0 -translate-y-[85%] md:translate-y-0"
            } z-20 min-w-[280px] w-full md:w-[50%] md:h-[100%] h-[100%] overflow-hidden transition-all duration-[600ms] ease-in-out 
 `}
        >
          <div
            className={`flex bg-blue-500 h-[100%] md:p-10 p-0 text-white relative flex-col justify-around md:gap-30 gap-80 md:flex-row items-center left-0 md:w-[200%] w-[100%] md:h-full transition-all duration-600  ease-in-out ${isRegister
              ? "md:translate-x-0  md:translate-y-0  rounded-tl-[100px] rounded-tr-[100px] rounded-bl-[0px] rounded-br-[0px] md:rounded-tl-[0px] md:rounded-tr-[0px]"
              : "md:-translate-x-1/2  md:-translate-y-0   rounded-bl-[100px] rounded-br-[100px] rounded-tl-[0px] rounded-tr-[0px] md:rounded-bl-[0px] md:rounded-br-[0px]"
              }`}
          >
            <div className="md:w-1/2 w-full flex flex-col items-center justify-center ">
              <h1 className="text-3xl font-bold hidden md:block">
                Hello, Friend!
              </h1>
              <p className="text-[20px] leading-[25px] hidden md:block tracking-[0.5px] mt-[20px] mb-[20px] w-[200px] text-center">
                Unlock all features by signing up!
              </p>
              <button
                className=" md:text-[14px] text-[12px] md:w-[200px] text-white pt-[10px] pb-[10px] pl-[45px] pr-[45px]  hover:bg-blue-800 hover:text-white  border rounded-full font-semibold tracking-[0.5px] uppercase mt-[10px] cursor-pointer bg-transparent border-white"
                onClick={() => navigate("/login")}
              >
                Sign In
              </button>
            </div>
            <div className="md:w-1/2 w-full flex flex-col items-center justify-center text-center ">
              <h1 className="text-3xl hidden md:block font-bold w-full  ">
                Welcome Back!
              </h1>
              <p className="text-[20px] leading-[25px] hidden md:block tracking-[0.5px] mt-[20px] mb-[20px] w-[250px] text-center">
                Sign in to personalize your experience!
              </p>
              <button
                className=" md:text-[14px] text-[12px] md:w-[200px] pt-[10px] pb-[10px] pl-[45px] pr-[45px]  hover:bg-blue-800 hover:text-white border-1 rounded-full font-semibold tracking-[0.5px] uppercase mt-[10px] cursor-pointer bg-transparent border-white "
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
