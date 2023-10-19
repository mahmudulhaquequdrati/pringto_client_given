import React from "react";
import { Col, Row } from "react-bootstrap";

const data = [];
const FAQTable = () => {
  return (
    <div
      className="px-2"
      style={{ textAlign: "center", marginBottom: "80px", marginTop: "80px" }}
    >
      <p
        style={{
          textAlign: "center",
          fontSize: "40px",
          color: "white",
          fontWeight: 400,
        }}
      >
        Vorteile
      </p>
      <Row style={{ margin: "auto" }} className="g-4">
        <Col
          className="faq-table-text"
          style={{
            padding: "8px 20px",
            margin: "8px",
            fontSize: "20px",
            backgroundColor: "#E0E0E0",
            borderRadius: "5px",
          }}
        >
          Besonderes Shoppingerlebnis mit dem 3D Konfigurator
        </Col>
        <Col
          className="faq-table-text"
          style={{
            padding: "8px 20px",
            margin: "8px",
            fontSize: "20px",
            backgroundColor: "#E0E0E0",
            borderRadius: "5px",
          }}
        >
          Schnelle Lieferung: von Produktion bis zur Lieferung 5-6 Tage
        </Col>
      </Row>
      <Row style={{ margin: "auto" }}>
        <Col
          className="faq-table-text"
          style={{
            padding: "8px 20px",
            margin: "8px",
            fontSize: "20px",
            backgroundColor: "#E0E0E0",
            borderRadius: "5px",
          }}
        >
          Individuelles und maßgeschneidertes Endprodukt
        </Col>
        <Col
          className="faq-table-text"
          style={{
            padding: "8px 20px",
            margin: "8px",
            fontSize: "20px",
            backgroundColor: "#E0E0E0",
            borderRadius: "5px",
          }}
        >
          Hautverträgliche Druckfarben - für Babys geeignet
        </Col>
      </Row>
      <Row style={{ margin: "auto" }}>
        <Col
          className="faq-table-text"
          style={{
            padding: "8px 20px",
            margin: "8px",
            fontSize: "20px",
            backgroundColor: "#E0E0E0",
            borderRadius: "5px",
          }}
        >
          Nachhaltig - 98% weniger Wasserverbrauch bei der Produktion
        </Col>
        <Col
          className="faq-table-text"
          style={{
            padding: "8px 20px",
            margin: "8px",
            fontSize: "20px",
            backgroundColor: "#E0E0E0",
            borderRadius: "5px",
          }}
        >
          Kein fast Fashion - keine Überproduktion
        </Col>
      </Row>
    </div>
  );
};

export default FAQTable;
