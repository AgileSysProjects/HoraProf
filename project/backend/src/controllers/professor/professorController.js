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

    async findById(req, res) {
        try {
            const { id } = req.params
            const professor = await this.ProfessorUseCase.findById(id)
            return res.status(201).json(professor)
        } catch(err) {
            res.status(500).json({ error: err.message })
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params
            const professor = await this.ProfessorUseCase.update(req.body, id)
            return res.status(201).json(professor)
        } catch (err) {
            res.status(500).json({ error: err.message })
        }
    }
}

export default ProfessorController