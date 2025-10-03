import { useState, useEffect } from "react";

export default function RelojDigital() {
  const [fechaHora, setFechaHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setFechaHora(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  // Función para formatear fecha y hora
  const formatoFechaHora = (date) => {
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0"); // Mes empieza en 0
    const yyyy = date.getFullYear();

    const hh = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const ss = String(date.getSeconds()).padStart(2, "0");

    return `${dd}-${mm}-${yyyy}  ${hh}:${min}:${ss}`;
  };

  return (
    <div
      style={{ fontSize: "1.2rem", fontFamily: "monospace", color: "white" }}
    >
      {formatoFechaHora(fechaHora)}
    </div>
  );
}
