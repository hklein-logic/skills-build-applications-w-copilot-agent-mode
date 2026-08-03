import express, { Request, Response } from 'express'

const app = express()
const port = process.env.PORT || 8000
const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db'

console.log(`MongoDB URI configured for ${mongoUri}`)

app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok' })
})

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`)
})
