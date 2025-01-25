import './App.css';
import Home from './Home';
import Navbar from './Components/Navbar';
import { CartProvider } from './CartContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';

function App() {
  const [navOpen, setNavOpen] = useState(true);
  const isMobile = useMediaQuery('(max-width: 1000px)');

  return (
    <CartProvider>
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {isMobile && (
                     <Navbar setNavOpen={setNavOpen} />
                  )}
      
        <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/profierecalanding" element={ <Home navOpen={navOpen} />} />
              <Route path="*" element={ <Home navOpen={navOpen} />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
