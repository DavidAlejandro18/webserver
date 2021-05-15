const express = require('express');
const hbs = require('hbs');
const routes = require('../routes/routes');
const path = require("path");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.handlebars();

        this.middlewares();

        this.routes();
    }

    handlebars() {
        // Handlebars
        this.app.set('view engine', 'hbs');
        hbs.registerPartials(path.join(__dirname, "../",'/views/partials'));
    }

    middlewares() {
        /* MIDDLEWARE - SERVIR CONTENIDO ESTATICO */
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(routes);
    }

    listen() {
        this.app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '../', '/public/404.html'));
        });

        /* ENCENDER EL SERVIDOR */
        this.app.listen(this.port, (req, res) => {
            console.log(`Example app listening at http://localhost/${this.port}`);
        });
    }
}

module.exports = Server;
