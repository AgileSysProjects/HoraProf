import sequelize from './src/index.js'
import express from 'express'
import dotenv from 'dotenv'

const app = express()

dotenv.config()
const port = process.env.PORT || 3000

try {

    await sequelize.authenticate()
    await sequelize.sync()

    app.listen(port, () => {
        console.table({
            status: "Working",
            port: port,
            URL: `http://localhost:${port}`
        })
    })

} catch (error) {
    console.error("Unable to connect to the database:", error)
}