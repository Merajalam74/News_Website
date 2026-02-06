import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import SearchPage from './pages/SearchPage';
import SinglePost from './pages/SinglePost';
import About from './pages/About';     
import Contact from './pages/Contact'; 
import Privacy from './pages/Privacy'; 
import Terms from './pages/Terms';     

function App() {
  
  const [isDark, setIsDark] = useState(() => {
    
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      console.log("Switched to DARK mode");
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      console.log("Switched to LIGHT mode"); 
    }
  }, [isDark]);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 flex flex-col">
        <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
        
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/search/:query" element={<SearchPage />} />
            <Route path="/post/:id" element={<SinglePost />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;