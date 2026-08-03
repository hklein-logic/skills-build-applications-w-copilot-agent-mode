import express from 'express'
import healthRoutes from './routes/healthRoutes'
import apiRoutes from './routes/apiRoutes'

const app = express()

app.use(express.json())
app.use(healthRoutes)
app.use(apiRoutes)

export default app
