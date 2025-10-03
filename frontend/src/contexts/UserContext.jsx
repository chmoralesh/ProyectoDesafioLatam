import { createContext, useState, useEffect, useContext } from "react";
import { TokenContext } from "./TokenContext";
import Swal from "sweetalert2";
//import { type } from "node:os";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  //States
  const [actualUser, setActualUser] = useState(null);
  const [actualToken, setActualToken] = useState(null);
  //Contexts

  const { setToken } = useContext(TokenContext);

  //Método para Login

  const handleLogin = async (e, email, password) => {
    e.preventDefault();
    const response = await fetch(`${apiUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("emailLogin", data.email);
      localStorage.setItem("tokenLogin", data.token);
      if (data.token !== null) {
        setToken(true);
      }

      setActualToken(data.token);
      setActualUser(data.email);
      Swal.fire({
        title: "Usuario ha ingresado correctamente",
        icon: "success",
        draggable: true,
      });
    } else {
      Swal.fire({
        title: "El usuario ingresado o contraseña no corresponde",
        icon: "error",
        draggable: true,
      });
    }
  };

  const handleRegister = async (e, email, password) => {
    e.preventDefault();
    const response = await fetch(`${apiUrl}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("tokenRegister", data.token);
      Swal.fire({
        title: "Usuario registrado correctamente",
        icon: "success",
        draggable: true,
      });
    } else {
      Swal.fire({
        title: "Ha ocurrido un error al registrar el usuario",
        icon: "error",
        draggable: true,
      });
    }
  };

  const emailValue = localStorage.getItem("emailLogin");
  useEffect(() => {
    setToken(emailValue ? true : false);
  }, [emailValue, setToken]);

  //Método Logout (como de deben borrar las 2 variables que se usan, se borra todo el localstorage)

  const logout = () => {
    localStorage.clear();
    setToken(false);
  };

  //Método profile

  const autoProfile = async () => {
    try {
      const response = await fetch(`${apiUrl}/auth/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${actualToken}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        //console.log("Esto viene: -->", data);
        return { email: data.email, name: data.name, type: data.type };
      } else {
        console.error("Error en la respuesta del servidor:", data);
        return "No ha iniciado sesión";
      }
    } catch (error) {
      console.error("Error en autoProfile:", error);
      return { error: "No se pudo conectar al servidor" };
    }
  };

  return (
    <UserContext.Provider
      value={{
        handleLogin,
        handleRegister,
        logout,
        autoProfile,
        actualToken,
        actualUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
