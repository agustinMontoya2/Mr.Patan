import { ScheduleForm } from "../../components/ScheduleForm/ScheduleForm";
import { Services } from "../../components/Services/Services";
import Style from "./ScheduleAppointment.module.css";
export const ScheduleAppointment = () => {
  return (
    <>
      <Services />
      <div className={Style.Contenedor}>
        <ScheduleForm />
      </div>
    </>
  );
};
