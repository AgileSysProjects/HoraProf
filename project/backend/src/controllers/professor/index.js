import ProfessorRepository from "../../repository/professorRepository"
import ProfessorUseCase from "./professorUseCases"
import ProfessorController from "./professorController"

const professorRepository = new ProfessorRepository()
const professorUseCase = new ProfessorUseCase(professorRepository)
const professorController = new ProfessorController(professorUseCase)

export default professorController