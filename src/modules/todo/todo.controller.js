import { Router } from "express"

export const router = Router()

router.post('/todos', (request, response) => {
    response.send("Todo working")
})