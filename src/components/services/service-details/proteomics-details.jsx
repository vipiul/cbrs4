import DirectContactUs from "@/components/forms/direct-contact-us";
import Footer from "@/layout/footer/footer";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import ProteomicsDetailsArea from "./proteomics-details-area";
import Cta_Area from "@/components/home/home/cta-area";

const ProteomicsDetails = () => {
  return (
    <>
      <HeaderTwo />
      <Banner pageTitle={'Proteomics'} pageImage={'/assets/img/banner/proteomics.jpg'} />
      <ProteomicsDetailsArea />
      <Cta_Area serviceTitle="Proteomics" />
      <DirectContactUs />
      <Footer />
    </>
  );
};

export default ProteomicsDetails;
