import FooterFour from "@/layout/footer/footer";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import ResearchArea from "./research-area";
import DirectContactUs from "../forms/direct-contact-us";
import Blog from "../blog";

const Research = () => {
  return (
    <>
      <HeaderTwo />
      <Banner />
      <ResearchArea />
      <DirectContactUs />
      <FooterFour />
    </>
  );
};

export default Research;
