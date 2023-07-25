import DirectContactUs from "@/components/forms/direct-contact-us";
import Footer from "@/layout/footer/footer";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import GenerationSequencingNgsDetailsArea from "./generation-sequencing-ngs-details-area";
import ServiceArea from "../service/service-area";
import Specialists from "@/common/specialists";

const GenerationSequencingNgsDetails = () => {
  return (
    <>
      <HeaderTwo />
      <Banner pageTitle={'Generation Sequencing (NGS)'} pageImage={'/assets/img/banner/generation-sequencing-ngs.jpg'} />
      <GenerationSequencingNgsDetailsArea />
      <DirectContactUs />
      <Footer />
    </>
  );
};

export default GenerationSequencingNgsDetails;
