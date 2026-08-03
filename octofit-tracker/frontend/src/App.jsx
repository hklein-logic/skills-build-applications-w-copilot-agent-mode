import './App.css'

function App() {
  return (
    <main className="container py-5">
      <section className="row align-items-center g-4">
        <div className="col-lg-7">
          <p className="text-primary fw-semibold mb-3">Octofit Tracker</p>
          <h1 className="display-4 fw-bold mb-3">Track workouts, connect with your crew, and stay motivated.</h1>
          <p className="lead text-muted mb-4">
            A modern fitness companion built with React 19 and Vite for fast, polished experiences.
          </p>
          <div className="d-flex gap-3">
            <a className="btn btn-primary btn-lg" href="#">Get started</a>
            <a className="btn btn-outline-secondary btn-lg" href="#">View features</a>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h2 className="h4 mb-3">Why teams love Octofit</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item px-0">Daily activity logging</li>
                <li className="list-group-item px-0">Friendly leaderboards</li>
                <li className="list-group-item px-0">Personalized workout suggestions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
