import style from "./NavBar.module.css";
import iconCross from "../../assets/iconCross.svg";
import iconoCarrito from "../../assets/iconoCarrito.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { elementosAgregados } from "../../redux/carritoSlice";
import { useSelector } from "react-redux";
import { Menu } from "../Menu/Menu";
export const NavBar = () => {
  const { pathname } = useLocation();
  const cantidadAgregada = useSelector(elementosAgregados);

  return (
    <div className={style.conteiner_general}>
      <div className={style.conteiner_title_navbar}>
        <img src={iconCross} className={style.icon_cross} />
        <h1 className={style.title_navbar}>Mr.Patan</h1>
      </div>
      {pathname === "/" || pathname === "/registrarse" ? null : (
        <div className={style.contenedorCarrito}>
          <Link to="/carrito">
            <img src={iconoCarrito} className={style.Cart}></img>
          </Link>
          <h4>{cantidadAgregada}</h4>

          <Menu />
        </div>
      )}
    </div>
  );
};
