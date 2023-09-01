import SEO from "@/components/seo";
import BiospecimensDetails from "@/components/services/service-details/biospecimens-details";
import Wrapper from "@/layout/wrapper";
import React from "react";

const Biospecimens = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Biospecimens" />
      <BiospecimensDetails />
    </Wrapper>
  );
};

export default Biospecimens;
