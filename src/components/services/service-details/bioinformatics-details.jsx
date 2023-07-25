import DirectContactUs from "@/components/forms/direct-contact-us";
import Footer from "@/layout/footer/footer";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import BioinformaticsDetailsArea from "./bioinformatics-details-area";

const BioinformaticsDetails = () => {
  return (
    <>
      <HeaderTwo />
      <Banner pageTitle={'Bioinformatics'} pageImage={'/assets/img/banner/bioinformatics.jpg'} />
      <BioinformaticsDetailsArea />
      <DirectContactUs />
      <Footer />
    </>
  );
};

export default BioinformaticsDetails;
