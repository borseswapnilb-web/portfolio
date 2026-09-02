import './Resume.css'

function Resume() {
  return (
    <section id="resume" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        <p className="section-subtitle">
          A summary of my education, experience, and skills. Download a copy
          or view it in your browser.
        </p>
        <div className="resume-actions">
          <a href="/resume.pdf" className="btn btn-primary" target="_blank" rel="noreferrer">
            View Resume
          </a>
          <a href="/resume.pdf" className="btn btn-secondary" download>
            Download Resume
          </a>
        </div>
        <p className="resume-note">
          Tip: place your <code>resume.pdf</code> file in the <code>public/</code> folder so it can be served at <code>/resume.pdf</code>.
        </p>
      </div>
    </section>
  )
}

export default Resume