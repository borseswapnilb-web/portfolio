import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <p className="hero-eyebrow">Hello, I'm</p>
        <h1 className="hero-name">Your Name</h1>
        <h2 className="hero-role">Frontend Developer</h2>
        <p className="hero-intro">
          I build clean, responsive, and accessible web interfaces using
          modern JavaScript and React. Currently focused on crafting
          user-friendly experiences for the web.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default Hero