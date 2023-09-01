import DirectContactUs from "@/components/forms/direct-contact-us";
import Footer from "@/layout/footer/footer";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import TermsConditionsDetailsArea from "./terms-conditions-details-area";

const TermsConditionsDetails = () => {
  return (
    <>
      <HeaderTwo />
      <Banner pageTitle={'Terms Conditions'} pageImage={'/assets/img/banner/terms-conditions.jpg'} />
      <TermsConditionsDetailsArea />
      <Footer />
    </>
  );
};

export default TermsConditionsDetails;
