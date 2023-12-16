import React from "react";
import home from "../images/glazier1.jpeg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Te așteptăm la"
        imgsrc={home}
        isCompName={true}
        compName="Costel Rame și Geamuri"
        visit="/services"
        btnname="Vezi serivciile noastre"
      />
    </>
  );
};

export default Home;
