import SEO from "@/components/seo";
import ProteomicsDetails from "@/components/services/service-details/proteomics-details";
import Wrapper from "@/layout/wrapper";
import React from "react";

const Proteomics = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Proteomics" />
      <ProteomicsDetails />
    </Wrapper>
  );
};

export default Proteomics;
