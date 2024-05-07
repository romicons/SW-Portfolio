import { MainContainer } from './components/layout/MainContainer'
import { Navbar } from './components/layout/Navbar'
import { HeroSection } from './components/layout/HeroSection'
import { AboutMeSection } from './components/layout/AboutMeSection'
import { SkillsSection } from './components/layout/SkillsSection'
import { ProjectsSection } from './components/layout/ProjectsSection'
import { ContactSection } from './components/layout/ContactSection'
import { Footer } from './components/layout/Footer'

function App() {

  return (
    <MainContainer>
      <Navbar/>
      <HeroSection/>
      <AboutMeSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
    </MainContainer>
  )
}

export default App
