import SEO from "@/components/seo";
import BioinformaticsDetails from "@/components/services/service-details/bioinformatics-details";
import Wrapper from "@/layout/wrapper";
import React from "react";

const Bioinformatics = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Bioinformatics" />
      <BioinformaticsDetails />
    </Wrapper>
  );
};

export default Bioinformatics;
