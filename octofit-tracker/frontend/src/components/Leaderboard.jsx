import { useEffect, useState } from 'react'
import { fetchApi } from '../api.js'

function Leaderboard() {
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true

    fetchApi('leaderboard')
      .then((records) => {
        if (active) {
          setEntries(records)
          setError('')
        }
      })
      .catch((err) => {
        if (active) {
          setError(err.message)
          setEntries([])
        }
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [])

  return (
    <section>
      <h2 className="mb-4">Leaderboard</h2>
      {loading && <div className="alert alert-info">Loading leaderboard…</div>}
      {error && <div className="alert alert-danger">Unable to load leaderboard: {error}</div>}
      {!loading && !error && entries.length === 0 && (
        <div className="alert alert-warning">No leaderboard entries found.</div>
      )}

      {entries.length > 0 && (
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, index) => (
                <tr key={entry.id ?? entry.name ?? index}>
                  <td>{entry.rank ?? index + 1}</td>
                  <td>{entry.name ?? entry.team ?? 'Unknown'}</td>
                  <td>{entry.score ?? entry.points ?? '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default Leaderboard
