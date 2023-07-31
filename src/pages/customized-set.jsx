import SEO from "@/components/seo";
import CustomizedSetDetails from "@/components/services/service-details/customized-set-details";
import Wrapper from "@/layout/wrapper";
import React from "react";

const CustomizedSet = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Customized Set" />
      <CustomizedSetDetails />
    </Wrapper>
  );
};

export default CustomizedSet;
