import mysql from 'mysql2';
import dotenv from 'dotenv';

// Carga las variables de entorno del archivo .env
dotenv.config();

// Crea el objeto de conexión usando las variables de entorno
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Intenta conectar a la base de datos
db.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conectado correctamente a la base de datos MySQL');
});

// Exporta la conexión para que otros archivos puedan usarla
export default db;