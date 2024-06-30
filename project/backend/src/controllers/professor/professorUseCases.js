class ProfessorUseCase {
    constructor(professorRepository) {
        this.professorRepository = professorRepository
    }

    async create(professorData) {
        const professor = await this.professorRepository.create(professorData)
        return professor
    }

    async findAll() {
        const professores = await this.professorRepository.findAll()
        return professores
    }

    async update(professorData) {
        const professor = await this.professorRepository.update(professorData)
        return professor
    }
}

export default ProfessorUseCase