import { Model, DataTypes } from "sequelize"

class Turma extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            quantidade_alunos: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
        }, {
            sequelize,
            modelName: 'Turma'
        })
    }
    /*
    static associate(models) {
        this.belongsTo(models.Disciplina, { foreignKey: 'disciplinaId', as: 'disciplina' })
        this.belongsTo(models.Professor, { foreignKey: 'professorId', as: 'professor' })
        this.belongsTo(models.Sala, { foreignKey: 'salaId', as: 'sala' })
    }
    */
}

export default Turma