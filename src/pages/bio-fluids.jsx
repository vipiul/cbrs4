import SEO from "@/components/seo";
import BiofluidsDetails from "@/components/services/service-details/bio-fluids-details";
import Wrapper from "@/layout/wrapper";
import React from "react";

const Biofluids = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Bio fluids" />
      <BiofluidsDetails />
    </Wrapper>
  );
};

export default Biofluids;
