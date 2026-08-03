import app from './app'

const port = Number(process.env.PORT || 8000)
const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db'

console.log(`MongoDB URI configured for ${mongoUri}`)

app.listen(port, '0.0.0.0', () => {
  console.log(`Backend listening on port ${port}`)
})
