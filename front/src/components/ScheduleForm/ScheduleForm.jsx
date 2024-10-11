import "bootstrap/dist/css/bootstrap.min.css";

import Style from "./ScheduleForm.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export const ScheduleForm = () => {
  const usuario = useSelector((state) => state.usuario);
  const navigate = useNavigate();

  const [appointmentData, setAppointmentData] = useState({
    asunto: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    if (!usuario.id) {
      navigate("/");
    }
  }, [usuario, navigate]);

  const agendar = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/appointments/schedule/",
        {
          id: usuario.id,
          date: appointmentData.date,
          time: appointmentData.time,
          asunto: appointmentData.asunto,
        }
      );
      const turno = response.data;
      alert(
        `Turno agendado el ${turno.date} a las ${turno.time} para el ${turno.asunto}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (evento) => {
    const { asunto, date, time } = appointmentData;
    evento.preventDefault();
    if (!asunto || !date || !time)
      return alert("Todos los datos son necesarios");

    // Verificar si el día seleccionado es sábado y si el horario es permitido
    const selectedDate = new Date(date);
    const dayOfWeek = selectedDate.getDay();

    if (dayOfWeek === 6 && !horariosSabado.includes(time)) {
      return alert("Los sábados solo se puede agendar en horarios permitidos.");
    }
    agendar();
    navigate("/cuenta");
  };

  const handleChange = (evento) => {
    const { name, value } = evento.target;
    setAppointmentData({ ...appointmentData, [name]: value });
  };

  const today = new Date();
  const twoWeeksLater = new Date();
  twoWeeksLater.setDate(today.getDate() + 13);

  // Convertir las fechas a formato YYYY-MM-DD
  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  const horariosSemana = [
    "09:30am",
    "10:00am",
    "10:30am",
    "11:00am",
    "11:30am",
    "12:00pm",
    "12:30pm",
    "13:00pm",
    "16:00pm",
    "16:30pm",
    "17:00pm",
    "17:30pm",
    "18:00pm",
    "18:30pm",
    "19:00pm",
    "19:30pm",
  ];

  const horariosSabado = [
    "10:00am",
    "10:30am",
    "11:00am",
    "11:30am",
    "12:00pm",
    "12:30pm",
  ];

  // Determinar horarios disponibles según el día seleccionado
  const selectedDate = new Date(appointmentData.date);
  const dayOfWeek = selectedDate.getDay();

  // Inicializar el arreglo de horarios disponibles
  let availableHorarios = horariosSemana;

  if (dayOfWeek === 6) {
    // Mostrar un mensaje de error si el día es domingo
    availableHorarios = [];
  } else if (dayOfWeek === 5) {
    // Usar horarios limitados si el día es sábado
    availableHorarios = horariosSabado;
  }

  return (
    <form className={Style.Formulario} onSubmit={handleSubmit}>
      <h2 className={Style.Titulo}>Agregar Turno</h2>
      <div className={Style.ContenedorFormulario}>
        <div className={Style.labelForm}>
          <label>Asunto:</label>
          <select
            id="asunto"
            name="asunto"
            value={appointmentData.asunto}
            className={Style.formSelectAsunto}
            onChange={handleChange}
          >
            <option></option>
            <option value="Baño">Baño</option>
            <option value="Baño y corte">Baño y corte</option>
            <option value="Consultorio">Consultorio</option>
          </select>
        </div>
      </div>
      <div className={Style.FechaHora}>
        <div className={Style.Separador}>
          <label>Fecha:</label>
          <input
            id="date"
            type="date"
            name="date"
            value={appointmentData.date}
            onChange={handleChange}
            className={Style.InputDate}
            min={formatDate(today)}
            max={formatDate(twoWeeksLater)}
          />
        </div>
        <div className={Style.Separador}>
          <label>Hora:</label>
          {dayOfWeek === 6 ? ( // Si es domingo, mostrar mensaje de error
            <div className={Style.Error}>No se aceptan turnos los domingos</div>
          ) : (
            <select
              id="time"
              name="time"
              value={appointmentData.time}
              onChange={handleChange}
              className={Style.InputFecha}
              disabled={!appointmentData.date} // Desactivar hasta seleccionar fecha
            >
              <option value="">Selecciona una hora</option>
              {availableHorarios.map((hora) => (
                <option value={hora} key={hora}>
                  {hora}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
      <div className={Style.DivBoton}>
        <button variant="success" className={Style.Boton}>
          Agendar
        </button>{" "}
        <Link to="/cuenta">
          <button variant="success" className={Style.BotonCancelar}>
            Cancelar
          </button>
        </Link>
      </div>
    </form>
  );
};
