import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

const Common = ({ name, imgsrc, isCompName, compName, visit, btnname }) => {
  const [smallerThan650, setSmallerThan650] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setSmallerThan650(window.innerWidth < 650);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1
                    style={{
                      fontSize: smallerThan650 ? "1.5rem" : "2.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    {name}
                    {isCompName ? (
                      <strong className="brand-name"> {compName}</strong>
                    ) : (
                      ""
                    )}
                  </h1>
                  <h2
                    className="my-3"
                    style={{
                      fontSize: smallerThan650 ? "1.2rem" : "2.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    Ne ocupăm și cu vânzarea ușilor din lemn de brad
                  </h2>
                  <div className="mt-3">
                    <NavLink
                      to={visit}
                      className="btn-get-started"
                      style={{
                        fontSize: smallerThan650 ? "0.85rem" : "1.5rem",
                        padding: smallerThan650
                          ? "0.5rem 0.75rem"
                          : "0.5rem 1.5rem",
                      }}
                    >
                      {btnname}
                    </NavLink>
                  </div>
                  <div className="flex flex-column my-5 w-auto">
                    <div className="flex items-center">
                      <FaPhone
                        color="gray"
                        style={{ marginBottom: "10px", marginRight: "10px" }}
                        size={30}
                      />
                      <a style={{ fontSize: "30px" }} href="tel:+40771718931">
                        0771 718 931
                      </a>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "25px",
                        marginTop: "15px",
                      }}
                    >
                      <FaMapLocationDot
                        color="gray"
                        style={{ marginBottom: "12px", marginRight: "10px" }}
                        size={30}
                      />
                      <address>
                        <a
                          href="https://www.google.com/maps/place/Geamuri+Resita+Costel+Brisan/@45.3187373,21.8799736,17z/data=!3m1!4b1!4m6!3m5!1s0x474fd70743a06e8b:0x8b571224fdcbeb72!8m2!3d45.3187373!4d21.8799736!16s%2Fg%2F11vlyxv5f1?authuser=0&hl=ro&entry=ttu"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Bulevardul republicii 2, Resita, Zona Intim
                        </a>
                      </address>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-6 order-1 order-lg-2 header-image"
                  style={{
                    display: smallerThan650 ? "none" : undefined,
                  }}
                >
                  <img
                    src={imgsrc}
                    className="img-fluid animated"
                    alt="geamgiu resita"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
