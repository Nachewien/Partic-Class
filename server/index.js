// Import required modules
const express = require('express');         // Import express to create the server
const bodyParser = require('body-parser');  // Import body-parser to parse incoming request bodies
const cors = require('cors');               // Import routes
//const routes = require('/routes');         // Import routes from the routes directory


// Initialize the app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Define a basic route
app.get('/', (req, res) => {
    res.send('Welcome to the Node.js server!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// Endpoint para obtener todos los usuarios // posteriormente se moverá a un archivo de rutas
// const mysql = require('mysql'); // Import MySQL module  

// app.get('/usuarios', (req, res) => {
//   const sql = 'SELECT * FROM usuario';

//   db.query(sql, (err, results) => {
//     if (err) {
//       console.error('Error al ejecutar la consulta:', err);
//       res.status(500).json({ error: 'Error en la base de datos' });
//     } else {
//       res.json(results);
//     }
//   });
// });



// HOST     192.168.100.103
// PORT     3306 
// USERNAME root
// PASSWORD Michanchito1999

