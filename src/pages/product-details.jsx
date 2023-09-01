import Cta_Area from "@/components/home/home/cta-area";
import ProductDetails from "@/components/product-details";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Product Details" />
    <Cta_Area serviceTitle={'Product Details'} />
      <ProductDetails />
    </Wrapper>
  );
};

export default index;
