import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Portfolio from './components/Portfolio';
import About from './components/About';
import Home from './components/Home';
function App() {
  return (
    <div>
      <Router>
        <AppHeader />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
