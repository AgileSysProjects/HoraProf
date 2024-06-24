import { Model, DataTypes } from 'sequelize'

class Sala extends Model {
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
            capacity: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        }, {
            sequelize,
            modelName: 'Sala'
        })
    }
}

export default Sala