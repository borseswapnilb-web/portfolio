import taskTracker from '../assets/project-task-tracker.svg'
import weatherDashboard from '../assets/project-weather-dashboard.svg'
import portfolioSite from '../assets/project-portfolio.svg'

const projects = [
  {
    id: 1,
    title: 'Task Tracker App',
    description:
      'A responsive task management application with local persistence, filtering, and a clean, accessible interface.',
    tech: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com/yourusername/task-tracker',
    demo: 'https://yourusername.github.io/task-tracker',
    image: taskTracker,
    imageAlt: 'Task Tracker app interface showing a list of tasks',
  },
  {
    id: 2,
    title: 'Weather Dashboard',
    description:
      'A weather dashboard that fetches real-time data from a public API and presents forecasts in a clean, mobile-friendly layout.',
    tech: ['JavaScript', 'HTML', 'CSS', 'API'],
    github: 'https://github.com/yourusername/weather-dashboard',
    demo: 'https://yourusername.github.io/weather-dashboard',
    image: weatherDashboard,
    imageAlt: 'Weather dashboard displaying a weekly forecast',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description:
      'A personal portfolio built with React and Vite, focused on accessibility, responsive design, and clean typography.',
    tech: ['React', 'Vite', 'CSS'],
    github: 'https://github.com/yourusername/portfolio',
    demo: '#home',
    image: portfolioSite,
    imageAlt: 'Preview of the personal portfolio website',
  },
]

export default projects