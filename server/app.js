import express from 'express';

// const userRouter = require('./routes/userRouter')

import userRouter from './routes/userRouter.js';

const app = express()

app.use(express.json())

app.use('/users', userRouter)



const port = process.env.PORT ?? 5000

app.get('/', (req, res) => {
    return res.json({ 'test': 'test' })
})

app.listen(port, () => console.log(`Server runned on port:${port}`))