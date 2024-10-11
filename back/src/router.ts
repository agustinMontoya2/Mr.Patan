import { Router } from "express";

import rutasUsuarios from "./entidades/usuarios/rutasUsuarios";
import rutasTurnos from "./entidades/turnos/rutasTurnos";

const router = Router();

router.get("/", (req, res) => {
  res.send(`Bienvenido a Mr.Patan! 
        Podes usar /users para ir a la seccion de usuarios
        O sino podes usar /appointment para ir a la seccion de turnos`);
});

router.use("/users", rutasUsuarios);
router.use("/appointments", rutasTurnos);

export default router;
