import { NextFunction, Request, Response } from "express";

export const validateUserData = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, nDni, username, password } = req.body;
  console.log("pasando por middleware validateUserData");

  if (!name || !email || !nDni || !username || !password) {
    return res.status(400).json({ error: "Todos los campos son requeridos" });
  }

  // Continúa al siguiente middleware o controlador
  next();
};

export const validateAppointmentData = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id, date, time, asunto } = req.body;
  console.log("pasando por middleware");

  if (!id || !date || !time || !asunto) {
    return res.status(400).json({ error: "Todos los campos son requeridos" });
  }
  next();
};

export const validateLoginData = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password } = req.body;
  console.log("pasando por middleware");

  if (!username || !password) {
    return res.status(400).json({ error: "Todos los campos son requeridos" });
  }
  next();
};
