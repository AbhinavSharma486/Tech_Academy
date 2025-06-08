import { Routes, Route } from "react-router-dom";
import AuthWrapper from "./components/LoginRegisterPage/AuthWrapper";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import React from "react";
import Home from "./pages/Home/Home";

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
      <Toaster
        position={toastPosition}
        containerStyle={containerStyle}
        toastOptions={{
          style: toastStyle,
        }}
      />
      <Routes>

        <Route path='/' element={<Home />} />
          
        {/* Auhentication Route */}
        <Route path="/login" element={<AuthWrapper />} />
        <Route path="/register" element={<AuthWrapper />} />
      </Routes>
    </>
  );
}

export default App;
