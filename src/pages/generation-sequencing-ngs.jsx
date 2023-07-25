import SEO from "@/components/seo";
import GenerationSequencingNgsDetails from "@/components/services/service-details/generation-sequencing-ngs-details";
import Wrapper from "@/layout/wrapper";
import React from "react";

const GenerationSequencingNgs = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Generation Sequencing (NGS)" />
      <GenerationSequencingNgsDetails />
    </Wrapper>
  );
};

export default GenerationSequencingNgs;
