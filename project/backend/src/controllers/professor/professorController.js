import Professor from "../../types/professor"
import ProfessorRepository from "../../repository/professorRepository"
import ProfessorUseCase from "./professorUseCases"

class ProfessorController {
    constructor(ProfessorUseCase) {
        this.ProfessorUseCase = ProfessorUseCase
    }

    async create(req, res) {
        try {
            const professorData = await req.body
            const newProfessor = await this.ProfessorUseCase.create(req.body)
            res.status(201).json(newProfessor)
        } catch(err) {
            res.status(500).json({ error: err.message })
        }
    }
}

export default ProfessorController