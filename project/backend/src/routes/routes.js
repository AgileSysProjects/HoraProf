import { Router } from "express"

import professorController from "../controllers/professor"

const router = Router()

router.get("/", (req, res) => {
    return res.json({ message: "Routes working!" })
})

router.get("/professor", (req, res) => professorController.findAll(req, res))
router.post("/professor", (req, res) => professorController.create(req, res))

export default router