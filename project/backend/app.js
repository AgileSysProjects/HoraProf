import sequelize from './src/database/index'
import express from 'express'
import dotenv from 'dotenv'
import app from "./src/config/index"

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