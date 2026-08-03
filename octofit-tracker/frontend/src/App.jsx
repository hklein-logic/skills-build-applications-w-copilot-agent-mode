import './App.css'
import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const apiHost = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/`
  : 'http://localhost:8000/api/'

function App() {
  return (
    <main className="container py-5">
      <div className="mb-4">
        <p className="text-primary fw-semibold mb-2">Octofit Tracker</p>
        <h1 className="display-5 fw-bold mb-3">Track workouts, connect with your crew, and stay motivated.</h1>
        <p className="lead text-muted mb-3">
          A modern fitness companion built with React 19, Vite, and a Codespaces-aware API host.
        </p>
        <div className="alert alert-secondary py-3">
          <strong>API base URL:</strong> <code>{apiHost}</code>
          <div className="small text-muted mt-1">
            Define <code>VITE_CODESPACE_NAME</code> in <code>.env.local</code> to use the Codespaces host.
          </div>
        </div>
      </div>

      <nav className="mb-4">
        <div className="nav nav-tabs">
          <NavLink className="nav-link" to="/users">
            Users
          </NavLink>
          <NavLink className="nav-link" to="/activities">
            Activities
          </NavLink>
          <NavLink className="nav-link" to="/workouts">
            Workouts
          </NavLink>
          <NavLink className="nav-link" to="/teams">
            Teams
          </NavLink>
          <NavLink className="nav-link" to="/leaderboard">
            Leaderboard
          </NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/users" replace />} />
        <Route path="/users" element={<Users />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="*" element={<div className="alert alert-warning">Page not found.</div>} />
      </Routes>
    </main>
  )
}

export default App
