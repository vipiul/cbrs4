import DirectContactUs from "@/components/forms/direct-contact-us";
import Footer from "@/layout/footer/footer";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import HistopathologyDetailsArea from "./histopathology-details-area";
import Cta_Area from "@/components/home/home/cta-area";

const HistopathologyDetails = () => {
  return (
    <>
      <HeaderTwo />
      <Banner pageTitle={'Histopathology'} pageImage={'/assets/img/banner/histopathology.jpg'} />
      <HistopathologyDetailsArea />
      <Cta_Area serviceTitle={"Histopathology"} />
      <DirectContactUs />
      <Footer />
    </>
  );
};

export default HistopathologyDetails;
