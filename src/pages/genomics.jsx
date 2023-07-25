import SEO from "@/components/seo";
import GenomicsDetails from "@/components/services/service-details/genomics-details";
import Wrapper from "@/layout/wrapper";
import React from "react";

const Genomics = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Genomics" />
      <GenomicsDetails />
    </Wrapper>
  );
};

export default Genomics;
