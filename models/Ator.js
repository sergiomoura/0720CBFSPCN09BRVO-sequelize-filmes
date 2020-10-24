module.exports = (sequelize, DataTypes) => {
    
    const ator = sequelize.define(
        "Ator",
        {
            // descrição das colunas
            nome: DataTypes.STRING,
            sobrenome: DataTypes.STRING,
            avaliacao: DataTypes.DECIMAL(3,1),
            filme_favorito_id: DataTypes.INTEGER
        },
        {
            // opções do model
            timestamps: false,
            tableName: 'atores'
        }
    )

    ator.associate = (models) =>{
        ator.belongsToMany(models.Filme,{
            as: 'filmes',
            through:'ator_filme',
            timestamps:false,
            foreignKey:'ator_id',
            otherKey:'filme_id'
            }
        );
    }
    
    return ator;
}