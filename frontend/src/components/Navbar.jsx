import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import miles from "../utils/miles";
import { NavLink } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { useContext, useEffect, useState } from "react";
import TotalCalc from "../utils/TotalCalc";
import { TokenContext } from "../contexts/TokenContext";
import { UserContext } from "../contexts/UserContext";
import logoImage from "../assets/img/logo (2).png";
import RelojDigital from "../utils/RelojDigital";
import { Col, Row } from "react-bootstrap";
import "./Navbar.css";

const Navbars = () => {
  const { cart } = useContext(CartContext);
  const { logout, autoProfile } = useContext(UserContext);

  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await autoProfile();
      if (!response.error) {
        setUser(response);
        //console.log(typeof response.name);
      }
    };
    fetchProfile();
  }, [autoProfile]);
  //console.log(user.name);

  const { token } = useContext(TokenContext);
  useEffect(() => {}, [token]);

  return (
    <Navbar
      expand="lg"
      className="bg-dark sticky-top "
      style={{ height: "100px" }}
    >
      <Container fluid className="w-100">
        <Row className="w-100 justify-content-center align-items-center">
          <Col md={2} className="d-flex justify-content-center">
            <img
              style={{ height: "90px", width: "auto" }}
              className="imgs"
              src={logoImage}
              alt="Logo"
            />
          </Col>
          <Col md={6} className=" ">
            <Container fluid>
              <Row className=" ">
                <Col md={8} className="w-100 d-flex align-items-center">
                  <Row className="w-100">
                    <Col
                      md={2}
                      className=" d-flex justify-content-center align-items-center "
                    >
                      <NavLink to="/" className={"w-100"}>
                        {({ isActive }) => (
                          <Button
                            className={`rounded menu ${
                              isActive ? "text-info border-info" : "text-white"
                            }`}
                            variant="outline-light"
                          >
                            Inicio
                          </Button>
                        )}
                      </NavLink>
                    </Col>
                    <Col
                      md={2}
                      className=" d-flex justify-content-center align-items-center "
                    >
                      <NavLink to="/" className={"w-100"}>
                        {({ isActive }) => (
                          <Button
                            className={`rounded menu ${
                              isActive ? "text-info border-info" : "text-white"
                            }`}
                            variant="outline-light"
                          >
                            Motor Principal
                          </Button>
                        )}
                      </NavLink>
                    </Col>
                    <Col
                      md={2}
                      className=" d-flex justify-content-center align-items-center "
                    >
                      <NavLink to="/" className={"w-100"}>
                        {({ isActive }) => (
                          <Button
                            className={`rounded menu ${
                              isActive ? "text-info border-info" : "text-white"
                            }`}
                            variant="outline-light"
                          >
                            Menú disponible 1
                          </Button>
                        )}
                      </NavLink>
                    </Col>
                    <Col
                      md={2}
                      className=" d-flex justify-content-center align-items-center "
                    >
                      <NavLink to="/" className={"w-100"}>
                        {({ isActive }) => (
                          <Button
                            className={`rounded menu ${
                              isActive ? "text-info border-info" : "text-white"
                            }`}
                            variant="outline-light"
                          >
                            Menú disponible 2
                          </Button>
                        )}
                      </NavLink>
                    </Col>
                    <Col
                      md={4}
                      className=" d-flex justify-content-center align-items-center "
                    >
                      {token ? (
                        <NavLink to="/profile" className={"w-100"}>
                          {({ isActive }) => (
                            <Button
                              className={`rounded menu ${
                                isActive
                                  ? "text-info border-info"
                                  : "text-white"
                              }`}
                              variant="outline-success"
                            >
                              🔓 Usuario: {user.type ? user.type : ""}
                            </Button>
                          )}
                        </NavLink>
                      ) : (
                        <NavLink to="/login" className={"w-100"}>
                          {({ isActive }) => (
                            <Button
                              className={`rounded menu ${
                                isActive
                                  ? "text-info border-info"
                                  : "text-white"
                              }`}
                              variant="outline-light"
                            >
                              🔐 Login
                            </Button>
                          )}
                        </NavLink>
                      )}
                    </Col>
                    {/* <Col
                      md={2}
                      className=" d-flex justify-content-center align-items-center "
                    >
                      {token ? (
                        <NavLink to="/" onClick={logout} className={"w-100"}>
                          <Button
                            className="rounded menu border-3"
                            variant="outline-light"
                          >
                            🔓 Logout
                          </Button>
                        </NavLink>
                      ) : (
                        <NavLink to="/register" className={"w-100"}>
                          {({ isActive }) => (
                            <Button
                              className={`rounded menu ${
                                isActive
                                  ? "text-info border-info"
                                  : "text-white"
                              }`}
                              variant="outline-light"
                            >
                              🔐 Register
                            </Button>
                          )}
                        </NavLink>
                      )}
                    </Col> */}
                  </Row>
                </Col>

                {/* <Form className="d-flex">
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
          </Form> */}
              </Row>
            </Container>
          </Col>
          <Col md={4} className=" justify-content-center">
            <NavLink to="/cart" className={"w-100 "}>
              {({ isActive }) => (
                <Button
                  className={`w-100 rounded ${
                    isActive ? "text-info border-info" : "text-white"
                  }`}
                  variant="outline-light"
                >
                  <RelojDigital />
                  🛒 Total: ${miles(TotalCalc(cart))}
                </Button>
              )}
            </NavLink>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Navbars;
