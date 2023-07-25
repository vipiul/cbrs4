import SEO from "@/components/seo";
import DigitalPathologyDetails from "@/components/services/service-details/digital-pathology-details";
import Wrapper from "@/layout/wrapper";
import React from "react";

const DigitalPathology = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Digital Pathology" />
      <DigitalPathologyDetails />
    </Wrapper>
  );
};

export default DigitalPathology;
