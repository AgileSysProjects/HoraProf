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

    async findById(id) {
        const professor = await this.professorRepository.findById(id)
        return professor ? professor : null
    }

    async update(professorData, id) {
        const oldProfessor = await this.professorRepository.findById(id)
        const newProfessor = {
            id: oldProfessor.id,
            name: professorData.name,
            email: professorData.email,
            workTime: professorData.workTime 
        }

        const professor = await this.professorRepository.update(professorData, id)
        return professor
    }
}

export default ProfessorUseCase