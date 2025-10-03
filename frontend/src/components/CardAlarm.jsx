import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";
import "./CardAlarm.css";
import { ColorStateAlarms } from "../utils/ColorStateAlarms";

const CardAlarm = ({ id, name, state }) => {
  const location = useLocation();

  return (
    <Link
      to={`/alarms/${id}`}
      state={{ backgroundLocation: location }}
      className={`w-100 no-decoration `}
    >
      <Button
        className={`d-flex text-left w-100 text-white border-format  ${
          state === 2 ? "blink-border" : ""
        }  `}
        variant={ColorStateAlarms(state).borderColor}
      >
        {" "}
        {name}{" "}
      </Button>
    </Link>
  );
};

export default CardAlarm;
