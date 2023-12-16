import React from "react";
import home from "../images/glazier1.jpeg";
import Common from "./Common";
import BusinessInfo from "./Schema";

const Home = () => {
  return (
    <>
      <BusinessInfo />
      <Common
        name="Te așteptăm la"
        imgsrc={home}
        isCompName={true}
        compName="Costel Brișan Rame și Geamuri"
        visit="/services"
        btnname="Vezi serivciile noastre"
      />
    </>
  );
};

export default Home;
