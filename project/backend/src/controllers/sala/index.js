import SalaRepository from "../../repository/salaRepository"
import SalaUseCase from "./salaUseCases"
import SalaController from "./salaController"

const salaRepository = new SalaRepository()
const salaUseCase = new SalaUseCase(salaRepository)
const salaController = new SalaController(salaUseCase)

export default salaController