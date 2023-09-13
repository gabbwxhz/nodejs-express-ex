import { Router } from "express"
import { verifyAccesToken } from "../../utils/auth"

const router = Router()

router.post('/', verifyAccesToken, (req, res) => {
    res.send('CREATE POST /')
})

router.get('/:id?', verifyAccesToken, (req, res) => { // so acontece quando existir a variavel
    // duas opções: listar todos ou apenas um
    res.send('CREATE POST /')
})


export default router