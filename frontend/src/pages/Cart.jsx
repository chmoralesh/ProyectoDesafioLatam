import React, { useContext } from "react";
import { Button, Card, Col, Form, Image } from "react-bootstrap";
import miles from "../utils/miles";
import { CartContext } from "../contexts/CartContext";
import TotalCalc from "../utils/TotalCalc";
import { TokenContext } from "../contexts/TokenContext";

export const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const { token } = useContext(TokenContext);

  const totalUp = (e) => {
    setCart(
      cart.map((item) =>
        item.id === e.id ? { ...item, count: item.count + 1 } : item
      )
    );
  };
  const totalDown = (e) => {
    setCart(
      cart.map((item) =>
        item.id === e.id
          ? item.count > 0
            ? { ...item, count: item.count - 1 }
            : { ...item }
          : item
      )
    );
  };

  return (
    <>
      <Card className="container mt-3">
        <Card.Header as="h5">Detalles de pedido:</Card.Header>
        <Card.Body>
          {cart.map((e) =>
            e.count > 0 ? (
              <Col key={e.id}>
                <Card className="d-flex flex-row align-items-center p-2 border-0">
                  <Image
                    src={e.img}
                    alt={e.name}
                    rounded
                    width="50"
                    height="50"
                  />
                  <div className="ms-2 flex-grow-1">
                    <h6 className="mb-0">{e.name}</h6>
                  </div>
                  <div className="me-2">
                    <strong>$ {miles(e.price * e.count)} </strong>
                  </div>
                  <div className="d-flex align-items-center">
                    <Button
                      variant="outline-danger"
                      className="px-2 py-1"
                      onClick={() => totalDown(e)}
                    >
                      -
                    </Button>
                    <Form.Control
                      type="text"
                      value={e.count}
                      className="text-center mx-2"
                      style={{ width: "40px" }}
                      readOnly
                    />
                    <Button
                      onClick={() => totalUp(e)}
                      variant="outline-primary"
                      className="px-2 py-1"
                    >
                      +
                    </Button>
                  </div>
                </Card>
              </Col>
            ) : (
              ""
            )
          )}

          <Card.Title as="h2" className="my-3">
            Total: ${miles(TotalCalc(cart))}
          </Card.Title>
          <Button variant="dark" disabled={!token}>
            Pagar
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};
