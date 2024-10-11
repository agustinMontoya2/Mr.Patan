import { useSelector } from "react-redux";
import { Services } from "../../components/Services/Services";
import Style from "./Carrito.module.css";

export const Carrito = () => {
  const productosAgregados = useSelector((state) => state.carrito);
  let key = 0;
  return (
    <div className={Style.Contenedor}>
      <Services />
      <div>
        <div className={Style.Titulo}>
          <h1 className={Style.CarritoTitulo}>carrito</h1>
        </div>
        {!productosAgregados.length ? (
          <h1>Vacio</h1>
        ) : (
          <div className={Style.Productos}>
            {productosAgregados.map((producto) => (
              <div className={Style.Tarjeta} key={key++}>
                <img src={producto.foto} className={Style.Foto} />
                <h2>{producto.nombre}</h2>
                <h2>{producto.precio}</h2>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
