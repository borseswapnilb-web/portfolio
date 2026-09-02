import './Footer.css'

const year = new Date().getFullYear()

const navLinks = [
  { label: 'About', to: '#about' },
  { label: 'Skills', to: '#skills' },
  { label: 'Projects', to: '#projects' },
  { label: 'Resume', to: '#resume' },
  { label: 'Contact', to: '#contact' },
]

const socials = [
  // TODO: replace with your real GitHub profile URL
  { label: 'GitHub', href: 'https://github.com/borseswapnilb-web' },
  // TODO: replace with your real LinkedIn profile URL
  { label: 'LinkedIn', href: 'https://linkedin.com/in/swapnil-b-borse' },
  // TODO: replace with your real email address
  { label: 'Email', href: 'mailto:borseswapnilb@gmail.com' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top container">
        <div className="footer-brand">
          <div className="footer-brand-row">
            <span className="footer-brand-mark" aria-hidden="true">SB</span>
            <span className="footer-brand-name">Swapnil Borse</span>
          </div>
          <p className="footer-brand-tagline">
            Frontend developer building clean, accessible web experiences.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <h4 className="footer-heading">Navigation</h4>
          <ul>
            {navLinks.map((l) => (
              <li key={l.to}><a href={l.to}>{l.label}</a></li>
            ))}
          </ul>
        </nav>

        <nav className="footer-nav" aria-label="Social links">
          <h4 className="footer-heading">Connect</h4>
          <ul>
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner container">
          <p className="footer-copy">&copy; {year} Your Name. All rights reserved.</p>
          <p className="footer-built">
            Built with <a href="https://react.dev" target="_blank" rel="noreferrer">React</a> + <a href="https://vite.dev" target="_blank" rel="noreferrer">Vite</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer