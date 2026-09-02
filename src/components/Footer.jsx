import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copy">&copy; {year} Your Name. All rights reserved.</p>
        <ul className="footer-links" aria-label="Social links">
          <li>
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:you@example.com">Email</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer