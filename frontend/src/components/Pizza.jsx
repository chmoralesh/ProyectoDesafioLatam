import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import miles from "../utils/miles";
import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Pizza = ({ id }) => {
  const [pizza, setPizza] = useState({});

  const callApi = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setPizza(data);
  };

  useEffect(() => {
    try {
      callApi("http://localhost:5000/api/pizzas/P001");
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <article
            className="d-flex justify-content-center mt-3"
            style={{ minWidth: "100%" }}
          >
            <Card className="mb-3 " style={{ width: "35%" }}>
              <Card.Img variant="top" src={pizza.img} />
              <Card.Body className="text-center">
                <Card.Title>Pizza {pizza.name}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush justify-content-center ">
                <ListGroup.Item>
                  <Container>
                    <Row>
                      <Col>
                        <h5>Ingredientes:</h5>
                        <ul>
                          {/* 🍕{" "} */}
                          {Array.isArray(pizza.ingredients)
                            ? pizza.ingredients.map((e, index) => (
                                <li className="" key={`${id}-${index}`}>
                                  {e}
                                </li>
                              ))
                            : "No especificados"}
                        </ul>
                      </Col>
                      <Col>
                        <h5>Descripción:</h5>
                        <p>{pizza.desc}</p>
                      </Col>
                    </Row>
                  </Container>
                </ListGroup.Item>
              </ListGroup>

              <Card.Body className="d-flex align-items-center flex-column">
                <Card.Title className="text-center">
                  Precio: $ {miles(pizza.price)}
                </Card.Title>
                <div className="d-flex justify-content-between align-items-center px-4 py-2">
                  <Button variant="dark">Añadir 🛒</Button>
                </div>
              </Card.Body>
            </Card>
          </article>
        </Col>
      </Row>
    </Container>
  );
};
