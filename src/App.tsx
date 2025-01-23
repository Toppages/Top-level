import './App.css';
import Home from './Home';
import Footer from './Components/Footer/Index';
import Navbar from './Components/Navbar';
import { CartProvider } from './CartContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <CartProvider>
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/profierecalanding" element={<Home />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
         
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
