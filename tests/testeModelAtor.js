const { Ator } = require('../models');

(async () =>  {
    let atores = await Ator.findByPk(30,{include:'filmes'});
    // console.log(atores.map(a => a.toJSON()));
    console.log(atores.toJSON());
    process.exit();
})();