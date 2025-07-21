import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/main';
import AgriISmart from './components/AgriiSmart';

function App() {
  return (
    <Router>
      <div className="App font-roboto">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/agriismart" element={<AgriISmart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;