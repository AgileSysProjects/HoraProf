import { Router } from "express"

const router = Router()

router.get("/", (req, res) => {
    return res.json({ message: "Routes working!" })
})

export default router