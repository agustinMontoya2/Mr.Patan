import { AppDataSource } from "../config/data-source";
import { Appointment } from "../entities";

const appointmentRepository = AppDataSource.getRepository(Appointment);

export default appointmentRepository;
