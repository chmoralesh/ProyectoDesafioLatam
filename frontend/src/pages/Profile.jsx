import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export const Profile = () => {
  const { logout, autoProfile } = useContext(UserContext);
  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail(autoProfile());
  }, [autoProfile]);
  return (
    <div className="container my-5">
      <Card>
        <Card.Header>Mi Perfil</Card.Header>
        <Card.Body>
          <Card.Title>{email}</Card.Title>
          <Card.Text>Página de prueba Hito N° 8</Card.Text>
          <NavLink to="/" onClick={logout}>
            <Button variant="primary">Cerrar Sesión</Button>
          </NavLink>
        </Card.Body>
      </Card>
    </div>
  );
};
