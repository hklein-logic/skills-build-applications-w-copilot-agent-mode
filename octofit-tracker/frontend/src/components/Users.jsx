import { useEffect, useState } from 'react'
import { fetchApi } from '../api.js'

function Users() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true

    fetchApi('users')
      .then((records) => {
        if (active) {
          setUsers(records)
          setError('')
        }
      })
      .catch((err) => {
        if (active) {
          setError(err.message)
          setUsers([])
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
      <h2 className="mb-4">Users</h2>
      {loading && <div className="alert alert-info">Loading users…</div>}
      {error && <div className="alert alert-danger">Unable to load users: {error}</div>}
      {!loading && !error && users.length === 0 && (
        <div className="alert alert-warning">No users found.</div>
      )}

      {users.length > 0 && (
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id ?? user.email ?? user.name}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default Users
