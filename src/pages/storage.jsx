import SEO from "@/components/seo";
import StorageDetails from "@/components/services/service-details/storage-details";
import Wrapper from "@/layout/wrapper";
import React from "react";

const Storage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Storage" />
      <StorageDetails />
    </Wrapper>
  );
};

export default Storage;
