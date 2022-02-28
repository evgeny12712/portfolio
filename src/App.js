import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Portfolio from './components/Portfolio';
import Home from './components/Home';
import Contact from './components/Contact';
import AppFooter from './components/AppFooter'
function App() {
  return (
    <div>
      <Router>
        <AppHeader />
        <Contact />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <AppFooter />
      </Router>
    </div>
  );
}

export default App;
