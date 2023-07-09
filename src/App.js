import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import HomeSection from './components/Home';
import AboutSection from './components/About';
import SkillsSection from './components/Skill';
import ProjectsSection from './components/Project';
import ContactSection from './components/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default App;
