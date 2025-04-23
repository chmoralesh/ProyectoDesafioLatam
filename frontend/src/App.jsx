import Navbars from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Cart } from "./pages/Cart";
import { Pizza } from "./pages/Pizza";
import { Route, Routes } from "react-router-dom";
import { Profile } from "./pages/Profile";
import { Pagina404 } from "./pages/404";
import { useContext } from "react";
import { TokenContext } from "./contexts/TokenContext";

const App = () => {
  const { token } = useContext(TokenContext);
  return (
    <>
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={token ? <Home /> : <Register />} />
        <Route path="/login" element={token ? <Home /> : <Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:code" element={<Pizza />} />
        <Route path="/profile" element={token ? <Profile /> : <Login />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
