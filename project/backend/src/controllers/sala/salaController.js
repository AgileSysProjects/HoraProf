class SalaController {
    constructor(SalaUseCase) {
        this.SalaUseCase = SalaUseCase
    }

    async create(req, res) {
        try {
            const newSala = await this.SalaUseCase.create(req.body)
            res.status(201).json(newSala)
        } catch(err) {
            res.status(500).json({ error: err.message })
        }
    }
}

export default SalaController