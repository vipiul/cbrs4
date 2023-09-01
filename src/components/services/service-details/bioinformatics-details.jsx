import DirectContactUs from "@/components/forms/direct-contact-us";
import Footer from "@/layout/footer/footer";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import BioinformaticsDetailsArea from "./bioinformatics-details-area";
import Cta_Area from "@/components/home/home/cta-area";

const BioinformaticsDetails = () => {
  return (
    <>
      <HeaderTwo />
      <Banner pageTitle={'Bioinformatics'} pageImage={'/assets/img/banner/bioinformatics.jpg'} />
      <BioinformaticsDetailsArea />
        <Cta_Area serviceTitle={'Bioinformatics'} />
      <DirectContactUs />
      <Footer />
    </>
  );
};

export default BioinformaticsDetails;
