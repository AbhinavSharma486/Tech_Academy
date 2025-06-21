import React from 'react';
import bgImage from '../../assets/Refer/background.jpg';



const ReferralBanner = () => {
  return (
    <section
      className="relative w-full py-20 px-6 md:px-16 font-sans text-gray-800 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >

      {/* === Animated Background Symbols === */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute float-slow left-10 top-10 text-4xl opacity-30">✉️</div>
        <div className="absolute float left-1/2 top-20 text-4xl opacity-30">📩</div>
        <div className="absolute float-reverse right-10 top-32 text-3xl opacity-30">🚀</div>
        <div className="absolute float-fast left-1/4 bottom-10 text-4xl opacity-20">💬</div>
        <div className="absolute float-slow right-1/4 bottom-20 text-4xl opacity-20">➡️</div>
      </div>

      {/* === Main Content === */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* LEFT: Referrer Card */}
        <div className="flex flex-col items-center">
          <img
            src="src/assets/Refer/person.png"
            alt="Referrer"
            className="w-60 h-70 object-cover rounded-2xl shadow-xl mb-4 border border-gray-200"
          />

          <div className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full shadow">
            🔥 Top Referrer – 52 Friends Referred
          </div>

          <div className="mt-6 bg-white border border-gray-200 p-6 rounded-xl shadow-md w-72 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Create Your Link</h3>
            <p className="text-sm text-gray-500 mb-4">Share and earn instantly</p>
            <input
              className="text-sm px-3 py-2 w-full bg-gray-100 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
              type="text"
              value="Techacademy/refID=23287AD42C3"
              readOnly
              onClick={(e) => e.target.select()}
            />
            <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-600 hover:to-blue-600 text-white font-semibold py-2 rounded-full shadow transition duration-300">
              Send Referral 🚀
            </button>
          </div>
        </div>

        {/* CENTER: Title and CTA */}
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
              Refer Your Friends
            </span>
            <br />
            & Earn Rewards
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Help your friends get placed and earn up to <span className="text-blue-600 font-semibold">₹10,000*</span> through our referral bonus.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 text-lg font-bold text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
            🌟 Refer Now
          </button>
        </div>

        {/* RIGHT: Referee Card */}
        <div className="flex flex-col items-center">
          <img
            src="src/assets/Refer/person2.png"
            alt="Referee"
            className="w-80 h-70 object-cover rounded-2xl shadow-xl mb-4 border border-gray-200"
          />

          <div className="flex flex-col gap-3 text-center">
            <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium shadow">
              🤑 ₹1,13,000 Earned in Cash
            </div>
            <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium shadow">
              🚀 Placed at 20+ LPA
            </div>
          </div>
        </div>
      </div>

      {/* === Embedded Styles for Animations === */}
      <style>{`
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(15px); }
        }
        .float {
          animation: float 6s ease-in-out infinite;
        }
        .float-fast {
          animation: float 3s ease-in-out infinite;
        }
        .float-slow {
          animation: float 10s ease-in-out infinite;
        }
        .float-reverse {
          animation: float-reverse 7s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ReferralBanner;
