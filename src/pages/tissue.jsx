import SEO from "@/components/seo";
import TissueDetails from "@/components/services/service-details/tissue-details";
import Wrapper from "@/layout/wrapper";
import React from "react";

const Tissue = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Tissue" />
      <TissueDetails />
    </Wrapper>
  );
};

export default Tissue;
