import './Hero.css'

const stack = ['React', 'JS', 'CSS', 'HTML', 'Git']

const codeLines = [
  { tokens: [['keyword', 'const'], ['plain', ' '], ['name', 'developer'], ['plain', ' = {']] },
  { tokens: [['key', '  name'], ['plain', ': '], ['string', "'Your Name'"], ['plain', ',']] },
  { tokens: [['key', '  role'], ['plain', ': '], ['string', "'Frontend Developer'"], ['plain', ',']] },
  { tokens: [['key', '  stack'], ['plain', ': ['], ['string', "'React'"], ['plain', ', '], ['string', "'JS'"], ['plain', ', '], ['string', "'CSS'"], ['plain', '],']] },
  { tokens: [['key', '  focus'], ['plain', ': '], ['string', "'Clean, accessible UIs'"], ['plain', ',']] },
  { tokens: [['key', '  interests'], ['plain', ': ['], ['string', "'a11y'"], ['plain', ', '], ['string', "'design systems'"], ['plain', '],']] },
  { tokens: [['plain', '}']] },
]

function CodeLine({ tokens }) {
  return (
    <div className="code-line">
      {tokens.map((t, i) => (
        <span key={i} className={`tk tk-${t[0]}`}>{t[1]}</span>
      ))}
    </div>
  )
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-bg-blob hero-bg-blob-a"></div>
        <div className="hero-bg-blob hero-bg-blob-b"></div>
        <div className="hero-bg-grid"></div>
      </div>

      <div className="hero-inner container">
        <div className="hero-text">
          <div className="hero-eyebrow-row">
            <span className="hero-eyebrow">Portfolio</span>
            <span className="availability-status">
              <span className="availability-dot" aria-hidden="true"></span>
              <span>Open for Work Opportunities</span>
            </span>
          </div>
          <h1 className="hero-name">Swapnil Borse</h1>
          <h2 className="hero-role">Frontend Developer crafting clean, accessible web experiences</h2>

          <p className="hero-intro">
            I build responsive interfaces with modern JavaScript and React,
            focused on clarity, performance, and an honest attention to detail.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary btn-lg">View Projects</a>
            <a href="#contact" className="btn btn-secondary btn-lg">Contact Me</a>
          </div>

          <dl className="hero-stats" aria-label="Snapshot">
            <div className="hero-stat">
              <dt>Focus</dt>
              <dd>Frontend &amp; UI</dd>
            </div>
            <div className="hero-stat">
              <dt>Stack</dt>
              <dd>React, JS, CSS</dd>
            </div>
            <div className="hero-stat">
              <dt>Interests</dt>
              <dd>Accessibility</dd>
            </div>
          </dl>
        </div>

        <aside className="hero-visual" aria-label="Developer visual">
          <div className="hero-editor" role="img" aria-label="JavaScript developer snippet">
            <div className="hero-editor-bar">
              <span className="hero-editor-dot" data-c="red"></span>
              <span className="hero-editor-dot" data-c="amber"></span>
              <span className="hero-editor-dot" data-c="green"></span>
              <span className="hero-editor-tab">developer.js</span>
            </div>
            <div className="hero-editor-body">
              {codeLines.map((line, i) => (
                <CodeLine key={i} tokens={line.tokens} />
              ))}
            </div>
          </div>

          <ul className="hero-stack" aria-label="Tech stack">
            {stack.map((s, i) => (
              <li key={s} className={`hero-stack-chip hero-stack-chip-${i + 1}`}>
                <span className="hero-stack-chip-dot" aria-hidden="true"></span>
                {s}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}

export default Hero