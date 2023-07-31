import SEO from "@/components/seo";
import StemAndImmuneCellsDetails from "@/components/services/service-details/stem-and-immune-cells-details";
import Wrapper from "@/layout/wrapper";
import React from "react";

const StemAndImmuneCells = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Stem And Immune Cells" />
      <StemAndImmuneCellsDetails />
    </Wrapper>
  );
};

export default StemAndImmuneCells;
