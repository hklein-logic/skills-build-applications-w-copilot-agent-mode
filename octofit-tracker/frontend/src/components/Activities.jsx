import { useEffect, useState } from 'react'
import { fetchApi } from '../api.js'

function Activities() {
  const [activities, setActivities] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true

    fetchApi('activities')
      .then((records) => {
        if (active) {
          setActivities(records)
          setError('')
        }
      })
      .catch((err) => {
        if (active) {
          setError(err.message)
          setActivities([])
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
      <h2 className="mb-4">Activities</h2>
      {loading && <div className="alert alert-info">Loading activities…</div>}
      {error && <div className="alert alert-danger">Unable to load activities: {error}</div>}
      {!loading && !error && activities.length === 0 && (
        <div className="alert alert-warning">No activities found.</div>
      )}

      {activities.length > 0 && (
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Type</th>
                <th>Duration</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity) => (
                <tr key={activity.id ?? activity.type ?? activity.date}>
                  <td>{activity.id}</td>
                  <td>{activity.type}</td>
                  <td>{activity.durationMinutes ?? activity.duration ?? '—'}</td>
                  <td>{activity.date ?? activity.createdAt ?? '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default Activities
