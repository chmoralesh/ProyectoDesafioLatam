import Header from "../components/Header";
import CardAlarm from "../components/CardAlarm";
// Bootstrap

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState, useContext } from "react";
import "./Home.css";
import { WebSocketContext } from "../contexts/WebSocketProvider";

const Home = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const { data } = useContext(WebSocketContext);
  const [array, setArray] = useState([]);

  const callApi = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setArray(data);
  };

  useEffect(() => {
    try {
      callApi(`${apiUrl}/alarmas`);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const values = data.length > 0 ? data : array;

  // Definir el ancho de cada columna
  const alarmWidth = 2;

  return (
    <>
      <div>
        <div className="w-100 d-flex flex-column align-items-center text-white">
          <h2 className="mt-3">Resumen de Alarmas Generales</h2>
        </div>

        <Container fluid className="mt-3">
          <Container fluid className="mt-2">
            <Row>
              {/* Primera lista */}
              <Col md={alarmWidth}>
                <p className="group">Motor Principal</p>
                {values.map((e) =>
                  e.group === 1 ? (
                    <div key={e.id} className="mt-2">
                      <CardAlarm id={e.id} name={e.name} state={e.state} />
                    </div>
                  ) : (
                    ""
                  )
                )}
              </Col>

              {/* Segunda lista */}
              <Col md={alarmWidth}>
                <p className="group">Caja Reductora</p>
                {values.map((e) =>
                  e.group === 2 ? (
                    <div key={e.id} className="mt-2">
                      <CardAlarm id={e.id} name={e.name} state={e.state} />
                    </div>
                  ) : (
                    ""
                  )
                )}
              </Col>
              {/* Primera lista */}
              <Col md={alarmWidth}>
                <p className="group">Sistema Electrico</p>
                {values.map((e) =>
                  e.group === 3 ? (
                    <div key={e.id} className="mt-2">
                      <CardAlarm id={e.id} name={e.name} state={e.state} />
                    </div>
                  ) : (
                    ""
                  )
                )}
              </Col>

              {/* Segunda lista */}
              <Col md={alarmWidth}>
                <p className="group">Niveles de Estanques</p>
                {values.map((e) =>
                  e.group === 4 ? (
                    <div key={e.id} className="mt-2">
                      <CardAlarm id={e.id} name={e.name} state={e.state} />
                    </div>
                  ) : (
                    ""
                  )
                )}
              </Col>
              {/* Primera lista */}
              <Col md={alarmWidth}>
                <p className="group">Sentinas</p>
                {values.map((e) =>
                  e.group === 5 ? (
                    <div key={e.id} className="mt-2">
                      <CardAlarm id={e.id} name={e.name} state={e.state} />
                    </div>
                  ) : (
                    ""
                  )
                )}
              </Col>

              {/* Segunda lista */}
              <Col md={alarmWidth}>
                <p className="group">Miscelaneos</p>
                {values.map((e) =>
                  e.group === 6 ? (
                    <div key={e.id} className="mt-2">
                      <CardAlarm id={e.id} name={e.name} state={e.state} />
                    </div>
                  ) : (
                    ""
                  )
                )}
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </>
  );
};
export default Home;
