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
        try {
            const professores = await this.ProfessorUseCase.findAll()
            return res.status(201).json(professores)
        } catch(err) {
            res.status(500).json({ error: err.message })
        }
    }

    async update(req, res) {
        try {
            const professor = await this.ProfessorUseCase.update(req.body)
            return res.status(201).json(professor)
        } catch (err) {
            res.status(500).json({ error: err.message })
        }
    }
}

export default ProfessorController