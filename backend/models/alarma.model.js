import { readFile } from "node:fs/promises";

const getAlarmas = async () => {
  const data = await readFile("db/alarmas.json", "utf-8");
  return JSON.parse(data);
};

const getAlarma = async (id) => {
  const alarmas = await getAlarmas();
  return alarmas.find((alarma) => alarma.id === id.toUpperCase());
};

export const alarmaModel = {
  getAlarmas,
  getAlarma,
};
