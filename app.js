require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const routes = require('./routes/routes');

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

/* MIDDLEWARE - SERVIR CONTENIDO ESTATICO */
app.use(express.static('public'));

app.use(routes);

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html'); // <-------
});

/* ENCENDER EL SERVIDOR */
app.listen(port, (req, res) => {
    console.log(`Example app listening at http://localhost/${port}`);
});