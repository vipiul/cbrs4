import PricingArea from "@/common/pricing-area";
import DirectContactUs from "@/components/forms/direct-contact-us";
import FooterFour from "@/layout/footer/footer";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Specialists from "../../../common/specialists";
import Banner from "./banner";
import ServiceArea from "./service-area";
import Video from "./video";

const ServiceTwo = () => {
  return (
    <>
      <HeaderTwo />
      <Banner />
          <ServiceArea />
          <Specialists/>
      
      <DirectContactUs />
      <FooterFour />
    </>
  );
};

export default ServiceTwo;
