import DirectContactUs from "@/components/forms/direct-contact-us";
import Footer from "@/layout/footer/footer";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import TissueDetailsArea from "./tissue-details-area";
import ServiceArea from "../service/service-area";
import Specialists from "@/common/specialists";
import Cta_Area from "@/components/home/home/cta-area";

const TissueDetails = () => {
  return (
    <>
      <HeaderTwo />
      <Banner pageTitle={'Bio Tissue'} pageImage={'/assets/img/banner/bio_tissue.jpg'} />
      <TissueDetailsArea />
      <Cta_Area serviceTitle="Bio Tissue" />
      <DirectContactUs />
      <Footer />
    </>
  );
};

export default TissueDetails;
