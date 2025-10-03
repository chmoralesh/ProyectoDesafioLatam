import { alarmaModel } from "../models/alarma.model.js";

const readAlarmas = async (req, res) => {
  const alarma = await alarmaModel.getAlarmas();
  res.json(alarma);
};

const readAlarma = async (req, res) => {
  const { id } = req.params;
  const alarma = await alarmaModel.getAlarma(id.toLowerCase());
  if (!alarma) {
    return res.status(404).json({ message: "alarma not found" });
  }
  res.json(alarma);
};

export const alarmaController = {
  readAlarmas,
  readAlarma,
};
