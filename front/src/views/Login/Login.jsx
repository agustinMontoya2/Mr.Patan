import { LoginUser } from "../../components/LoginUser/LoginUser";
import { ServiciosAnuncio } from "../../components/ServiciosAnuncio/ServiciosAnuncio";
import style from "./Login.module.css";

export const Login = () => {
  return (
    <>
      <div className={style.Contenedor}>
        <ServiciosAnuncio />
        <div className={style.ContenedorDerecha}>
          <LoginUser />
          <div className={style.ContenedorNumero}>
            <h2 className={style.Numero}>4958-3567</h2>
          </div>
        </div>
      </div>
    </>
  );
};
