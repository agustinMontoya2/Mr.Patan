import app from "./server";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";

import { PORT } from "./config/envs";

AppDataSource.initialize().then(() => {
  console.log("Conexion con la DB exitosa");
  app.listen(PORT, () => {
    console.log("servidor abierto en el puerto " + PORT);
  });
});
