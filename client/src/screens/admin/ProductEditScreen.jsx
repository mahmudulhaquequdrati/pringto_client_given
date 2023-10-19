import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Row, Col, Table, Form, Container } from "react-bootstrap";
import { FaTimes, FaEdit, FaTrash } from "react-icons/fa";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import FormContainer from "../../components/FormContainer";
import {
  useUpdateProductMutation,
  useGetProductDetailsQuery,
  useUploadProductImageMutation,
} from "../../slices/productsApiSlice";
import { useSelector, useDispatch } from "react-redux/";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductEditScreen = () => {
  const { id: productId } = useParams();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");
  const [feature1, setFeature1] = useState("");
  const [feature2, setFeature2] = useState("");
  const [feature3, setFeature3] = useState("");
  const [feature4, setFeature4] = useState("");

  const {
    data: product,
    isLoading,
    refetch,
    error,
  } = useGetProductDetailsQuery(productId);

  const [updateProduct, { isLoading: loadingUpdating }] =
    useUpdateProductMutation();

  const [uploadProductImage, { isLoading: loadingUpload }] =
    useUploadProductImageMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setImage(product.image);
      setBrand(product.brand);
      setCategory(product.category);
      setCountInStock(product.countInStock);
      setDescription(product.description);
      setFeature1(product.feature1);
      setFeature2(product.feature2);
      setFeature3(product.feature3);
      setFeature4(product.feature4);
    }
  }, [product]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const updatedProduct = {
      productId,
      name,
      price,
      image,
      brand,
      category,
      countInStock,
      description,
      feature1,
      feature2,
      feature3,
      feature4,
    };

    const result = await updateProduct(updatedProduct);
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success("Product updated");
      navigate("/admin/productlist");
    }
  };

  const uploadFileHandler = async (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    try {
      const res = await uploadProductImage(formData).unwrap();
      toast.success(res.message);
      setImage(res.image);
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  return (
    <Container>
      <Link
        to="/admin/productlist"
        style={{ display: "inline-block" }}
        className="my-3"
      >
        GO Back
      </Link>
      <FormContainer>
        <h2>Edit Product</h2>
        {loadingUpdating && <Loader />}
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>

            {/* image */}
            <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image url"
                value={image}
                onChange={(e) => setImage}
              ></Form.Control>

              <Form.Control
                type="file"
                label="Choose file"
                onChange={uploadFileHandler}
              ></Form.Control>
            </Form.Group>
            {loadingUpload && <Loader />}

            <Form.Group controlId="brand">
              <Form.Label>Short Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter short description"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="brand">
              <Form.Label>Feature 1</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter feature 1"
                value={feature1}
                onChange={(e) => setFeature1(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="brand">
              <Form.Label>Feature 2</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter feature 2"
                value={feature2}
                onChange={(e) => setFeature2(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="brand">
              <Form.Label>Feature 3</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter feature 3"
                value={feature3}
                onChange={(e) => setFeature3(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="brand">
              <Form.Label>Feature 4</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter feature 4"
                value={feature4}
                onChange={(e) => setFeature4(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="cetegory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter cetegory"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="countinstock">
              <Form.Label>CountInStock</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter countInStock"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" value="primary" className="my-2">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </Container>
  );
};

export default ProductEditScreen;
