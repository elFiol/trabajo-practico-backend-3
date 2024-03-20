import { Router } from "express";
import { borrarColor, crearColor, editarColor, listarColores } from "../controller/colores.controller.js";

const Coloresrouter = Router();

Coloresrouter.route('/colores').get(listarColores).post(crearColor);
Coloresrouter.route('/color/:id').delete(borrarColor).put(editarColor);

export default Coloresrouter