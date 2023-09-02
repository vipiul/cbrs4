import DirectContactUs from "@/components/forms/direct-contact-us";
import Footer from "@/layout/footer/footer";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import StorageDetailsArea from "./storage-details-area";
import Cta_Area from "@/components/home/home/cta-area";
import ServiceArea from "../service/service-area";
import Specialists from "@/common/specialists";

const StorageDetails = () => {
  return (
    <>
      <HeaderTwo />
      <Banner pageTitle={'Storage in Data'} pageImage={'/assets/img/services/storageData.png'} />
      <StorageDetailsArea />
      <Cta_Area serviceTitle="Storage" />
      <DirectContactUs />
      <Footer />
    </>
  );
};

export default StorageDetails;
