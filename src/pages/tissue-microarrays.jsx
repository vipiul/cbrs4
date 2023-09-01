import SEO from "@/components/seo";
import TissueMicroarrayDetails from "@/components/services/service-details/tissue-microarrays-details";
import Wrapper from "@/layout/wrapper";
import React from "react";

const TissueMicroarray = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Tissue Microarray" />
      <TissueMicroarrayDetails />
    </Wrapper>
  );
};

export default TissueMicroarray;
