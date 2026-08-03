import { useEffect, useState } from 'react'
import { fetchApi } from '../api.js'

function Teams() {
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true

    fetchApi('teams')
      .then((records) => {
        if (active) {
          setTeams(records)
          setError('')
        }
      })
      .catch((err) => {
        if (active) {
          setError(err.message)
          setTeams([])
        }
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [])

  const renderTeam = (team, index) => (
    <div key={team.id ?? index} className="card mb-3">
      <div className="card-body">
        <h3 className="h6 mb-2">{team.name ?? 'Team'}</h3>
        <p className="mb-1">
          <strong>Members:</strong> {team.members ?? team.memberCount ?? 'N/A'}
        </p>
        <p className="mb-0 text-muted">{team.description ?? team.notes ?? ''}</p>
      </div>
    </div>
  )

  return (
    <section>
      <h2 className="mb-4">Teams</h2>
      {loading && <div className="alert alert-info">Loading teams…</div>}
      {error && <div className="alert alert-danger">Unable to load teams: {error}</div>}
      {!loading && !error && teams.length === 0 && (
        <div className="alert alert-warning">No teams found.</div>
      )}

      {teams.length > 0 && teams.map(renderTeam)}
    </section>
  )
}

export default Teams
