import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";
import Footer from "@/layout/footer/footer";
import HeaderTwo from "@/layout/header/header-two";
import Appointment from "@/components/home/home/appointment";

const CollaborationQuery = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Bio fluids" />
      <HeaderTwo />
      <Appointment />
      <Footer />
    </Wrapper>
  )
}

export default CollaborationQuery
