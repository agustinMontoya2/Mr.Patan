import { useEffect, useState } from "react";
import style from "./LoginUser.module.css";
import axios from "axios";
import iconClosedEye from "../../assets/iconClosedEye.svg";
import iconEye from "../../assets/iconEye.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";

export const LoginUser = () => {
  // const APIURL = process.env.REACT_APP_SERVER_URL;
  // console.log(APIURL);
  // console.log(process.env);

  const dispatch = useDispatch();
  const [mostrar, setMostrar] = useState(false);
  const changeState = () => {
    setMostrar(!mostrar);
  };
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  let desactivar = true;
  if (userData.username && userData.password) {
    desactivar = false;
  }

  const handleChange = (evento) => {
    const { name, value } = evento.target;
    setUserData({ ...userData, [name]: value });
  };

  const postLogin = async (username, password) => {
    try {
      const user = await axios.post(
        "https://mr-patan.onrender.com/users/login",
        {
          username,
          password,
        }
      );
      alert("Bienvenido!");
      const usuario = user.data.User;
      dispatch(setUser(usuario));

      navigate(`/cuenta/`);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        alert(`${error.response.data.error}`);
      } else {
        alert("Error desconocido al iniciar sesion");
      }
    }
  };
  const handleSubmit = (evento) => {
    evento.preventDefault();
    postLogin(userData.username, userData.password);
  };
  return (
    <form className={style.Contenedor} onSubmit={handleSubmit}>
      <label className={style.Nombre}>Nombre</label>
      <input
        type="text"
        value={userData.username}
        name="username"
        id="username"
        onChange={handleChange}
        className={style.InputNombre}
      ></input>
      <label className={style.Contraseña}>Contraseña</label>
      <div className={style.ContraseñaOjo}>
        <input
          type={mostrar ? "text" : "password"}
          value={userData.password}
          name="password"
          id="password"
          onChange={handleChange}
          className={style.InputContraseña}
        ></input>
        <img
          onClick={changeState}
          src={mostrar ? iconClosedEye : iconEye}
          className={style.Eye}
        />
      </div>
      <button type="submit" className={style.Iniciar} disabled={desactivar}>
        Iniciar sesion
      </button>
      <button
        type="button"
        className={style.Registrar}
        onClick={() => {
          navigate("/registrarse");
        }}
      >
        Registrarse
      </button>
    </form>
  );
};
