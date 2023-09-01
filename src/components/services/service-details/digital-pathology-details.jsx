import DirectContactUs from "@/components/forms/direct-contact-us";
import Footer from "@/layout/footer/footer";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import DigitalPathologyDetailsArea from "./digital-pathology-details-area";
import ServiceArea from "../service/service-area";
import Specialists from "@/common/specialists";
import Cta_Area from "@/components/home/home/cta-area";

const DigitalPathologyDetails = () => {
  return (
    <>
      <HeaderTwo />
      <Banner pageTitle={'Digital Pathology'} pageImage={'/assets/img/banner/digital-pathology.jpg'} />
      <DigitalPathologyDetailsArea />
      <Cta_Area serviceTitle={"Digital Pathology"} />
      <DirectContactUs />
      <Footer />
    </>
  );
};

export default DigitalPathologyDetails;
