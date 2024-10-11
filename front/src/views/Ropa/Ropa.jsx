import { Services } from "../../components/Services/Services";
import { CardVenta } from "../../components/CardVenta/CardVenta";
import Style from "./Ropa.module.css";
import { ropaParaPerros } from "../../helpers/ventas.js";
import { agregarProducto } from "../../redux/carritoSlice.js";
import { useDispatch } from "react-redux";

export const Ropa = () => {
  const dispatch = useDispatch();
  const agregarCarrito = () => {};
  return (
    <div className={Style.Contenedor}>
      <Services />
      <div className={Style.Productos}>
        {ropaParaPerros.map((ropaParaPerros) => {
          const { id, nombre, precio, foto } = ropaParaPerros;
          return (
            <div className={Style.Producto} key={id}>
              <CardVenta nombre={nombre} precio={precio} foto={foto} />
              <button
                className={Style.Boton}
                onClick={() => {
                  dispatch(agregarProducto(ropaParaPerros));
                }}
              >
                Agregar
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
