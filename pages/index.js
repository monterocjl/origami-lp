import { useRef } from "react";
import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner/Banner";
import PlantsTypes from "../components/PlantsTypes/PlantsTypes";
import Products from "../components/Products/Products";
import AboutUs from "../components/AboutUs/AboutUs";
import Contact from "../components/Contact/Contact";

export default function Home() {
  const contactRef = useRef()
  const aboutUsRef = useRef()
  

  return (
    <>
      <Layout contactRef={contactRef} aboutUsRef={aboutUsRef}>
        <Banner />
        <PlantsTypes />
        <Products />
        <AboutUs aboutUsRef={aboutUsRef} />
        <Contact contactRef={contactRef} />
      </Layout>
    </>
  );
}
