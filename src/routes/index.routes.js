import { Router } from "express";

import planetaRoutes from "./planetas.routes.js";

const routes = Router();

routes.get("/", (req, res) => {
  return res.status(200).send({ message: "SERVER ON" });
});

routes.use("/planetas", planetaRoutes);

export default routes;