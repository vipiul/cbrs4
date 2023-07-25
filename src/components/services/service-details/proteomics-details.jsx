import DirectContactUs from "@/components/forms/direct-contact-us";
import Footer from "@/layout/footer/footer";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import ProteomicsDetailsArea from "./proteomics-details-area";

const ProteomicsDetails = () => {
  return (
    <>
      <HeaderTwo />
      <Banner pageTitle={'Proteomics'} pageImage={'/assets/img/banner/proteomics.jpg'} />
      <ProteomicsDetailsArea />
      <DirectContactUs />
      <Footer />
    </>
  );
};

export default ProteomicsDetails;
