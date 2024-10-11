import { useEffect, useState } from "react";
import Style from "./Credentials.module.css";
import axios from "axios";
import iconProfile from "../../assets/iconProfile.svg";
import { useDispatch } from "react-redux";
import { usuarioGlobal } from "../../redux/userSlice";
import { useSelector } from "react-redux";

export const Credentials = ({ id }) => {
  const usuario = useSelector((state) => state.usuario);

  const [credencial, setCredencial] = useState({});

  useEffect(() => {
    setCredencial(usuario);
  }, []);

  return (
    <div className={Style.Contenedor}>
      <div className={Style.Credenciales}>
        <h1>{credencial.name}</h1>
        <h2>{credencial.email}</h2>
        <h2>{credencial.nDni}</h2>
      </div>
      <img src={iconProfile} className={Style.Foto}></img>
    </div>
  );
};
