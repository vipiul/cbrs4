import SEO from "@/components/seo";
import PrivacyPolicyDetails from "@/components/services/service-details/privacy-policy-details";
import Wrapper from "@/layout/wrapper";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Privacy Policy" />
      <PrivacyPolicyDetails />
    </Wrapper>
  );
};

export default PrivacyPolicy;
