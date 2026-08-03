export const getApiBaseUrl = (): string => {
  if (process.env.CODESPACE_NAME) {
    return `https://${process.env.CODESPACE_NAME}-8000.app.github.dev`
  }

  return process.env.API_BASE_URL || 'http://localhost:8000'
}
