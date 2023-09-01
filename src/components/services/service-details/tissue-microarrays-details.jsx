import DirectContactUs from "@/components/forms/direct-contact-us";
import Footer from "@/layout/footer/footer";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import TissueMicroarrayDetailsArea from "./tissue-microarrays-details-area";
import ServiceArea from "../service/service-area";
import Specialists from "@/common/specialists";

const TissueMicroarrayDetails = () => {
  return (
    <>
      <HeaderTwo />
      <Banner pageTitle={'Tissue Microarray'} pageImage={'/assets/img/banner/tissue-microarray.jpg'} />
      <TissueMicroarrayDetailsArea />
      <DirectContactUs />
      <Footer />
    </>
  );
};

export default TissueMicroarrayDetails;
