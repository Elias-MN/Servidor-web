const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

const port = 3000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.use(express.static(__dirname + '/public'));

app.post('/', (req, res) => {
    res.send({ message: 'Respuesta del servidor, todo OK' });
});

app.listen(port, function () {
    console.log('Servidor web escuchando en el puerto 3000');
});
module.exports = app;
