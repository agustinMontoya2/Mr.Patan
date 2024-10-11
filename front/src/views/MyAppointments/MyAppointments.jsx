import { Appointments } from "../../components/Appointments/Appointments";
import { Credentials } from "../../components/Credentials/Credentials";
import { Services } from "../../components/Services/Services";
import Style from "./MyAppointments.module.css";
import { useParams } from "react-router-dom";
export const MyAppointments = () => {
  const { id } = useParams();

  return (
    <div className={Style.conteiner}>
      <Services />
      <div className={Style.contenedorDerecha}>
        <Credentials id={id} />
        <Appointments id={id} />
      </div>
    </div>
  );
};
