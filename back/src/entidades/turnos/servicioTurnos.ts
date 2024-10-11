import { IEstado } from "../../entities/Appointment"; //*modificador de estado

import { addAppointmentDto } from "../../interfaces.Dto/dto/addAppointmentDto"; //* dto

import userRepository from "../../repositories/userRepository";
import appointmentRepository from "../../repositories/appointmentRepository";
//*Repositorios

import { User, Appointment } from "../../entities/index"; //*entidades

export const getAppointmentsServices = async (): Promise<Appointment[]> => {
  try {
    const arrayTurnos: Appointment[] = await appointmentRepository.find({
      relations: { user: true },
    });
    if (arrayTurnos.length === 0) throw new Error();

    return arrayTurnos;
  } catch (error) {
    throw error;
  }
};

export const getAppointmentByIdServices = async (
  id: number
): Promise<Appointment | string> => {
  const turnoFiltrado: Appointment | null =
    await appointmentRepository.findOneBy({
      id,
    });
  if (!turnoFiltrado) throw new Error();
  return turnoFiltrado;
};

export const scheduleAppointmentServices = async (
  datosTurno: addAppointmentDto
): Promise<Appointment> => {
  try {
    const Usuario: User | null = await userRepository.findOneBy({
      id: datosTurno.userId,
    });
    if (!Usuario) {
      throw new Error("email no encontrado");
    }
    const nuevoTurno: Appointment = await appointmentRepository.create({
      date: datosTurno.date,
      time: datosTurno.time,
      asunto: datosTurno.asunto,
      user: Usuario,
      estado: IEstado.PENDING,
    });
    appointmentRepository.save(nuevoTurno);
    return nuevoTurno;
  } catch (error) {
    throw "no se pudo agendar el turno";
  }
};

export const cancelAppointmentServices = async (
  idTurno: number
): Promise<string> => {
  try {
    const turno: Appointment | null = await appointmentRepository.findOneBy({
      id: idTurno,
    });
    if (!turno) throw new Error("No se encontro ningun turno con ese ID");
    if (turno.estado === IEstado.CANCELLED) {
      throw new Error(
        "El turno que estás intentando cancelar ya fue cancelado"
      );
    }
    turno.estado = IEstado.CANCELLED;
    await appointmentRepository.save(turno);
    return `El turno fue cancelado`;
  } catch (error) {
    throw error;
  }
};
