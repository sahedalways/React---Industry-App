import React from "react";
import About from "../../Components/About/About";
import Certification from "../../Components/Certification/Certification";
import Content from "../../Components/Content/Content";
import CopyrightFooter from "../../Components/CopyrightFooter/CopyrightFooter";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/Hero/Hero";
import Newsletter from "../../Components/Newsletter/Newsletter";
import ProductCategories from "../../Components/productCategories/ProductCategories";
import QuickLinks from "../../Components/QuickLinks/QuickLinks";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <QuickLinks />
      <Certification />
      <ProductCategories />
      <Content />
      <Newsletter />
      <Footer />
      <CopyrightFooter />
    </>
  );
};

export default Home;
