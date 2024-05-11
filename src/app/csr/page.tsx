"use client";

import CSRData from "@/components/csr/CSRData";
import CSRHero from "@/components/csr/CSRHero";
import CSRHistory from "@/components/csr/CSRHistory";
import CSRKecharaDetails from "@/components/csr/CSRKecharaDetails";
import ContentWrapper from "@/components/global/ContentWrapper";
import Footer from "@/components/global/Footer";
import NavBar from "@/components/global/NavBar";

const CSRPage = () => {
  return (
    <>
      <NavBar defaultBlack />
      <ContentWrapper noMarginTop>
        <CSRHero />
        <CSRData />
        <CSRKecharaDetails />
        <CSRHistory />
      </ContentWrapper>
      <Footer />
    </>
  );
};

export default CSRPage;
