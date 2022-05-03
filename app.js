const express = require ('express')
const path = require('path')
const app = express();
const indexRoutes = require('./routes/indexRoutes')
const expressPort = 3030;

// Declarando templates engine
app.set('view engine', 'ejs');
// Declarando archivos publicos
app.use(express.static(path.resolve(__dirname, './public')))

// Levantando el servidor
app.listen(expressPort, () => {
  console.log('Servidor corriendo')
});

// Rutas
app.use(indexRoutes);

