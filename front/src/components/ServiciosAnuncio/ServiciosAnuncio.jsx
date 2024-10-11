import style from "./ServiciosAnuncio.module.css";
import iconPet from "../../assets/iconPet.svg";

export const ServiciosAnuncio = () => {
  return (
    <div className={style.ContenedorGeneral}>
      <div className={style.Contenedor}>
        <ul className={style.Lista}>
          <li>
            <img src={iconPet} className={style.Icono} />
            CONSULTORIO
          </li>
          <li>
            <img src={iconPet} className={style.Icono} />
            CIRUGIA
          </li>
          <li>
            <img src={iconPet} className={style.Icono} />
            ANALISIS CLINICOS
          </li>
          <li>
            <img src={iconPet} className={style.Icono} />
            CARDIOLOGIA / ECOGRAFIAS
          </li>
          <li>
            <img src={iconPet} className={style.Icono} />
            MEDICAMENTOS
          </li>
          <li>
            <img src={iconPet} className={style.Icono} />
            BAÑO Y PELUQUERIA
          </li>
        </ul>
      </div>
    </div>
  );
};
