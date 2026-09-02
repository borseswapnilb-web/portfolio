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

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I work with regularly.
        </p>
        <ul className="skills-grid">
          {skills.map((skill) => (
            <li key={skill.name} className="skill-card">
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-description">{skill.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills