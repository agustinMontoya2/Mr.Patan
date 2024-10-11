import credentialRepository from "../../repositories/credentialRepository"; //*Repositorio
import { Credential, User } from "../../entities"; //*entidad
import userRepository from "../../repositories/userRepository";

export const createCredencialesService = async (
  queryrunner: any,
  username: string,
  password: string
): Promise<Credential> => {
  try {
    const newCredencial: Credential = await queryrunner.manager.create(
      Credential,
      {
        username,
        password,
      }
    );
    await queryrunner.manager.save(newCredencial);
    return newCredencial;
  } catch (error) {
    throw error;
  }
};

export const verificatePassword = async (
  username: string,
  password: string
): Promise<User> => {
  try {
    const credencialEncontrada: Credential | null =
      await credentialRepository.findOne({
        where: { username: username },
      });
    if (!credencialEncontrada) throw "Usuario no registrado";
    if (credencialEncontrada.password !== password)
      throw "La contraseña no coincide";
    const usuarioEncontrado: User | null = await userRepository.findOne({
      where: { credenciales: credencialEncontrada },
    });
    if (!usuarioEncontrado) throw new Error("no se encontro usuario");

    return usuarioEncontrado;
  } catch (error) {
    throw error;
  }
};
