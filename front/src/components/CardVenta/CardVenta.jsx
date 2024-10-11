import Style from "./CardVenta.module.css";
import iconoAgregar from "../../assets/iconoAgregar.svg";
import iconoRestar from "../../assets/iconoRestar.svg";
import { useState } from "react";

export const CardVenta = ({ nombre, precio, foto }) => {
  const [cantidad, setCantidad] = useState(1);
  let total = cantidad * precio;

  const aumentarCantidad = () => {
    setCantidad((prevCantidad) => prevCantidad + 1);
  };
  const restarCantidad = () => {
    if (cantidad > 0) {
      setCantidad((prevCantidad) => prevCantidad + -1);
    }

    console.log(cantidad);
  };
  return (
    <div className={Style.Tarjeta}>
      <img src={foto} className={Style.Foto}></img>
      <div className={Style.Cantidad}>
        <img
          src={iconoRestar}
          className={Style.Restar}
          onClick={restarCantidad}
        ></img>
        <div className={Style.ContenedorNomre}>
          <h2>{nombre}</h2>
        </div>
        <img
          src={iconoAgregar}
          className={Style.Agregar}
          onClick={aumentarCantidad}
        ></img>
      </div>
      <div className={Style.Total}>
        <h4 className={Style.CantidadNumero}>{cantidad}</h4>
        <h4>Precio total: {total}$</h4>
      </div>
    </div>
  );
};
