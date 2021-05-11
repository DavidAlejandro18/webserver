const { Router } = require('express');
const router = Router();

/* RUTAS */
router.get('/', (req, res) => {
    res.render('home', {
        nombre: 'David',
        titulo: 'Curso de Node '
    });
});

router.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'David',
        titulo: 'Curso de Node '
    });
});

router.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'David',
        titulo: 'Curso de Node '
    });
});

module.exports = router;