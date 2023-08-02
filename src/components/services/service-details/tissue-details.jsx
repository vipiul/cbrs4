import DirectContactUs from "@/components/forms/direct-contact-us";
import Footer from "@/layout/footer/footer";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import TissueDetailsArea from "./tissue-details-area";
import ServiceArea from "../service/service-area";
import Specialists from "@/common/specialists";

const TissueDetails = () => {
  return (
    <>
      <HeaderTwo />
      <Banner pageTitle={'Bio Tissue'} pageImage={'/assets/img/banner/bio_tissue.jpg'} />
      <TissueDetailsArea />
      <DirectContactUs />
      <Footer />
    </>
  );
};

export default TissueDetails;
