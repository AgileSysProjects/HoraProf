import sequelize from "../database/index"

class SalaRepository {
    async create(sala) {
        await sequelize.models.Sala.create(sala)
    }
}

export default SalaRepository