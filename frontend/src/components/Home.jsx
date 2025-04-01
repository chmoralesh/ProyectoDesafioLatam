import Header from "./Header";
import CardPizza from "./CardPizza";
// Bootstrap

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";

const Home = () => {
  const [array, setArray] = useState([]);

  const callApi = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setArray(data);
    console.log(array);
  };

  useEffect(() => {
    try {
      callApi("http://localhost:5000/api/pizzas");
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Header />
      <div>
        <Container className="mt-3">
          <Row>
            {array.map((e) => (
              <Col key={e.id}>
                <CardPizza
                  name={e.name}
                  price={e.price}
                  ingredients={e.ingredients}
                  img={e.img}
                  id={e.id}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Home;
