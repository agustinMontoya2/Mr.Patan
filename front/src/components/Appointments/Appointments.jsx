import { useState, useEffect } from "react";
import axios from "axios";
import { Appointment } from "../Appointment/Appointment";
import Style from "./Appointments.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAppointments } from "../../redux/appointments.Slice";

export const Appointments = () => {
  const turnos = useSelector((state) => state.appointments || "todo mal");

  const usuario = useSelector((state) => state.usuario);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const consulta = async () => {
    try {
      const appointments = await axios(
        `http://localhost:3000/users/${usuario.id}`
      );
      console.log(appointments.data.appointments);

      dispatch(setAppointments(appointments.data.appointments));
    } catch (error) {
      console.log(error.message);
    }
  };
  const handlerCancel = async (id) => {
    const cancelar = await axios.put(
      `http://localhost:3000/appointments/cancel/${id}`
    );
    alert(cancelar.data);

    consulta();
  };
  useEffect(() => {
    if (!usuario.id) {
      navigate("/");
    }
    consulta();
  }, [usuario, dispatch]);

  return (
    <div className={Style.Contenedor}>
      <h2 className={Style.TituloTurnos}>Turnos</h2>
      <div className={Style.ContenedorTurnos}>
        <div className={Style.Descripciones}>
          <div className={Style.Separador}>
            <h3>Fecha</h3>
          </div>
          <div className={Style.Separador}>
            <h3>Hora</h3>
          </div>
          <div className={Style.Separador}>
            <h3>Estado</h3>
          </div>
          <div className={Style.Separador}>
            <h3>Asunto</h3>
          </div>
        </div>

        {!turnos.length ? (
          <h2 className={Style.Ningunturno}>
            Todavia no agendaste ningun turno{" "}
          </h2>
        ) : (
          turnos
            .slice()
            .sort((a, b) => a.id - b.id)
            .map((turno) => {
              return (
                <Appointment
                  key={turno.id}
                  id={turno.id}
                  date={turno.date}
                  time={turno.time}
                  asunto={turno.asunto}
                  estado={turno.estado}
                  fnCancel={handlerCancel}
                />
              );
            })
        )}
      </div>
      <button
        className={Style.Boton}
        onClick={() => {
          navigate("/agendar");
        }}
      >
        Agregar Turno
      </button>
    </div>
  );
};
