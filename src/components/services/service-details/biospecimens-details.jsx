import DirectContactUs from "@/components/forms/direct-contact-us";
import Footer from "@/layout/footer/footer";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import BiospecimensDetailsArea from "./biospecimens-details-area";
import ServiceArea from "../service/service-area";
import Specialists from "@/common/specialists";

const BiospecimensDetails = () => {
  return (
    <>
      <HeaderTwo />
      <Banner pageTitle={'Biospecimens'} pageImage={'/assets/img/banner/biospecimens.jpg'} />
      <BiospecimensDetailsArea />
      <DirectContactUs />
      <Footer />
    </>
  );
};

export default BiospecimensDetails;
