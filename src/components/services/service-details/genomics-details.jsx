import DirectContactUs from "@/components/forms/direct-contact-us";
import Footer from "@/layout/footer/footer";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import GenomicsDetailsArea from "./genomics-details-area";

const GenomicsDetails = () => {
  return (
    <>
      <HeaderTwo />
      <Banner pageTitle={'Genomics'} pageImage={'/assets/img/banner/genomics.jpg'} />
      <GenomicsDetailsArea />
      <DirectContactUs />
      <Footer />
    </>
  );
};

export default GenomicsDetails;
