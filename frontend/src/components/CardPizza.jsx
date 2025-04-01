import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import miles from "../utils/miles";

const CardPizza = ({ name, price, ingredients, img, id }) => {
  return (
    <Card className="mb-3" style={{ width: "25rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Pizza {name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush justify-content-center">
        <ListGroup.Item className="text-center justify-content-center">
          <p>Ingredientes:</p>
          <ul>
            {/* 🍕{" "} */}
            {Array.isArray(ingredients)
              ? ingredients.map((e, index) => (
                  <li className="list-group-item" key={`${id}-${index}`}>
                    {e}
                  </li>
                ))
              : "No especificados"}
          </ul>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Title className="text-center">
          Precio: $ {miles(price)}
        </Card.Title>
        <div className="d-flex justify-content-between align-items-center px-4 py-2">
          <Button variant="outline-info"> Ver Más 👀</Button>
          <Button variant="dark">Añadir 🛒</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
