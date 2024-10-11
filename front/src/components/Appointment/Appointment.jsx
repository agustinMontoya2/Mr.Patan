import Style from "./Appointment.module.css";
import iconCancel from "../../assets/iconCancel.svg";
export const Appointment = ({ id, date, time, estado, asunto, fnCancel }) => {
  const handleClick = () => {
    const confirmed = window.confirm(
      `Queres cancelar el turno del dia ${date} a las ${time}?`
    );
    if (confirmed) fnCancel(id);
  };

  return (
    <div className={Style.Turno}>
      <div className={Style.Separador}>
        <h3>{date}</h3>
      </div>
      <div className={Style.Separador}>
        <h3>{time}</h3>
      </div>
      {estado === "pendiente" ? (
        <div className={Style.Separador}>
          <div className={Style.EstadoPendiente}>
            <h3>{estado}</h3>
          </div>
          <img
            src={iconCancel}
            alt="Cancelar"
            className={Style.Cancelar}
            onClick={handleClick}
          />
        </div>
      ) : (
        <div className={Style.Separador}>
          <div className={Style.EstadoCancelado}>
            <h3>{estado}</h3>
          </div>
        </div>
      )}
      <div className={Style.Separador}>
        <h3>{asunto}</h3>
      </div>
    </div>
  );
};
