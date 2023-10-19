import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import image1 from "../assets/images/nummer1.png";

const BigCardForMobile = ({ className, product }) => {
  const { mode } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const addToCartHandler = async (products, qty) => {
    dispatch(addToCart({ ...products, qty }));
  };
  const navigate = useNavigate();
  return (
    <div
      className={`d-flex justify-content-center align-items-center ${className} big-card-outside`}
      style={{ fontSize: "1rem", marginBottom: "5em" }}
    >
      <Link
        style={{ display: "inline-block", textDecoration: "none" }}
        to={`/product/${product._id}`}
      >
        <div
          className="p-4 big-card"
          style={{
            fontSize: "1em",
            maxWidth: "350px",
            borderRadius: "15%",
            backgroundColor: mode === "dark" ? "#23271A" : "#C0CAD5",
            height: "350px",
            overflow: "hidden",
            border: "1px solid #AEA379",
          }}
        >
          <img className="h-100 w-100" src={image1} alt="CardImage" />
        </div>
      </Link>
      <div
        className="font-change"
        style={{ margin: "0 3rem", flexBasis: "45%", fontSize: "0.8rem" }}
      >
        <Link
          style={{ display: "inline-block", textDecoration: "none" }}
          to={`/product/${product._id}`}
        >
          <h1
            className="font-change-title"
            style={{
              fontSize: "2em",
              fontWeight: 700,
              padding: 0,
              lineHeight: "1em",
            }}
          >
            {product.name}
          </h1>
        </Link>
        <ul>
          <li className="linh">{product.feature1}</li>
          <li className="linh">{product.feature2}</li>
          <li className="linh">{product.feature3}</li>
          <li className="linh">{product.feature4}</li>
        </ul>
        <div>
          <h6
            style={{
              fontSize: "1em",
              fontWeight: 700,
              lineHeight: "1.8em",
              margin: 0,
            }}
          >
            Waschhinweise:
          </h6>
          <p className="m0" style={{ fontSize: "1em", lineHeight: "1em" }}>
            {product.description}
          </p>
        </div>
        <h6
          style={{
            fontSize: "1em",
            fontWeight: 700,
            margin: 0,
            lineHeight: "1em",
          }}
        >
          Hinweis:
        </h6>
        <p className="m0" style={{ fontSize: "0.8em", fontWeight: 800 }}>
          {product.category}
        </p>
        <p
          className="m0"
          style={{
            textAlign: "center",
            fontSize: "2em",
            fontWeight: 700,
            lineHeight: "0.5em",
          }}
        >
          {product.price}€
        </p>
        <p
          className="m0"
          style={{ fontSize: "1em", fontWeight: 800, lineHeight: "1.1em" }}
        >
          {product.brand}
          {/* <span style={{ color: "#8E6E4C" }}>3D-Konfigurator</span> */}
        </p>
        <br />
        <div className="d-flex justify-content-center">
          {/* {product.countInStock > 0 ? ( */}
          <Button
            style={{
              padding: "0.45em 1.5em",
              marginTop: "0.6em",
              margin: "auto",
              fontSize: "1em",
              border: 0,
              borderRadius: "20px",
              color: "white",
              backgroundColor: mode === "dark" ? "#3B3C1B" : "#8E6E4C",
            }}
            onClick={() => navigate(`/product/${product._id}`)}
            // onClick={() => {
            //   addToCartHandler(product, product.qty ? product.qty + 1 : 1);
            // }}
          >
            Jetzt entwerfen
          </Button>
          {/* // ) : (
          //   <Button
          //     style={{
          //       padding: "0.45em 1.5em",
          //       marginTop: "0.6em",
          //       margin: "auto",
          //       fontSize: "1em",
          //       border: 0,
          //       borderRadius: "20px",
          //       color: "white",
          //       backgroundColor: mode === "dark" ? "#3B3C1B" : "#8E6E4C",
          //     }}
          //     disabled
          //   >
          //     Jetzt entwerfen
          //   </Button>
          // )} */}
        </div>
      </div>
    </div>
  );
};

export default BigCardForMobile;
