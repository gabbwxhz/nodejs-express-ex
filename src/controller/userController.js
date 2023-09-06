import { Router } from "express"

const router = Router()

// ? representa os usuarios
router.post('/signup', (req, res) => {
    res.send('SIGNUP /')
})

router.post('/login', (req, res) => {
    res.send('LOGIN /')
})

export default router