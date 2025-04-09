import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import miles from "../utils/miles";
import { Link } from "react-router-dom";

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
            <Link to="/">
              <Button className="rounded mx-2" variant="outline-light">
                🍕 Home
              </Button>
            </Link>

            {token ? (
              <Link to="/login">
                <Button className="rounded mx-2" variant="outline-light">
                  🔓 Profile
                </Button>
              </Link>
            ) : (
              <Link to="/login">
                <Button className="rounded mx-2" variant="outline-light">
                  🔐 Login
                </Button>
              </Link>
            )}
            {/* Eliminar el siguiente operador ternario al habilitar variable token, agregado solo para cumplit hito 5 */}
            {token ? (
              <Link to="/login">
                <Button className="rounded mx-2" variant="outline-light">
                  🔓 Login
                </Button>
              </Link>
            ) : (
              <Link to="/profile">
                <Button className="rounded mx-2" variant="outline-light">
                  🔐 Profile
                </Button>
              </Link>
            )}
            {token ? (
              <Link to="/register">
                <Button className="rounded mx-2" variant="outline-light">
                  🔓 Logout
                </Button>
              </Link>
            ) : (
              <Link to="/register">
                <Button className="rounded mx-2" variant="outline-light">
                  🔐 Register
                </Button>
              </Link>
            )}
          </Nav>
          <Form className="d-flex">
            <Link to="/cart">
              <Button variant="outline-info">🛒 Total: ${miles(total)}</Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
