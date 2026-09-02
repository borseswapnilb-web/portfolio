import { useState } from 'react'
import './Contact.css'

const channels = [
  { label: 'Email', value: 'borseswapnilb@gmail.com', href: 'mailto:borseswapnilb@gmail.com' },
  // TODO: replace with your real GitHub profile URL
  { label: 'GitHub', value: 'github.com/borseswapnilb-web', href: 'https://github.com/borseswapnilb-web' },
  // TODO: replace with your real LinkedIn profile URL
  { label: 'LinkedIn', value: 'linkedin.com/in/swapnil-b-borse', href: 'https://linkedin.com/in/swapnil-b-borse' },
]

const initialState = { name: '', email: '', message: '' }

function Contact() {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: 'error', message: 'Please fill in all fields before sending.' })
      return
    }
    setStatus({
      type: 'success',
      message: 'Thanks — your message is recorded locally for now. This demo form does not send email.',
    })
    setForm(initialState)
  }

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Contact</span>
          <h2 className="section-title">Let's work together</h2>
          <p className="section-subtitle">
            Have a project, a question, or just want to say hello? Reach out
            through any of the channels below or use the form.
          </p>
        </div>

        <div className="contact-grid">
          <aside className="contact-channels" aria-label="Direct contact channels">
            <h3 className="contact-channels-title">Direct channels</h3>
            <ul>
              {channels.map((c) => (
                <li key={c.label} className="contact-channel">
                  <span className="contact-channel-label">{c.label}</span>
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="contact-channel-value"
                  >
                    {c.value}
                  </a>
                </li>
              ))}
            </ul>
            <p className="contact-channels-note">
              Prefer email for project inquiries. I usually reply within one
              business day.
            </p>
          </aside>

          <form className="contact-form card" onSubmit={handleSubmit} noValidate aria-label="Contact form">
            <div className="form-group">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me a bit about your project or question..."
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-lg">
              Send Message
            </button>
            {status.message && (
              <p
                role={status.type === 'error' ? 'alert' : 'status'}
                className={`form-status form-status-${status.type}`}
              >
                {status.message}
              </p>
            )}
            <p className="contact-form-note">
              This form is a frontend demo and does not send email. To enable
              real submissions, replace <code>handleSubmit</code> in
              <code> Contact.jsx</code> with a backend or service call.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact