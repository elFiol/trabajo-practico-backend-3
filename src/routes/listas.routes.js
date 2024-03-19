import { Router } from "express";
import { borrarColor, crearColor, listarColores } from "../controller/listas.controller";

const Coloresrouter = Router();

Coloresrouter.route('/tareas').get(listarColores).post(crearColor);
Coloresrouter.route('/tarea/:id').delete(borrarColor);

export default Coloresrouter