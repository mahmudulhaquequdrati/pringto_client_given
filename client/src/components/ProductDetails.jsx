import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/images/nummer1.png";
import image2 from "../assets/images/nummer2.png";
import image3 from "../assets/images/nummer3.png";
import { Carousel } from "react-bootstrap";
import videoSrc from "../assets/images/waving.mp4";

const ProductDetails = () => {
  const arr = [
    {
      details:
        "Mit unserem 3D-Konfigurator, kannst du jetzt ein ganz individuelles und maßgeschneidertes Bekleidungs,- und Homeartikel designen.",
      image: image1,
      link: "/shop",
    },
    // {
    //   details:
    //     "Mit unserem 3D-Konfigurator, kannst du jetzt ein ganz individuelles und maßgeschneidertes Bekleidungs,- und Homeartikel designen.",
    //   image: image2,
    //   link: "/shop",
    // },
    // {
    //   details:
    //     "Mit unserem 3D-Konfigurator, kannst du jetzt ein ganz individuelles und maßgeschneidertes Bekleidungs,- und Homeartikel designen.",
    //   image: image3,
    //   link: "/shop",
    // },
  ];
  return (
    <div
      className="hero  py-5"
      style={{
        padding: "0 40px",
        // height: "300px",
        fontSize: "1rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <video autoPlay loop muted playsInline className="background-video">
        <source src={videoSrc} type="video/mp4" />
      </video>
      <Carousel
        className="hero__carousel"
        indicators={false}
        controls={false}
        fade
      >
        {arr.map((item, idx) => (
          <Carousel.Item interval="1500" key={idx} className="c_inner">
            {/* <img className="hero__img" src={item.image} alt="HeroImage" /> */}

            <div className=" w-100 position-relative cr ">
              <div
                className="w-100 mx-auto sm-b-50 d-flex justify-content-center"
                style={{
                  flexBasis: "60%",
                  textAlign: "center",
                }}
              >
                <div
                  className="overflow-hidden hero__img__parent "
                  style={{ marginBottom: "15px" }}
                >
                  <img className="hero__img" src={item.image} alt="HeroImage" />
                </div>
              </div>
              <div className="d-flex justify-content-center ">
                <Link
                  className="text-uppercase hover-bg-red position-absolute shop_now_btn"
                  to={item.link}
                  style={{
                    fontSize: "1em",
                    borderRadius: "0.5em",
                    display: "inline-block",
                    padding: "0.375em 1.25em",
                    backgroundColor: "#872303",
                    color: "white",
                    textDecoration: "none",
                    bottom: "0%",
                    right: "28%",
                  }}
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </Carousel.Item>
        ))}
        ;
      </Carousel>
    </div>
  );
};

export default ProductDetails;
