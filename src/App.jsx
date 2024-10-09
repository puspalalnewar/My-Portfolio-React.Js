import './App.css';
import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';
import Tools from './components/Tools';

function App() {
  return (
    <div className='font-inter'>
      <Header/>
      <About/>
      <Tools/>
      <Projects/>
    </div>
  );
}

export default App;
