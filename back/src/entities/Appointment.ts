import { Entity, ManyToOne } from "typeorm";
import { Column, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

export enum IEstado {
  CANCELLED = "cancelado",
  PENDING = "pendiente",
}

@Entity({ name: "appointments" })
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  date: string;
  @Column()
  time: string;
  @Column({
    type: "enum",
    enum: IEstado,
    default: IEstado.PENDING,
  })
  estado: IEstado;
  @Column()
  asunto: string;
  @ManyToOne(() => User, (user) => user.appointments)
  user: User;
}
