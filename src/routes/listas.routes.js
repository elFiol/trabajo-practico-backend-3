import { Router } from "express";

const Coloresrouter = Router();

Coloresrouter.route('/tareas').get().post();
Coloresrouter.route('/tarea/:id').delete();

export default Coloresrouter