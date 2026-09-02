import { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header className="navbar" role="banner">
      <div className="navbar-inner container">
        <a href="#home" className="navbar-brand" onClick={closeMenu} aria-label="Go to top">
          <span className="navbar-brand-mark" aria-hidden="true">SB</span>
          <span className="navbar-brand-text">
            <span className="navbar-brand-name">Swapnil Borse</span>
            <span className="navbar-brand-role">Frontend Developer</span>
          </span>
        </a>

        <button
          type="button"
          className={`navbar-toggle ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          id="primary-navigation"
          className={`navbar-links ${open ? 'is-open' : ''}`}
          aria-label="Primary"
        >
          <ul>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#resume" onClick={closeMenu}>Resume</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar