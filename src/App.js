
import Navbar from './components/Navbar'
import Main from './components/Main'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className='app-container'>
      <Navbar />
      <Main />
      <Projects />
      <Skills />
      <About />
      <Contact />
      
    </div>
  )
}

export default App;
