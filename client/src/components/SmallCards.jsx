import React from "react";
import SmallCard from "./SmallCard";
import image from "../assets/icons/one .svg";
import image2 from "../assets/icons/TWO.svg";
import image3 from "../assets/icons/THREE.svg";
import image4 from "../assets/icons/FOUR.svg";
import { Col, Row } from "react-bootstrap";

const SmallCards = () => {
  const arr = [
    { image: image, text: "WIR DRUCKEN", link: "WIR DRUCKEN" },
    { image: image2, text: "WIR SCHNEIDEN", link: "WIR SCHNEIDEN" },
    { image: image3, text: "WIR NÄHEN", link: "WIR NÄHEN" },
    {
      image: image4,
      text: "WIR VERSENDEN SCHNELL",
      link: "WIR VERSENDEN SCHNELL",
    },
  ];
  return (
    <>
      <p
        className="font-16"
        style={{
          maxWidth: "900px",
          textAlign: "center",
          margin: "1rem auto",
          padding: "20px",
          color: "white",
          fontSize: "20px",
        }}
      >
        MIT UNSEREM 3D-KONFIGURATOR, KANNST DU JETZT EIN GANZ{" "}
        <span style={{ fontWeight: 700, color: "black" }}>INDIVIDUELLES</span>{" "}
        UND{" "}
        <span style={{ fontWeight: 700, color: "black" }}>
          MAßGESCHNEIDERTES
        </span>{" "}
        BEKLEIDUNGS,-UND HOMEARTIKEL DESIGNEN
      </p>
      <Row
        className="small-cards"
        style={{ marginTop: "1rem", padding: "0 2.5rem" }}
      >
        {arr.map((item, idx) => (
          <Col key={idx}>
            <SmallCard
              key={idx}
              image={item.image}
              title={item.text}
              link={item.link}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default SmallCards;
