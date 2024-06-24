import { Model, DataTypes } from "sequelize"

class Professor extends Model {
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
            email: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            sequelize,
            modelName: 'Professor'
        })
    }

}

export default Professor
