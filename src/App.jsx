import { MainContainer } from './components/layout/MainContainer/MainContainer'
import { Navbar } from './components/layout/Navbar/Navbar'
import { HeroSection } from './components/layout/HeroSection/HeroSection'
import { AboutMeSection } from './components/layout/AboutMeSection/AboutMeSection'
import { ProjectsSection } from './components/layout/ProjectsSection/ProjectsSection'
import { ContactSection } from './components/layout/ContactSection/ContactSection'
import { Footer } from './components/layout/Footer/Footer'

import './components/layout/Navbar/Navbar.css'

function App() {

  return (
    <MainContainer>
      <Navbar/>
      <HeroSection/>
      <AboutMeSection/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
    </MainContainer>
  )
}

export default App
