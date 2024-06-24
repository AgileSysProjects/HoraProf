import { Router } from "express"

const router = Router()

router.get("/", (req, res) => {
    return response.json({ message: "Routes working!" })
})

export default router