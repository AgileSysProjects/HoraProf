class SalaUseCase {
    constructor(salaRepository) {
        this.salaRepository = salaRepository
    }

    async create(salaData) {
        const sala = await this.salaRepository.create(salaData)
        return sala
    }
}

export default SalaUseCase