import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import miles from "../utils/miles";
import { NavLink } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { useContext, useEffect } from "react";
import TotalCalc from "../utils/TotalCalc";
import { TokenContext } from "../contexts/TokenContext";
import { UserContext } from "../contexts/UserContext";

const Navbars = () => {
  const { cart } = useContext(CartContext);
  const { logout } = useContext(UserContext);

  const { token } = useContext(TokenContext);
  useEffect(() => {}, [token]);

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
            <NavLink to="/">
              {({ isActive }) => (
                <Button
                  className={`rounded mx-2 ${
                    isActive ? "text-info border-info" : "text-white"
                  }`}
                  variant="outline-light"
                >
                  🍕 Home
                </Button>
              )}
            </NavLink>

            {token ? (
              <NavLink to="/profile">
                {({ isActive }) => (
                  <Button
                    className={`rounded mx-2 ${
                      isActive ? "text-info border-info" : "text-white"
                    }`}
                    variant="outline-light"
                  >
                    🔓 Profile
                  </Button>
                )}
              </NavLink>
            ) : (
              <NavLink to="/login">
                {({ isActive }) => (
                  <Button
                    className={`rounded mx-2 ${
                      isActive ? "text-info border-info" : "text-white"
                    }`}
                    variant="outline-light"
                  >
                    🔐 Login
                  </Button>
                )}
              </NavLink>
            )}

            {token ? (
              <NavLink to="/" onClick={logout}>
                <Button className="rounded mx-2" variant="outline-light">
                  🔓 Logout
                </Button>
              </NavLink>
            ) : (
              <NavLink to="/register">
                {({ isActive }) => (
                  <Button
                    className={`rounded mx-2 ${
                      isActive ? "text-info border-info" : "text-white"
                    }`}
                    variant="outline-light"
                  >
                    🔐 Register
                  </Button>
                )}
              </NavLink>
            )}
          </Nav>
          <Form className="d-flex">
            <NavLink to="/cart">
              {({ isActive }) => (
                <Button
                  className={`rounded mx-2 ${
                    isActive ? "text-info border-info" : "text-white"
                  }`}
                  variant="outline-light"
                >
                  🛒 Total: ${miles(TotalCalc(cart))}
                </Button>
              )}
            </NavLink>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
