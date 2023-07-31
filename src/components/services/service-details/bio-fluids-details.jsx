import DirectContactUs from "@/components/forms/direct-contact-us";
import Footer from "@/layout/footer/footer";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import BiofluidsDetailsArea from "./bio-fluids-details-area";
import ServiceArea from "../service/service-area";
import Specialists from "@/common/specialists";

const BiofluidsDetails = () => {
  return (
    <>
      <HeaderTwo />
      <Banner pageTitle={'Bio fluids'} pageImage={'/assets/img/banner/bio-fluids.jpg'} />
      <BiofluidsDetailsArea />
      <DirectContactUs />
      <Footer />
    </>
  );
};

export default BiofluidsDetails;
