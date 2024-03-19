import Color from "../database/model/colores";

export const listarColores = async (req, res) => {
    try {
      const colores = await Color.find();
      res.status(200).json(colores);
    } catch (error) {
      console.log(error);
      res.status(404).json({
        mensaje: "no se pudo encontrar la lista de colores",
      });
    }
};

export const borrarTarea = async (req, res) => {
    try {
      const buscarColor = await Color.findById(req.params.id);
      if (!buscarColor) {
        return res
          .status(404)
          .json({ mensaje: "no se pudo borrar el color, el id es incorrecto" });
      }
      await Color.findByIdAndDelete(req.params.id);
      res.status(200).json({ mensage: "la el color fue borrado exitosamente" });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        mensaje: "ocurrio un error al querer intentar borrar el color",
      });
    }
};
  

export const crearColor = async (req, res) => {
    try {
      const colorNuevo = new Listas(req.body);
      await colorNuevo.save();
      res.status(201).json({
        mensaje: "el color fue creada correctamente",
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        mensaje: "No se pudo procesar la solicitud de crear un color",
      });
    }
}; 