import React, { useContext, useState } from "react";
import Swal from "sweetalert2";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { UserContext } from "../contexts/UserContext";

const Register = () => {
  const { handleRegister } = useContext(UserContext);
  //estado para email
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  //estado para password 1
  const [pass1, setPass1] = useState("");
  const [errorPass1, setErrorPass1] = useState(false);
  //estado para password 2
  const [pass2, setPass2] = useState("");
  const [errorPass2, setErrorPass2] = useState(false);

  //funciones

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setErrorEmail(false);
  };
  const handleChangePass1 = (e) => {
    setPass1(e.target.value);
    setErrorPass1(false);
  };
  const handleChangePass2 = (e) => {
    setPass2(e.target.value);
    setErrorPass2(false);
  };

  //alertas

  const handleSubmit = (e) => {
    e.preventDefault();

    //reset de estados
    let errorState = false;
    setErrorEmail(false);
    setErrorPass1(false);
    setErrorPass2(false);

    if (email === "") {
      setErrorEmail(true);
      errorState = true;
    }
    if (pass1.length < 6 || pass1 === "") {
      setErrorPass1(true);
      errorState = true;
    }
    if (pass2 != pass1 || pass2 === "") {
      setErrorPass2(true);
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

    handleRegister(e, email, pass1);

    // Swal.fire({
    //   title: "Usuario registrado correctamente",
    //   icon: "success",
    //   draggable: true,
    // });

    setErrorEmail(false);
    setErrorPass1(false);
    setErrorPass2(false);

    // limpiar después de enviar

    setEmail("");
    setPass1("");
    setPass2("");
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
          autoComplete="username"
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
          value={pass1}
          onChange={(e) => handleChangePass1(e)}
          autoComplete="new-password"
        />
        <Form.Text className="text-muted">
          {errorPass1 ? (
            <p className="text-danger">
              La contraseña debe tener mas de 6 caracteres y no puede estar
              vacía
            </p>
          ) : null}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword2">
        <Form.Label>Confirmar contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingrese su contraseña nuevamente"
          value={pass2}
          onChange={(e) => handleChangePass2(e)}
          autoComplete="new-password"
        />
        <Form.Text className="text-muted">
          {errorPass2 ? (
            <p className="text-danger">Las contraseñas no son iguales</p>
          ) : null}
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Registrar
      </Button>
    </Form>
  );
};

export default Register;
