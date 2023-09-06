import { Router } from "express"

const router = Router()

app.post('/', (req, res) => {
    res.send('CREATE POST /')
})

app.get('/:id?', (req, res) => { // so acontece quando existir a variavel
    // duas opções: listar todos ou apenas um
    res.send('CREATE POST /')
})


export default router