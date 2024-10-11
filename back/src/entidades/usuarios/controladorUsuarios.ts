import { Request, Response } from "express";
import {
  getUsersServices,
  getUserByIdServices,
  registerUsersServices,
} from "./servicioUsuarios"; //*servicios get y post

import { verificatePassword } from "../credenciales/servicioCredenciales"; //*servicios de validacion
import { User } from "../../entities/index";

export const getUsersController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const respuesta: User[] = await getUsersServices();
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(404).json(error);
  }
};
//todo
export const getUserByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const usuarioEncontrado: User | string = await getUserByIdServices(
      Number(id)
    );
    res.status(200).json(usuarioEncontrado);
  } catch (error) {
    res.status(404).json({ error: "Usuario no encontrado" });
  }
};
//todo
export const registerUsersController = async (req: Request, res: Response) => {
  try {
    const { name, nDni, email, username, password, birthdate } = req.body;

    const newUser: User = await registerUsersServices({
      name,
      email,
      nDni,
      birthdate,
      username,
      password,
    });
    res.status(201).json({ message: "Usuario registrado con exito" });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
export const loginUsersController = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const User: User = await verificatePassword(username, password);

    res.status(200).json({ login: true, User });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
