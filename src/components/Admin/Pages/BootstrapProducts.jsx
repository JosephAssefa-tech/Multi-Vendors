import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { Table } from "react-bootstrap";
import FormikAddProducts from "./FormikAddProducts";
import { useProducts } from "../../../hooks/useProducts";

function BootstrapProducts() {
  const { data, isLoading, error } = useProducts();
  const navigate = useNavigate();
  const [show, setShow] = React.useState(false);

   if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Default Variant Small Size Theme Table</h3>
        <Button variant="primary" onClick={() => setShow(true)}>
          Add Product
        </Button>
      </div>

      <Table stripped bordered hover size="sm">
        <thead>
          <tr>
            <th width="200">Product Name</th>
            <th width="200">Category</th>
            <th width="200">Brand</th>
            <th width="200">Price</th>
            <th width="200">Stock</th>
            <th width="2000">Description</th>
          </tr>
        </thead>
        <tbody>
  {data?.map((product) => (
    <tr key={product.id}>
      <td>{product.productName}</td>
      <td>{product.category}</td>
      <td>{product.brand}</td>
      <td>{product.price}</td>
      <td>{product.stock}</td>
      <td>{product.description}</td>
    </tr>
  ))}
        </tbody>
      </Table>

      <h3>Dark Variant Small Size Table</h3>

      <Table stripped bordered hover variant="dark" size="sm">
        <thead>
          <tr>
            <th width="200">Product Name</th>
            <th width="200">Category</th>
            <th width="200">Brand</th>
            <th width="200">Price</th>
            <th width="200">Stock</th>
            <th width="2000">Description</th>
          </tr>
        </thead>
        <tbody>
   {data?.map((product) => (
    <tr key={product.id}>
      <td>{product.productName}</td>
      <td>{product.category}</td>
      <td>{product.brand}</td>
      <td>{product.price}</td>
      <td>{product.stock}</td>
      <td>{product.description}</td>
    </tr>
  ))}



        </tbody>
      </Table>

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <FormikAddProducts />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BootstrapProducts;
