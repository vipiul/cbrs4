import DirectContactUs from "@/components/forms/direct-contact-us";
import Footer from "@/layout/footer/footer";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import StemAndImmuneCellsDetailsArea from "./stem-and-immune-cells-details-area";
import ServiceArea from "../service/service-area";
import Specialists from "@/common/specialists";
import Cta_Area from "@/components/home/home/cta-area";

const StemAndImmuneCellsDetails = () => {
  return (
    <>
      <HeaderTwo />
      <Banner pageTitle={'Stem And Immune Cells'} pageImage={'/assets/img/banner/stem-and-immune-cells.jpg'} />
      <StemAndImmuneCellsDetailsArea />
      <Cta_Area serviceTitle="Stem And Immune Cells" />
      <DirectContactUs />
      <Footer />
    </>
  );
};

export default StemAndImmuneCellsDetails;
