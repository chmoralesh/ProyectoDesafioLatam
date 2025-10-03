import { createContext, useState, useEffect } from "react";
import { io } from "socket.io-client";

export const WebSocketContext = createContext();

const WebSocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Conectar usando socket.io-client
    const socketInstance = io("http://localhost:5000", {
      transports: ["websocket"], // fuerza solo WebSocket
    });

    socketInstance.on("connect", () => {
      console.log("🔌 Conectado a Socket.IO");
    });

    socketInstance.on("disconnect", () => {
      console.log("❌ Socket.IO desconectado");
    });

    socketInstance.on("updateAlarmas", (newData) => {
      //console.log("📡 Datos recibidos:", newData);
      setData(newData);
    });

    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  return (
    <WebSocketContext.Provider value={{ socket, data }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export default WebSocketProvider;

// import { createContext, useState, useEffect } from "react";

// export const WebSocketContext = createContext();

// const WebSocketProvider = ({ children }) => {
//   const [socket, setSocket] = useState(null);
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     // Conectar WebSocket (reemplaza con tu URL)
//     const ws = new WebSocket("ws://localhost:5000");

//     ws.onopen = () => {
//       console.log("🔌 Conectado al WebSocket");
//     };

//     ws.onmessage = (event) => {
//       const newData = JSON.parse(event.data);
//       setData(newData); // Actualiza el estado global
//     };

//     ws.onclose = () => {
//       console.log("❌ WebSocket cerrado");
//     };

//     setSocket(ws);

//     // Limpiar conexión al desmontar
//     return () => {
//       ws.close();
//     };
//   }, []);

//   return (
//     <WebSocketContext.Provider value={{ socket, data }}>
//       {children}
//     </WebSocketContext.Provider>
//   );
// };
// export default WebSocketProvider;
