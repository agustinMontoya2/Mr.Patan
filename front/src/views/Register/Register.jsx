import { RegisterUser } from "../../components/RegisterUser/RegisterUser";
import style from "./RegisterUser.module.css";

export const Register = () => {
  return (
    <div className={style.Contenedor}>
      <RegisterUser />
    </div>
  );
};
