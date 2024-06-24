import { Sequelize } from 'sequelize'
import Disciplina from './models/disciplina.js'
import Professor from './models/professor.js'
import Sala from './models/sala.js'
import Turma from './models/turma.js'
import dotenv from 'dotenv'

dotenv.config()

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
})

//Disciplina.init(sequelize)
//Disciplina.sync({ alter: true })

//Professor.init(sequelize)
//Professor.sync({ alter: true })

//Sala.init(sequelize)
//Sala.sync({ alter: true })

//Turma.init(sequelize)
//Turma.sync({ alter: true })

export default sequelize
