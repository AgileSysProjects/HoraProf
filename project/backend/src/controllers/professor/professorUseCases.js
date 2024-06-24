import Professor from "../../types/professor"

class ProfessorUseCase {
    constructor(professorRepository) {
        this.professorRepository = professorRepository
    }

    async create(professorData) {
        const professor = await this.professorRepository.create(professorData)
        return professor
    }
}

export default ProfessorUseCase