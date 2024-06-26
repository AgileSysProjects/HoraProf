class ProfessorController {
    constructor(ProfessorUseCase) {
        this.ProfessorUseCase = ProfessorUseCase
    }

    async create(req, res) {
        try {
            const newProfessor = await this.ProfessorUseCase.create(req.body)
            res.status(201).json(newProfessor)
        } catch(err) {
            res.status(500).json({ error: err.message })
        }
    }

    async findAll(req, res) {
        const professores = await this.ProfessorUseCase.findAll()
        return res.json(professores)
    }
}

export default ProfessorController