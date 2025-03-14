import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Home from './components/Home.tsx';
//import About from './components/About.tsx';
import Contact from './components/Contact.tsx';
import Resume from './components/Resume.tsx';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/*
            <Route path="/about" element={<About />} />
        */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
