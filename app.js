const express = require('express'); //En esta variable requerimos el modulo de express
const app = express(); //Por medio de esta variable ejecutamos la función y almacenamos el objeto

const path = require('path'); // es variable requerimos el modulo de Node. Path unificas las rutas dentro de los SO
const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath)); // Define cual sera la carpeta que contenga los recursos estaticos del sitio

app.listen(3000, () =>{
	console.log('Servidor corriendo en el puerto 3000')
}); // A app le pedimos el metodo listen, que se encargará de levantar el servidor.


app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, './views/home.html'))
}); //Al objeto app.get, es enviar un archivo al navegador por medio de sendFile