import SEO from "@/components/seo";
import TermsConditionsDetails from "@/components/services/service-details/terms-conditions-details";
import Wrapper from "@/layout/wrapper";
import React from "react";

const TermsConditions = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Terms And Conditions" />
      <TermsConditionsDetails />
    </Wrapper>
  );
};

export default TermsConditions;
