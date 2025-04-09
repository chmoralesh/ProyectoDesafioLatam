import Navbars from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Cart } from "./pages/Cart";
import { Pizza } from "./pages/Pizza";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Profile } from "./pages/Profile";
import { Pagina404 } from "./pages/404";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/p001" element={<Pizza />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Pagina404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
