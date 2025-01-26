import './App.css';
import Home from './Home';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [navOpen, setNavOpen] = useState(true);
  const [activeLink, setActiveLink] = useState(0); 
  const isMobile = useMediaQuery('(max-width: 1000px)');

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
      {isMobile && <Navbar setNavOpen={setNavOpen} setActiveLink={setActiveLink} />}

        <main style={{ flex: 1 }}>
          <Routes>
            <Route
              path="/profierecalanding"
              element={
                <Home navOpen={navOpen} activeLink={activeLink} setActiveLink={setActiveLink} />
              }
            />
            <Route
              path="*"
              element={
                <Home navOpen={navOpen} activeLink={activeLink} setActiveLink={setActiveLink} />
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
