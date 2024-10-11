import { Request, Response } from "express";
import {
  getAppointmentsServices,
  getAppointmentByIdServices,
  scheduleAppointmentServices,
  cancelAppointmentServices,
} from "./servicioTurnos";
import { Appointment } from "../../entities";

export const getAppointmentsController = async (
  req: Request,
  res: Response
) => {
  try {
    const turnos = await getAppointmentsServices();
    res.status(200).json(turnos);
  } catch (error) {
    res.status(404).json({ error: "No se encontraron turnos" });
  }
};

export const getAppointmentByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const idAppointment = Number(id);
    const turno: Appointment | string =
      await getAppointmentByIdServices(idAppointment);
    res.status(200).json(turno);
  } catch (error) {
    res.status(404).json({ error: "Turno no encontrado" });
  }
};

export const scheduleAppointmentController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id, date, time, asunto } = req.body;
    const userId: number = Number(id);
    const turnoAgendado: Appointment | string =
      await scheduleAppointmentServices({
        userId,
        date,
        time,
        asunto,
      });
    res.status(201).json(turnoAgendado);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const cancelAppointmentController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const respuesta: string = await cancelAppointmentServices(Number(id));
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(404).json({ error: "Error al cancelar el turno" });
  }
};
