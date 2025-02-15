import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import { ParallaxProvider } from 'react-scroll-parallax';
import About from './pages/About';
import Solution from './pages/Solution';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import SingleBlog from './pages/SingleBlog';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Privacy from './pages/Privacy';
import Error from './pages/Error';

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/solution' element={<Solution />} />
            <Route path='/blogs' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
            {/* <Route path='/blogs/:id' element={<SingleBlog />} /> */}
            <Route path='/solutionblogs/:id' element={<SingleBlog />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='*' element={<Error />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ParallaxProvider>
    </div>
  );
}

export default App;
