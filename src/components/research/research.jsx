import FooterFour from "@/layout/footer/footer";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import ResearchArea from "./research-area";
import DirectContactUs from "../forms/direct-contact-us";
import Cta_Area from "../home/home/cta-area";

const Research = () => {
  return (
    <>
      <HeaderTwo />
      <Banner />
      <ResearchArea />
      <Cta_Area serviceTitle="Research Papers" />
      <DirectContactUs />
      <FooterFour />
    </>
  );
};

export default Research;
