import SEO from "@/components/seo";
import HistopathologyDetails from "@/components/services/service-details/histopathology-details";
import Wrapper from "@/layout/wrapper";
import React from "react";

const Histopathology = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Histopathology" />
      <HistopathologyDetails />
    </Wrapper>
  );
};

export default Histopathology;
