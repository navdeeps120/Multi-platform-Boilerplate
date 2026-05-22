import './App.css'

function App() {
  return (
    <main className='app-shell'>
      <section className='hero-card panel'>
        <div className='hero-copy'>
          <p className='badge'>Multi-platform Starter</p>
          <h1 className='title'>Build once, launch on every screen</h1>
          <p className='subtitle'>
            React UI, Electron desktop shell, and Capacitor mobile builds in
            one project. A confident base for modern product teams.
          </p>

          <div className='action-row'>
            <button className='btn btn-primary' type='button'>
              Start Building
            </button>
            <button className='btn btn-secondary' type='button'>
              View Docs
            </button>
          </div>

          <div className='stats-row'>
            <div className='stat-pill'>
              <span className='stat-value'>1 Codebase</span>
              <span className='stat-label'>shared app logic</span>
            </div>
            <div className='stat-pill'>
              <span className='stat-value'>3 Platforms</span>
              <span className='stat-label'>web, desktop, mobile</span>
            </div>
            <div className='stat-pill'>
              <span className='stat-value'>Fast Refresh</span>
              <span className='stat-label'>during development</span>
            </div>
          </div>
        </div>

        <aside className='preview-frame'>
          <div className='window-bar'>
            <span />
            <span />
            <span />
          </div>
          <div className='preview-body'>
            <div className='preview-card primary'>
              <h3>Deployment Targets</h3>
              <p>Web, Windows, Android, iOS</p>
            </div>
            <div className='preview-split'>
              <div className='preview-card'>
                <h4>Dev URL</h4>
                <p>http://localhost:5173</p>
              </div>
              <div className='preview-card'>
                <h4>Status</h4>
                <p>Live reload active</p>
              </div>
            </div>
            <div className='preview-card muted'>
              <p>Ready for production hardening</p>
            </div>
          </div>
        </aside>
      </section>

      <section className='feature-grid'>
        <article className='feature-card panel'>
          <h2>Web</h2>
          <p>Lightning-fast feedback with Vite and modern React tooling.</p>
        </article>
        <article className='feature-card panel'>
          <h2>Desktop</h2>
          <p>Electron integration for native-feeling app distribution.</p>
        </article>
        <article className='feature-card panel'>
          <h2>Mobile</h2>
          <p>Capacitor bridge for Android and iOS from the same UI layer.</p>
        </article>
      </section>

      <section className='cta-strip panel'>
        <p>Ship faster with a single workflow across teams and platforms.</p>
        <button className='btn btn-primary' type='button'>
          Clone and Run
        </button>
      </section>
    </main>
  )
}

export default App
