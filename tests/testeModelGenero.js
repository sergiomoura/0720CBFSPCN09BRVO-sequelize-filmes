const { Genero } = require('../models');

(async () =>  {
    let generos = await Genero.findAll({include:'filmes'});
    console.log(generos.map(g => g.toJSON()));
    process.exit();
})();