import DirectContactUs from "@/components/forms/direct-contact-us";
import Footer from "@/layout/footer/footer";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import GenomicsDetailsArea from "./genomics-details-area";
import Cta_Area from "@/components/home/home/cta-area";

const GenomicsDetails = () => {
  return (
    <>
      <HeaderTwo />
      <Banner pageTitle={'Genomics'} pageImage={'/assets/img/banner/genomics.jpg'} />
      <GenomicsDetailsArea />
      <Cta_Area serviceTitle={'Genomics'} />
      <DirectContactUs />
      <Footer />
    </>
  );
};

export default GenomicsDetails;
