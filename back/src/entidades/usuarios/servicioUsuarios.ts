import { createUserDto } from "../../interfaces.Dto/dto"; //* Dto
import userRepository from "../../repositories/userRepository"; //*Repositorios
import { Credential, User } from "../../entities/index"; //*entidades

import { AppDataSource } from "../../config/data-source";
import { createCredencialesService } from "../credenciales/servicioCredenciales";
import credentialRepository from "../../repositories/credentialRepository";

export const getUsersServices = async (): Promise<User[]> => {
  try {
    const usuariosArray: User[] = await userRepository.find({
      relations: { appointments: true },
    });
    return usuariosArray;
  } catch (error) {
    throw error;
  }
};

export const getUserByIdServices = async (
  idUser: number
): Promise<User | string> => {
  try {
    const usuario: User | null = await userRepository.findOne({
      where: { id: idUser },
      relations: { appointments: true },
    });
    if (!usuario) {
      throw new Error("Usuario no encontrado");
    }
    return usuario;
  } catch (error) {
    throw error;
  }
};

export const registerUsersServices = async (
  infoUsuario: createUserDto
): Promise<User> => {
  const queryRunner = AppDataSource.createQueryRunner();
  await queryRunner.connect();
  await queryRunner.startTransaction();
  try {
    const emailRepetido: User | null = await userRepository.findOne({
      where: { email: infoUsuario.email },
    });
    if (emailRepetido) throw "El email ya esta en uso";
    const usernameRepetido: Credential | null =
      await credentialRepository.findOne({
        where: { username: infoUsuario.username },
      });
    if (usernameRepetido) throw "El nombre de usuario ya esta en uso";
    const credencial: Credential = await createCredencialesService(
      queryRunner,
      infoUsuario.username,
      infoUsuario.password
    );
    const nuevoUsuario: User = await queryRunner.manager.create(
      User,
      infoUsuario
    );
    nuevoUsuario.credenciales = credencial;
    await queryRunner.manager.save(nuevoUsuario);

    await queryRunner.commitTransaction();
    return nuevoUsuario;
  } catch (error) {
    await queryRunner.rollbackTransaction();
    throw error;
  } finally {
    await queryRunner.release();
  }
};
