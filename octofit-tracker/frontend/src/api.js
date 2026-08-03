const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const DEFAULT_API_HOST = 'http://localhost:8000'

export function getApiBaseUrl() {
  return codespaceName
    ? `https://${codespaceName}-8000.app.github.dev/api`
    : `${DEFAULT_API_HOST}/api`
}

export function getApiUrl(resource) {
  const safeResource = String(resource).replace(/^\/+/, '')
  return `${getApiBaseUrl()}/${safeResource}`
}

export function normalizeApiResponse(payload) {
  if (!payload) {
    return []
  }

  if (Array.isArray(payload)) {
    return payload
  }

  if (Array.isArray(payload.results)) {
    return payload.results
  }

  if (Array.isArray(payload.data)) {
    return payload.data
  }

  return []
}

export async function fetchApi(resource) {
  const url = getApiUrl(resource)
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`API request failed (${response.status})`)
  }

  const payload = await response.json()
  return normalizeApiResponse(payload)
}
