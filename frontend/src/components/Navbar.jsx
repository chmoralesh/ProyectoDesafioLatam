import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import miles from "../utils/miles";

const total = 200000;
const token = false;

const Navbars = () => {
  return (
    <Navbar expand="lg" className="bg-dark sticky-top">
      <Container fluid>
        <Navbar.Brand className="text-white" href="#">
          Pizzería Mamma Mia!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Button className="rounded mx-2" variant="outline-light">
              🍕 Home
            </Button>
            <Button className="rounded mx-2" variant="outline-light">
              {token ? "🔓 Profile" : "🔐 Login"}
            </Button>
            <Button className="rounded mx-2" variant="outline-light">
              {token ? "🔓 Logout" : "🔐 Register"}
            </Button>
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-info">🛒 Total: ${miles(total)}</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
