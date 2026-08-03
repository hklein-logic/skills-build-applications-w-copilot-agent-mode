import { useEffect, useState } from 'react'
import { fetchApi } from '../api.js'

function Workouts() {
  const [workouts, setWorkouts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true

    fetchApi('workouts')
      .then((records) => {
        if (active) {
          setWorkouts(records)
          setError('')
        }
      })
      .catch((err) => {
        if (active) {
          setError(err.message)
          setWorkouts([])
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
      <h2 className="mb-4">Workouts</h2>
      {loading && <div className="alert alert-info">Loading workouts…</div>}
      {error && <div className="alert alert-danger">Unable to load workouts: {error}</div>}
      {!loading && !error && workouts.length === 0 && (
        <div className="alert alert-warning">No workouts found.</div>
      )}

      {workouts.length > 0 && (
        <div className="row row-cols-1 gy-3">
          {workouts.map((workout, index) => (
            <div key={workout.id ?? workout.title ?? index} className="col">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h3 className="h6 mb-2">{workout.title ?? workout.name ?? 'Workout'}</h3>
                  <p className="mb-1">
                    <strong>Type:</strong> {workout.type ?? workout.category ?? '—'}
                  </p>
                  <p className="mb-1">
                    <strong>Duration:</strong> {workout.duration ?? workout.durationMinutes ?? '—'} minutes
                  </p>
                  <p className="mb-0 text-muted">{workout.description ?? workout.notes ?? ''}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Workouts
