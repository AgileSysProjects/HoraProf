import sequelize from "../database/index"

class ProfessorRepository {
    async create(professor) {
        await sequelize.models.Professor.create(professor)
    }

    async findAll() {
        const result = await sequelize.models.Professor.findAll()
        const professores = []
        result.forEach((prof) => {
            professores.push(prof)
        })
        return professores
    }

    async update(professor) {
        const result = await sequelize.models.Professor.update(professor, {
            where: {"id": "id"}
        })
        return result
    }
}

export default ProfessorRepository