import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/home/home";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import { LanguageProvider } from "./context/language";
import { useLanguage } from "./context/language-context";
import "./App.css";

function AppContent() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t.browserTitle;
  }, [t.browserTitle]);

  return (
    <div className="app">
      <main className="main-content">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<AppContent />} />
        </Routes>
      </LanguageProvider>
    </Router>
  );
}

export default App;
