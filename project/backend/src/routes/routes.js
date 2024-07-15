import { Router } from "express"

import professorController from "../controllers/professor"
import salaController from "../controllers/sala"

const router = Router()

router.get("/", (req, res) => {
    return res.json({ message: "Routes working!" })
})

router.post("/professor", (req, res) => professorController.create(req, res))
router.get("/professor", (req, res) => professorController.findAll(req, res))
router.get("/professor/:id", (req, res) => professorController.findById(req, res))
router.put("/professor/:id", (req, res) => professorController.update(req, res))

router.post("/sala", (req, res) => salaController.create(req, res))

export default router