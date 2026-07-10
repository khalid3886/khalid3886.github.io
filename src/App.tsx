import Navbar from './components/layout/Navbar';
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Systems from "./sections/Systems";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />

      <main>
        <Hero />
        <Experience />
        <Systems />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;