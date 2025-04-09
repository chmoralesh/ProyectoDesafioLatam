import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Profile = () => {
  return (
    <div className="container my-5">
      <Card>
        <Card.Header>Mi Perfil</Card.Header>
        <Card.Body>
          <Card.Title>ch.moralesh@gmail.com</Card.Title>
          <Card.Text>Página de prueba Hito N° 5</Card.Text>
          <Button variant="primary">Cerrar Sesión</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
