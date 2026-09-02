import projects from '../data/projects.js'
import './Projects.css'

function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Projects</span>
          <h2 className="section-title">Selected work</h2>
          <p className="section-subtitle">
            Three projects that show how I approach layout, state, and
            shipping something that feels finished.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card card">
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  width="640"
                  height="400"
                  loading="lazy"
                  decoding="async"
                  className="project-image"
                />
              </div>
              <div className="project-body">
                <p className="project-category">Featured project</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-tech" aria-label="Technologies used">
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="project-actions">
                  <a
                    href={project.github}
                    className="btn btn-ghost btn-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View code
                  </a>
                  <a
                    href={project.demo}
                    className="btn btn-primary btn-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects