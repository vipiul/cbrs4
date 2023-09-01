import DirectContactUs from "@/components/forms/direct-contact-us";
import Footer from "@/layout/footer/footer";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import PrivacyPolicyDetailsArea from "./privacy-policy-details-area";

const PrivacyPolicyDetails = () => {
  return (
    <>
      <HeaderTwo />
      <Banner pageTitle={'Privacy Policy'} pageImage={'/assets/img/banner/privacy-policy.png'} />
      <PrivacyPolicyDetailsArea />
      <Footer />
    </>
  );
};

export default PrivacyPolicyDetails;
