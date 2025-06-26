import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

import AuthWrapper from "./components/LoginRegisterPage/AuthWrapper";
import Footer from './components/Footer';
import LandingPage from "./pages/LandingPage";
import ContactUsPage from "./pages/ContactUsPage";
import Navbar from "./components/Navbar";
import ReferralPage from "./pages/ReferralPage";
import Java_FullStack from "./pages/Java_FullStack";
import SuccessStories from './components/SuccessStory/SuccessStories';

function App() {
  const [toastPosition, setToastPosition] = useState("top-right");
  const [containerStyle, setContainerStyle] = useState({
    top: "40px",
    right: "45px",
    zIndex: 9999,
  });

  const [toastStyle, setToastStyle] = useState({
    fontSize: "14px",
    padding: "12px 16px",
    borderRadius: "8px",
  });

  useEffect(() => {
    const updateToastSettings = () => {
      if (window.innerWidth <= 768) {
        setToastPosition("top-center");
        setContainerStyle({
          top: "20px",
          left: "10px",
          right: "10px",
          zIndex: 9999,
        });
        setToastStyle({
          fontSize: "14px",
          padding: "12px 16px",
          borderRadius: "8px",
        });
      } else {
        setToastPosition("top-right");
        setContainerStyle({
          top: "40px",
          right: "45px",
          zIndex: 9999,
        });
        setToastStyle({
          fontSize: "18px",
          padding: "16px 24px",
          borderRadius: "10px",
        });
      }
    };

    updateToastSettings();
    window.addEventListener("resize", updateToastSettings);
    return () => window.removeEventListener("resize", updateToastSettings);
  }, []);
  return (
    <>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/login" element={<AuthWrapper />} />
            <Route path="/register" element={<AuthWrapper />} />
            <Route path="/refer" element={<ReferralPage />} />
            <Route path="/JavaFullStack" element={<Java_FullStack/>} />
            <Route path="/success_stories" element={<SuccessStories />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
