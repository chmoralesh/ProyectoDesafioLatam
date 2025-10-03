import cors from "cors";
import "dotenv/config";
import express from "express";
//websockets
import { createServer } from "http";
import { Server } from "socket.io";

import authRoute from "./routes/auth.route.js";
import checkoutRoute from "./routes/checkout.route.js";
import alarmaRoute from "./routes/alarma.route.js";

import { readFileSync } from "fs";

const loadAlarmas = () => {
  return JSON.parse(
    readFileSync(new URL("./db/alarmas.json", import.meta.url))
  );
};

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/alarmas", alarmaRoute);
app.use("/api/checkouts", checkoutRoute);
app.use((_, res) => {
  res.status(404).json({ error: "Not Found" });
});
//websockets

// Crear servidor HTTP a partir de Express
const httpServer = createServer(app);

// Configurar Socket.IO
const io = new Server(httpServer, {
  cors: { origin: "http://localhost:5173" }, // <- React normalmente corre en 3000
});

io.on("connection", (socket) => {
  console.log("Cliente conectado:", socket.id);

  // Enviar datos iniciales
  socket.emit("updateAlarmas", loadAlarmas());
});

setInterval(() => {
  io.emit("updateAlarmas", loadAlarmas());
}, 1000);

const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port http://localhost:${PORT}`);
// });
httpServer.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
