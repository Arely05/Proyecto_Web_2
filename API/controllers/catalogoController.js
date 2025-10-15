import db from '../config/db.js';

//Esta función obtiene todos los productos de la base de datos
export const obtenerProductos = (req, res) => {
    
    //Definimos la consulta SQL que queremos ejecutar
    const sql = 'SELECT * FROM productos';

    //Usamos la conexión 'db' para ejecutar la consulta
    db.query(sql, (err, results) => {
        
        //Manejamos un posible error
        if (err) {
            console.error('Error al obtener los productos: ', err);
            return res.status(500).json({ error: 'Error interno del servidor al obtener los productos.' });
        }
        
        //Si todo sale bien, enviamos los resultados como respuesta
        res.json(results);
    });
};



