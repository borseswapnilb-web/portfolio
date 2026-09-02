import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

const About = lazy(() => import('./components/About'))
const Projects = lazy(() => import('./components/Projects'))
const Skills = lazy(() => import('./components/Skills'))
const Resume = lazy(() => import('./components/Resume'))
const Contact = lazy(() => import('./components/Contact'))

function SectionFallback() {
  return (
    <div className="section-fallback" role="status" aria-live="polite">
      <span className="section-fallback-spinner" aria-hidden="true"></span>
      <span className="visually-hidden">Loading section</span>
    </div>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Skills />
          <Projects />
          <Resume />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default App