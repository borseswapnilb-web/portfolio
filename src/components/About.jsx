import './About.css'

const facts = [
  { label: 'Role', value: 'Frontend Developer' },
  { label: 'Education', value: 'B.S. Computer Science (in progress)' },
  { label: 'Core stack', value: 'React, JavaScript, CSS' },
  { label: 'Interests', value: 'Accessibility, design systems, open source' },
  { label: 'Approach', value: 'Mobile-first, performance-aware' },
]

function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="about-grid">
          <div className="about-intro">
            <span className="about-eyebrow">About</span>
            <h2 className="section-title about-title">A bit about me</h2>
            <p className="about-lead">
              I'm a frontend developer focused on the craft of building clear,
              accessible interfaces — the kind that hold up at every screen size
              and for every user.
            </p>
            <p className="about-body">
              I'm currently studying Computer Science and learning by shipping
              small but complete projects: design choices, structured CSS,
              sensible component boundaries, and a habit of opening the dev
              tools before reaching for a framework.
            </p>
          </div>

          <aside className="about-card" aria-label="At a glance">
            <h3 className="about-card-title">At a glance</h3>
            <dl className="about-facts">
              {facts.map((f) => (
                <div key={f.label} className="about-fact">
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default About