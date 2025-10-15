import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import catalogoRoutes from './routes/catalogoRoutes.js';

// 1. Inicializaciones
dotenv.config();
const app = express();

// 2. Middleware
app.use(cors());
app.use(express.json());

// 3. Rutas
app.use('/api/catalogo', catalogoRoutes);

// 4. Iniciar el servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log("Servidor corriendo por el puerto ${PORT}");
});