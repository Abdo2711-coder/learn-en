import { motion } from "framer-motion";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { fadeIn } from "../helpers/Animation";

const SubHeader = ({ pageName = "" }) => {
  const { t } = useTranslation();
  const [state, setState] = useState("");
  const currentLanguageCode = Cookies.get("i18next") || "en";
  useEffect(
    (_) => {
      switch (pageName) {
        case "/":
          setState("Home");
          break;
        case "/collocations":
          setState("Collocations");
          break;

        // Admin
        case "/addCollocation":
          setState("Add Collocation");
          break;
        case "/updateCollocations":
          setState("Update Collocations");
          break;
        default:
          setState("404");
          break;
      }
    },
    [pageName]
  );
  return (
    <>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="iq-navbar-header"
        style={{ height: "145px" }}>
        <Container fluid className=" iq-container">
          <Row>
            <Col md="12">
              <p
                style={{
                  bottom: "1%", color: "gray", fontSize: "15px",
                  right: `${currentLanguageCode === "en" ? "15px" : "auto"}`,
                  left: `${currentLanguageCode === "en" ? "auto" : "15px"}`
                }}
                className="position-absolute">{`${new Date().toDateString()}`}</p>
              <div className="d-flex justify-content-between flex-wrap">
                <div>
                  <h1>{t(state)}</h1>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        {/* {{!-- rounded-bottom if not using animation --}} */}
        <div className="iq-header-img">
          <img
            src="/assets/images/top-header.jpg"
            alt="header"
            className="img-fluid w-100 h-100 animated-scaleX"
          />
        </div>
      </motion.div>
    </>
  );
};

export default SubHeader;
