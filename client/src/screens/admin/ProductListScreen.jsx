import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Button, Row, Col, Table, Container } from "react-bootstrap";
import { FaTimes, FaEdit, FaTrash } from "react-icons/fa";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import {
  useGetProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
} from "../../slices/productsApiSlice";
import { useSelector, useDispatch } from "react-redux/";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import Paginate from "../../components/Paginate";
const ProductListScreen = () => {
  const { pageNumber } = useParams();
  const { mode } = useSelector((state) => state.auth);

  const { data, isLoading, error, refetch } = useGetProductsQuery({
    pageNumber,
  });
  const [createProduct, { isLoading: loadingCreate }] =
    useCreateProductMutation();
  const [deleteProduct, { isLoading: loadingDelete }] =
    useDeleteProductMutation();

  const createProductHandler = async () => {
    if (window.confirm("Are you sure you want to create new product?")) {
      try {
        await createProduct();
        refetch();
      } catch (error) {
        toast.error(error?.data?.message || error.error);
      }
    }
  };

  const deleteHandler = async (id) => {
    if (window.confirm("are you sure?")) {
      try {
        await deleteProduct(id);
        refetch();
        toast.success("Product Deleted");
      } catch (error) {
        toast.error(error?.data?.message || error.error);
      }
    }
  };

  function truncateString(str, num) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  }

  return (
    <Container>
      <Row className="align-items-center">
        <Col>
          <h1 style={{ color: mode === "dark" && "white" }}>Products</h1>
        </Col>
        <Col className="text-end">
          <Button onClick={createProductHandler} className="btn-sm m-3">
            <FaEdit /> Create Products
          </Button>
        </Col>
      </Row>
      {loadingCreate && <Loader />}
      {loadingDelete && <Loader />}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Table striped hover responsive className="table-sm">
            <thead>
              <tr style={{ color: mode === "dark" && "white" }}>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>Short Description</th>
                <th>STOCK</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.product.map((productt) => (
                <tr key={productt._id}>
                  <td style={{ color: mode === "dark" && "white" }}>
                    {productt._id}
                  </td>
                  <td style={{ color: mode === "dark" && "white" }}>
                    {productt.name}
                  </td>
                  <td style={{ color: mode === "dark" && "white" }}>
                    {productt.price}
                  </td>
                  <td style={{ color: mode === "dark" && "white" }}>
                    {productt.category}
                  </td>
                  <td style={{ color: mode === "dark" && "white" }}>
                    {truncateString(productt.brand, 20)}
                  </td>
                  <td style={{ color: mode === "dark" && "white" }}>
                    {productt.countInStock}
                  </td>
                  <td>
                    <LinkContainer to={`/admin/product/${productt._id}/edit`}>
                      <Button variant="light" className="btn-sm mx-2">
                        <FaEdit color="green" /> Edit
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="light"
                      className="btn-sm mx-2"
                      onClick={() => deleteHandler(productt._id)}
                    >
                      <FaTrash color="red" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Paginate pages={data.pages} page={data.page} isAdmin={true} />
        </>
      )}
    </Container>
  );
};

export default ProductListScreen;
