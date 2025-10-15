import express from 'express';
import { obtenerProductos } from '../controllers/catalogoController.js';

//Creamos una instancia del enrutador de Express
const router = express.Router();

//Definimos el endpoint y lo asociamos con el controlador
router.get('/products', obtenerProductos);

//Exportamos el enrutador para usarlo en el servidor principal
export default router;