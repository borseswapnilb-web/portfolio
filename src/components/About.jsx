import './About.css'

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p>
            I'm a frontend developer and computer science student with a strong
            interest in building accessible, user-focused web applications.
            I enjoy working at the intersection of design and engineering,
            turning clean interfaces into reliable, maintainable code.
          </p>
          <p>
            Currently pursuing my degree in Computer Science, where I've built
            a solid foundation in data structures, web development, and
            software engineering practices. Outside of coursework, I enjoy
            contributing to personal projects, exploring new frameworks, and
            sharpening my problem-solving skills.
          </p>
          <ul className="about-highlights">
            <li><strong>Focus:</strong> Frontend development &amp; UI engineering</li>
            <li><strong>Education:</strong> B.S. Computer Science (in progress)</li>
            <li><strong>Interests:</strong> Web accessibility, design systems, open source</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About