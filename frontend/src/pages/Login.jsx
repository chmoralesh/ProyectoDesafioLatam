import React, { useState } from "react";
import Swal from "sweetalert2";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  //estado para email
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  //estado para password 1
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);

  //funciones

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setErrorEmail(false);
  };
  const handleChangePass1 = (e) => {
    setPassword(e.target.value);
    setErrorPassword(false);
  };
  //alertas

  const handleSubmit = (e) => {
    e.preventDefault();

    //reset de estados
    let errorState = false;
    setErrorEmail(false);
    setErrorPassword(false);

    if (email === "") {
      setErrorEmail(true);
      errorState = true;
    }
    if (password.length < 6 || password === "") {
      setErrorPassword(true);
      errorState = true;
    }

    if (errorState) {
      Swal.fire({
        title: "Todos los campos son obligatorios",
        icon: "error",
        draggable: false,
      });
      return;
    }

    Swal.fire({
      title: "Usuario ha ingresado correctamente",
      icon: "success",
      draggable: true,
    });

    setErrorEmail(false);
    setErrorPassword(false);

    // limpiar después de enviar

    setEmail("");
    setPassword("");
  };

  return (
    <Form
      className="container pt-5"
      action="submit"
      onSubmit={(e) => handleSubmit(e)}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Dirección email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingrese su email"
          value={email}
          onChange={(e) => handleChangeEmail(e)}
        />
        <Form.Text className="text-muted">
          {errorEmail ? (
            <p className="text-danger">El email no puede estar vacio</p>
          ) : null}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword1">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingrese su contraseña"
          value={password}
          onChange={(e) => handleChangePass1(e)}
        />
        <Form.Text className="text-muted">
          {errorPassword ? (
            <p className="text-danger">
              La contraseña debe tener mas de 6 caracteres y no puede estar
              vacía
            </p>
          ) : null}
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
};

export default Login;
