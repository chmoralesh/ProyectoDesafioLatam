import React, { useContext, useEffect } from "react";
import { Button, Card, Col, Form, Image } from "react-bootstrap";
import miles from "../utils/miles";
import { CartContext } from "../contexts/CartContext";
import TotalCalc from "../utils/TotalCalc";
import { TokenContext } from "../contexts/TokenContext";
import { UserContext } from "../contexts/UserContext";
import Swal from "sweetalert2";

export const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const { token } = useContext(TokenContext);
  const { actualToken } = useContext(UserContext);

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
  const handlePayment = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/checkouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${actualToken}`,
      },
      body: JSON.stringify({ cart: "hola" }),
    });
    const data = await response.json();
    if (response.ok) {
      Swal.fire({
        title: "Compra realizada con éxito, carrito ha sido limpiado",
        icon: "success",
        draggable: true,
      });
      setCart(cart.map((item) => (item ? { ...item, count: 0 } : item)));
    } else {
      Swal.fire({
        title: "Error al procesar la compra",
        icon: "error",
        draggable: true,
      });
    }
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

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
          <Button
            onClick={(e) => handlePayment(e)}
            variant="dark"
            disabled={!token}
          >
            Pagar
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};
