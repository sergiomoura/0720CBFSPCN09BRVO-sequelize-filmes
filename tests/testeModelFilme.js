const { Filme } = require('../models');

(async () =>  {
    let filmes = await Filme.findAll({include:'genero'});
    console.log(filmes.map(f => f.toJSON()));
    process.exit();
})();