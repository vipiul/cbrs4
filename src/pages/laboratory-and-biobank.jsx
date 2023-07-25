import SEO from "@/components/seo";
import LaboratoryAndBiobankDetails from "@/components/services/service-details/laboratory-and-biobank-details";
import Wrapper from "@/layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Laboratory and Biobank Services" />
      <LaboratoryAndBiobankDetails />
    </Wrapper>
  );
};

export default index;
