import { Services } from "../../components/Services/Services";
import { CardVenta } from "../../components/CardVenta/CardVenta";
import Style from "./Alimentos.module.css";
import { alimentos } from "../../helpers/ventas.js";
import { useDispatch } from "react-redux";
import { agregarProducto } from "../../redux/carritoSlice.js";
export const Alimentos = () => {
  const dispatch = useDispatch();
  return (
    <div className={Style.Contenedor}>
      <Services />
      <div className={Style.Productos}>
        {alimentos.map((alimento) => {
          const { id, nombre, precio, foto } = alimento;
          return (
            <div className={Style.Producto} key={id}>
              <CardVenta key={id} nombre={nombre} precio={precio} foto={foto} />
              <button
                className={Style.Boton}
                onClick={() => {
                  dispatch(agregarProducto(alimento));
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
