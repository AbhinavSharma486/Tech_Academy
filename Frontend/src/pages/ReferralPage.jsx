import React from "react";
import ReferralBanner from "../components/Referral/ReferralBanner";
import ReferralSteps from "../components/Referral/ReferralSteps";
import ReferralFAQ from "../components/Referral/ReferralFAQ";

const ReferralPage = () => {
  return (
    <div className="bg-white text-gray-900">
      <ReferralBanner />
      <ReferralSteps />
      <ReferralFAQ />
    </div>
  );
};

export default ReferralPage;
