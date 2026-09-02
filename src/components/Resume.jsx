import './Resume.css'

const summary =
  'Frontend developer with a Computer Science background, focused on building accessible, responsive interfaces. Comfortable across the full frontend stack — from semantic HTML and modern CSS to component-driven React applications.'

const highlights = [
  {
    label: 'Education',
    value: 'B.S. Computer Science',
    detail: 'Coursework in data structures, web development, software engineering, and HCI.',
  },
  {
    label: 'Technical Focus',
    value: 'Frontend & UI Engineering',
    detail: 'Accessible, responsive interfaces and design systems.',
  },
  {
    label: 'Core Skills',
    value: 'HTML, CSS, JavaScript, React',
    detail: 'Comfortable across modern tooling and component-driven UI work.',
  },
  {
    label: 'Workflow',
    value: 'Git · GitHub · Vite',
    detail: 'Branching, pull requests, code review, fast feedback loops.',
  },
]

function Resume() {
  return (
    <section id="resume" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Resume</span>
          <h2 className="section-title">A snapshot of my background</h2>
          <p className="section-subtitle">{summary}</p>
        </div>

        <div className="resume-card">
          <ol className="resume-highlights" aria-label="Resume highlights">
            {highlights.map((h, i) => (
              <li key={h.label} className="resume-highlight">
                <span className="resume-highlight-index" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="resume-highlight-body">
                  <span className="resume-highlight-label">{h.label}</span>
                  <span className="resume-highlight-value">{h.value}</span>
                  <span className="resume-highlight-detail">{h.detail}</span>
                </div>
              </li>
            ))}
          </ol>

          <div className="resume-actions">
            <a
              href=""
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>
            <a
              href=""
              className="btn btn-secondary btn-lg"
              download
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume