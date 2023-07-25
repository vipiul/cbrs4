import DirectContactUs from "@/components/forms/direct-contact-us";
import Footer from "@/layout/footer/footer";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import LaboratoryAndBiobankDetailsArea from "./laboratory-and-biobank-details-area";
import ServiceArea from "../service/service-area";
import Specialists from "@/common/specialists";

const LaboratoryAndBiobankDetails = () => {
  return (
    <>
      <HeaderTwo />
      <Banner pageTitle={'laboratory-and-biobank'} pageImage={'/assets/img/banner/laboratory-and-biobank.jpg'} />
      <LaboratoryAndBiobankDetailsArea />
      <ServiceArea />
      <Specialists />
      <DirectContactUs />
      <Footer />
    </>
  );
};

export default LaboratoryAndBiobankDetails;
