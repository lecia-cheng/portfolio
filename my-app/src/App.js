import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Experience from './Experience';
import Projects from './Projects';
import { NavBar } from './NavBar';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Home />
      <Experience />
      <Projects />
    </div>
    
  );
}

export default App;
