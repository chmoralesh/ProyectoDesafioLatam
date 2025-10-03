import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export const Profile = () => {
  const { logout, autoProfile } = useContext(UserContext);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await autoProfile();
      if (!response.error) {
        setUser(response);
        //console.log(response.type);
      }
    };
    fetchProfile();
  }, [autoProfile]);

  return (
    <div className="container my-5">
      <Card>
        <Card.Header>Mi Perfil</Card.Header>
        <Card.Body>
          <Card.Title>
            {user ? `${user.email}` : "Cargando perfil..."}
          </Card.Title>
          <Card.Text>Página de prueba Hito N° 8</Card.Text>
          <NavLink to="/" onClick={logout}>
            <Button variant="primary">Cerrar Sesión</Button>
          </NavLink>
        </Card.Body>
      </Card>
    </div>
  );
};

// import React, { useContext, useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import { NavLink } from "react-router-dom";
// import { UserContext } from "../contexts/UserContext";

// export const Profile = () => {
//   const { logout, autoProfile } = useContext(UserContext);
//   const [email, setEmail] = useState("");

//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       const response = await autoProfile();
//       if (!response.error) {
//         setUser(response); // { email, name }
//       }
//     };
//     fetchProfile();
//   }, [autoProfile]);

//   return (
//     <div className="container my-5">
//       <Card>
//         <Card.Header>Mi Perfil</Card.Header>
//         <Card.Body>
//           <Card.Title>{user.email}</Card.Title>
//           <Card.Text>Página de prueba Hito N° 8</Card.Text>
//           <NavLink to="/" onClick={logout}>
//             <Button variant="primary">Cerrar Sesión</Button>
//           </NavLink>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };
