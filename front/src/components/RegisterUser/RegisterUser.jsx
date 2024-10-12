import style from "./RegisterUser.module.css";
import { useState } from "react";
import iconEye from "../../assets/iconEye.svg";
import iconClosedEye from "../../assets/iconClosedEye.svg";
import axios from "axios";
import validate from "../../helpers/validate";
import { Link, useNavigate } from "react-router-dom";

export const RegisterUser = () => {
  const AXIOS_URL = "https://mr-patan.onrender.com/users/register";
  const [mostrar, setMostrar] = useState(false);
  const changeState = () => {
    setMostrar(!mostrar);
  };

  const EstadoInicial = {
    email: "",
    name: "",
    username: "",
    password: "",
    verificate_password: "",
    Dni: "",
  };

  const [userData, setUserData] = useState(EstadoInicial);

  const [errores, setErrores] = useState({});

  const handleInputChange = (evento) => {
    const { name, value } = evento.target;
    setUserData({ ...userData, [name]: value });
    setErrores(validate({ ...userData, [name]: value }));
  };
  const navigate = useNavigate();
  const postData = async (email, name, username, password, nDni) => {
    try {
      const response = await axios.post(AXIOS_URL, {
        name,
        email,
        nDni,
        username,
        password,
      });
      const message = response.data.message;
      alert(message);
      setUserData(EstadoInicial);
      navigate("/");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        alert(`${error.response.data.error}`);
      } else {
        console.log(error);
        alert("Error desconocido al registrar el usuario");
      }
    }
  };

  const handleReset = (evento) => {
    evento.preventDefault();
    setUserData(EstadoInicial);
  };
  const handleSubmit = (evento) => {
    evento.preventDefault();
    const { email, name, username, password, verificate_password, Dni } =
      userData;
    if (
      !email ||
      !name ||
      !username ||
      !Dni ||
      !password ||
      !verificate_password
    )
      return alert("Todos los campos son obligatorios");
    if (password !== verificate_password)
      return alert("Las contraseñas deben coincidir");
    alert("Todos los datos fueron completados");
    console.log(errores);

    postData(email, name, username, password, Dni);
  };

  const inputs = [
    { name: "email", type: "email", label: "Email:" },
    { name: "name", id: "name", type: "text", label: "Nombre:" },
    {
      name: "username",
      id: "username",
      type: "text",
      label: "Nombre de usuario:",
    },
    { name: "Dni", id: "Dni", type: "text", label: "Numero de Dni:" },
  ];
  return (
    <form className={style.Formulario}>
      {inputs.map(({ label, name, type }) => (
        <div key={name} className={style.DivInput}>
          <label htmlFor={name} className={style.Titulo}>
            {label}
          </label>
          <input
            type={type}
            value={userData[name]}
            name={name}
            id={name}
            className={style.Input}
            onChange={handleInputChange}
          />
          {errores[name] && <p className={style.Error}>{errores[name]}</p>}
        </div>
      ))}

      <div className={style.DivInput}>
        <label className={style.Titulo}>Contraseña</label>
        <input
          type={mostrar ? "text" : "password"}
          value={userData.password}
          name="password"
          id="password"
          className={style.Input}
          onChange={handleInputChange}
        ></input>
        <p className={style.Error}>{errores.password && errores.password}</p>
      </div>
      <div className={style.MostrarContraseña}>
        <label className={style.Titulo}>Repetir contraseña</label>
        <div className={style.InputTitulo}>
          <input
            type={mostrar ? "text" : "password"}
            value={userData.verificate_password}
            name="verificate_password"
            id="verificate_password"
            className={style.Input}
            onChange={handleInputChange}
          />
          <img
            onClick={changeState}
            src={mostrar ? iconClosedEye : iconEye}
            className={style.Eye}
          />
        </div>
        <p className={style.Error}>{errores.verificate_password}</p>
      </div>

      <div className={style.Botones}>
        <button
          type="submit"
          className={style.Registrar}
          disabled={Object.keys(errores).some((e) => !userData[e])}
          onClick={handleSubmit}
        >
          Registrarse
        </button>
        <button
          type="reset"
          className={style.Iniciar}
          onClick={() => {
            navigate("/");
          }}
        >
          Iniciar sesion
        </button>
      </div>
    </form>
  );
};
