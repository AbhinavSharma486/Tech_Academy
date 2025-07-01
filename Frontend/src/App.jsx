import React from "react";
import { Routes, Route } from "react-router-dom";

import AuthWrapper from "./components/LoginRegisterPage/AuthWrapper";
import Footer from './components/Footer';
import LandingPage from "./pages/LandingPage";
import ContactUsPage from "./pages/ContactUsPage";
import Navbar from "./components/Navbar";
import ReferralPage from "./pages/ReferralPage";
import Java_FullStack from "./pages/Java_FullStack";
import DataAnalyticsPage from "./pages/DataAnalytics";
import SuccessStories from './components/SuccessStory/SuccessStories';
import Mern_FullStack from "./pages/Mern_FullStack";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/login" element={<AuthWrapper />} />
          <Route path="/register" element={<AuthWrapper />} />
          <Route path="/refer" element={<ReferralPage />} />
          <Route path="/JavaFullStack" element={<Java_FullStack />} />
          <Route path="/data-analytics" element={<DataAnalyticsPage />} />
          <Route path="/success_stories" element={<SuccessStories />} />
          <Route path="/mern-fullstack" element={<Mern_FullStack />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;