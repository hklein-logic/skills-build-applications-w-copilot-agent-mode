import app from './app'

const port = Number(process.env.PORT || 8000)
const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db'
const codespaceName = process.env.CODESPACE_NAME
const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : process.env.API_BASE_URL || 'http://localhost:8000'

console.log(`MongoDB URI configured for ${mongoUri}`)
console.log(`API base URL configured for ${apiBaseUrl}`)

app.listen(port, '0.0.0.0', () => {
  console.log(`Backend listening on port ${port}`)
})
