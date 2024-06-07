import './App.css';
import About from './components/About';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerReviewsSection from './components/Review';
import Services from './components/Services';
import Main from './components/main';
import Navigation from './components/navigation';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reviews" element={<CustomerReviewsSection />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;