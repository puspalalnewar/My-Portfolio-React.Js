import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Tools from './components/Tools';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className='font-inter p-[1rem]'>
      <Header />
      <Element name='about'>
        <About />
      </Element>
      <Element name='tools'>
        <Tools />
      </Element>
      <Element name='projects'>
        <Projects />
      </Element>
      <Element name='contact'>
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
