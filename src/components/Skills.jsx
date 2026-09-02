import './Skills.css'

const skills = [
  { name: 'HTML', description: 'Semantic, accessible markup.' },
  { name: 'CSS', description: 'Layout, responsive design, modern features.' },
  { name: 'JavaScript', description: 'ES6+, async, DOM, fundamentals.' },
  { name: 'React', description: 'Components, hooks, state management.' },
  { name: 'Git', description: 'Version control, branching, workflows.' },
  { name: 'GitHub', description: 'Repos, pull requests, collaboration.' },
  { name: 'Responsive Design', description: 'Mobile-first, fluid layouts.' },
]

function initials(name) {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Skills</span>
          <h2 className="section-title">What I work with</h2>
          <p className="section-subtitle">
            A focused set of technologies I use to ship interfaces that are
            fast, accessible, and easy to maintain.
          </p>
        </div>

        <ul className="skills-grid" role="list">
          {skills.map((skill) => (
            <li key={skill.name} className="skill-card">
              <span className="skill-icon" aria-hidden="true">{initials(skill.name)}</span>
              <div className="skill-content">
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills