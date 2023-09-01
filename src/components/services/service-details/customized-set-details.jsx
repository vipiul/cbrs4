import DirectContactUs from "@/components/forms/direct-contact-us";
import Footer from "@/layout/footer/footer";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import CustomizedSetDetailsArea from "./customized-set-details-area";
import ServiceArea from "../service/service-area";
import Specialists from "@/common/specialists";
import Cta_Area from "@/components/home/home/cta-area";

const CustomizedSetDetails = () => {
  return (
    <>
      <HeaderTwo />
      <Banner pageTitle={'Customized Set'} pageImage={'/assets/img/banner/customized-set.jpg'} />
      <CustomizedSetDetailsArea />
      <Cta_Area serviceTitle="Customized Set" />
      <DirectContactUs />
      <Footer />
    </>
  );
};

export default CustomizedSetDetails;
