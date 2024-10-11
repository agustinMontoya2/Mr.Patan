import { Services } from "../../components/Services/Services";
import { CardVenta } from "../../components/CardVenta/CardVenta";
import Style from "./Farmacia.module.css";
import { medicamentosParaPerros } from "../../helpers/ventas.js";
import { useDispatch } from "react-redux";
import { agregarProducto } from "../../redux/carritoSlice.js";

export const Farmacia = () => {
  const dispatch = useDispatch();
  return (
    <div className={Style.Contenedor}>
      <Services />
      <div className={Style.Productos}>
        {medicamentosParaPerros.map((medicamento) => {
          const { id, nombre, precio, foto } = medicamento;
          return (
            <div className={Style.Producto} key={id}>
              <CardVenta key={id} nombre={nombre} precio={precio} foto={foto} />
              <button
                className={Style.Boton}
                onClick={() => {
                  dispatch(agregarProducto(medicamento));
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
