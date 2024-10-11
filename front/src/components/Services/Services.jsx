import { Link, useLocation } from "react-router-dom";
import Style from "./Services.module.css";
import { useNavigate } from "react-router-dom";

export const Services = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className={Style.Contenedor}>
      <div
        className={Style.Elemento}
        onClick={() => {
          navigate("/alimentos");
        }}
      >
        <h3>alimentos</h3>
      </div>
      <div
        className={Style.Elemento}
        onClick={() => {
          navigate("/ropa");
        }}
      >
        <h3>ropa</h3>
      </div>
      <div
        className={Style.Elemento}
        onClick={() => {
          navigate("/farmacia");
        }}
      >
        <h3>farmacia</h3>
      </div>
      <Link to=""></Link>
      <div className={Style.Elemento}>
        <h3>otros</h3>
      </div>
    </div>
  );
};
