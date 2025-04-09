import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Pagina404 = () => {
  return (
    <>
      <div
        className="d-flex flex-column text-center justify-content-center"
        style={{ minHeight: "85vh" }}
      >
        <h1>Error 404</h1>
        <span>La página no ha sido encontrada</span>
        <br />
        <Link to="/">
          <Button className="rounded mx-2" variant="outline-success">
            🍕 Home
          </Button>
        </Link>
      </div>
    </>
  );
};
