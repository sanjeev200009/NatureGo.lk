
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Contact', path: '/contact' },
  ];
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-eco-green font-bold text-xl">EcoTrail.lk</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive(link.path)
                    ? 'text-eco-green-dark bg-eco-green/10'
                    : 'text-gray-700 hover:text-eco-green hover:bg-eco-green/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {user ? (
              <div className="ml-4 flex items-center space-x-2">
                <Link to="/bookmarks">
                  <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    <Bookmark size={18} />
                    <span className="hidden lg:inline">Bookmarks</span>
                  </Button>
                </Link>
                <div className="border-l border-gray-200 h-6 mx-2" />
                <span className="text-sm text-gray-700 hidden lg:inline">
                  Hi, {user.name.split(' ')[0]}
                </span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={logout}
                  className="text-gray-700 flex items-center gap-1"
                >
                  <LogOut size={18} />
                  <span className="hidden lg:inline">Logout</span>
                </Button>
              </div>
            ) : (
              <div className="ml-4 flex items-center">
                <Link to="/login">
                  <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    <User size={18} />
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="default" size="sm" className="ml-2">
                    Register
                  </Button>
                </Link>
              </div>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-eco-green hover:bg-eco-green/5 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-eco-green-dark bg-eco-green/10'
                    : 'text-gray-700 hover:text-eco-green hover:bg-eco-green/5'
                }`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            
            {user ? (
              <>
                <Link
                  to="/bookmarks"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-eco-green hover:bg-eco-green/5"
                  onClick={closeMenu}
                >
                  <div className="flex items-center gap-2">
                    <Bookmark size={18} />
                    Bookmarks
                  </div>
                </Link>
                <div 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-eco-green hover:bg-eco-green/5"
                  onClick={() => {
                    logout();
                    closeMenu();
                  }}
                >
                  <div className="flex items-center gap-2 cursor-pointer">
                    <LogOut size={18} />
                    Logout
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-eco-green hover:bg-eco-green/5"
                  onClick={closeMenu}
                >
                  <div className="flex items-center gap-2">
                    <User size={18} />
                    Login
                  </div>
                </Link>
                <Link
                  to="/register"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-eco-green hover:bg-eco-green/5"
                  onClick={closeMenu}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
