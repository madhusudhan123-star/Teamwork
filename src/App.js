import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ParallaxProvider>
    </div>
  );
}
  
export default App;
