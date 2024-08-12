import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  Col,
  CardTitle,
} from "reactstrap";
import { AppContext } from "../../AppContext";
import Swal from "sweetalert2";

export default function Product(props) {
  const { product } = props;
  const { addCart, addToCart, products } = useContext(AppContext);
  const handle_add = (id) => {
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    });
    addCart(id);
  };
  return (
    <Col lg={3} md={4} sm={6} xs={6} className="">
      <Card
        style={{
          width: "18rem",
          height:"99%"
        }}
      >
        <img alt="Sample" src={product.img} />
        <CardBody>
          <CardTitle tag="h5">{product.name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
          {product.des}
          </CardSubtitle>
          <CardText>
            <p>Price: ${product.price}</p>
            <Link to={`/detail/${product.id}`}>Chi tiết sản phẩm</Link>
          </CardText>
          <Button onClick={() => addToCart(product.id)}>Add to cart</Button>
        </CardBody>
      </Card>
    </Col>
  );
}
