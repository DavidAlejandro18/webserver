require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

/* MIDDLEWARE - SERVIR CONTENIDO ESTATICO */
app.use(express.static('public'));

/* RUTAS */
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'David',
        titulo: 'Curso de Node '
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'David',
        titulo: 'Curso de Node '
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'David',
        titulo: 'Curso de Node '
    });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html'); // <-------
});

/* ENCENDER EL SERVIDOR */
app.listen(port, (req, res) => {
    console.log(`Example app listening at http://localhost/${port}`);
});