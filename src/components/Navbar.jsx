import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sun, Moon, Menu, Search, X } from 'lucide-react';

const Navbar = ({ isDark, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const menuItems = ['Home', 'Business', 'Technology', 'Health', 'Sports'];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery}`);
      setShowSearch(false);
      setSearchQuery("");
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-serif font-bold tracking-tighter dark:text-white z-20">
            DAILY<span className="text-blue-600">NEWS</span>.
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <Link 
                key={item} 
                to={item === 'Home' ? '/' : `/category/${item.toLowerCase()}`} 
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 uppercase tracking-wide transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-2">
            
            {/* Search Toggle */}
            <div className="relative">
              {showSearch ? (
                 <form onSubmit={handleSearch} className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1 w-64 shadow-lg border border-gray-200 dark:border-gray-700">
                   <input 
                     type="text" 
                     autoFocus
                     placeholder="Search..." 
                     className="bg-transparent border-none focus:outline-none text-sm w-full dark:text-white px-2"
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                     onBlur={() => !searchQuery && setShowSearch(false)}
                   />
                 </form>
              ) : (
                <button onClick={() => setShowSearch(true)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors">
                  <Search size={20} />
                </button>
              )}
            </div>

            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-gray-600 dark:text-gray-300 transition-colors">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b dark:border-gray-800 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
             {menuItems.map((item) => (
              <Link 
                key={item} 
                to={item === 'Home' ? '/' : `/category/${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 border-b border-gray-100 dark:border-gray-800"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;