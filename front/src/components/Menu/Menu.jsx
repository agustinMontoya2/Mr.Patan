import Style from "./Menu.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import { clearUser } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import iconPet from "../../assets/iconPet.svg";
export const Menu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const idUsuario = useSelector((state) => state.usuario.id);

  return (
    <>
      {idUsuario ? (
        <Dropdown className={Style.Drop}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <img src={iconPet} className={Style.icon_pet} />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => {
                navigate("/cuenta");
              }}
            >
              Mi cuenta
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                dispatch(clearUser());
                navigate("/");
              }}
            >
              Cerrar sesion
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <img src={iconPet} className={Style.icon_pet} />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => {
                navigate("/");
              }}
            >
              Iniciar sesion
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                dispatch(clearUser());
                navigate("/registrarse");
              }}
            >
              Registrarse
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )}
    </>
  );
};
