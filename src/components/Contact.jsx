import { useState } from 'react'
import './Contact.css'

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
      setStatus({ type: 'error', message: 'Please fill in all fields.' })
      return
    }
    setStatus({
      type: 'success',
      message: 'Thanks! Your message has been recorded (frontend demo).',
    })
    setForm(initialState)
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">
          Have a question or want to work together? Send me a message.
        </p>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
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
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
          {status.message && (
            <p
              role={status.type === 'error' ? 'alert' : 'status'}
              className={`form-status form-status-${status.type}`}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact