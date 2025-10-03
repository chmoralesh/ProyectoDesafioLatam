import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import miles from "../utils/miles";
import { useContext, useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

export const Alarm = () => {
  const [alarma, setAlarma] = useState({});
  const { cart, setCart } = useContext(CartContext);
  const { code } = useParams();
  const idUp = code.toUpperCase();

  const callApi = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setAlarma(data);
  };

  useEffect(() => {
    if (code) {
      try {
        callApi(`http://localhost:5000/api/alarmas/${code}`);
      } catch (error) {
        console.log(error);
      }
    }
  }, [code]);

  const totalUp = () => {
    setCart(
      cart.map((item) =>
        item.id === idUp ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  return (
    <Container>
      <Row>
        <Col>
          <article
            className="d-flex justify-content-center mt-3"
            style={{ minWidth: "100%" }}
          >
            <Card className="mb-3 " style={{ width: "35%" }}>
              <Card.Img variant="top" src={alarma.img} />
              <Card.Body className="text-center">
                <Card.Title>alarma {alarma.name}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush justify-content-center ">
                <ListGroup.Item>
                  <Container>
                    <Row>
                      <Col>
                        <h5>Ingredientes:</h5>
                        <ul>
                          {/* 🍕{" "} */}
                          {Array.isArray(alarma.ingredients)
                            ? alarma.ingredients.map((e, index) => (
                                <li className="" key={`${code}-${index}`}>
                                  {e}
                                </li>
                              ))
                            : "No especificados"}
                        </ul>
                      </Col>
                      <Col>
                        <h5>Descripción:</h5>
                        <p>{alarma.desc}</p>
                      </Col>
                    </Row>
                  </Container>
                </ListGroup.Item>
              </ListGroup>

              <Card.Body className="d-flex align-items-center flex-column">
                <Card.Title className="text-center">
                  Precio: $ {miles(alarma.price)}
                </Card.Title>
                <div className="d-flex justify-content-between align-items-center px-4 py-2">
                  <Button onClick={() => totalUp()} variant="dark">
                    Añadir 🛒
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </article>
        </Col>
      </Row>
    </Container>
  );
};
