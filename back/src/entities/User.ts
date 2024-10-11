import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Credential, Appointment } from "./index";

@Entity({
  name: "users",
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    length: 60,
  })
  name: string;
  @Column({ unique: true })
  email: string;
  @Column({ nullable: true })
  birthdate?: string;
  @Column()
  nDni: string;
  @OneToOne(() => Credential)
  @JoinColumn()
  credenciales: Credential;
  @OneToMany(() => Appointment, (appointment) => appointment.user)
  appointments: Appointment[];
}
