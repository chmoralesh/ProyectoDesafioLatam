import headerImage from "../assets/img/Header.jpg";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="container-header">
        <img className="imgs" src={headerImage} alt="Fondo Pizzas" />
        <div className="title">
          <h1>¡Pizzería Mamma Mia!</h1>
          <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
        </div>
      </div>
    </>
  );
};

export default Header;
