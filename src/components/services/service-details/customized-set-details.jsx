import DirectContactUs from "@/components/forms/direct-contact-us";
import Footer from "@/layout/footer/footer";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import CustomizedSetDetailsArea from "./customized-set-details-area";
import ServiceArea from "../service/service-area";
import Specialists from "@/common/specialists";

const CustomizedSetDetails = () => {
  return (
    <>
      <HeaderTwo />
      <Banner pageTitle={'Customized Set'} pageImage={'/assets/img/banner/customized-set.jpg'} />
      <CustomizedSetDetailsArea />
      <DirectContactUs />
      <Footer />
    </>
  );
};

export default CustomizedSetDetails;
