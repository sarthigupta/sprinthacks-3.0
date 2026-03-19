import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'About', path: '/about' },
    { name: 'Timeline', path: '/timeline' },
    { name: 'Prizes', path: '/prizes' },
    { name: 'Tracks', path: '/tracks' },
    { name: 'Team', path: '/team' },
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'Judges', path: '/judges' },
    { 
      name: 'FAQ', 
      path: '/faq', 
      onClick: () => {
        // Logic to rerender the screen
        window.location.reload();
      } 
    },
  ];

  return (
    <nav className="fixed z-50 w-full glass-effect">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:my-4">
          <Link to="/" className="flex-shrink-0">
          <img className='w-full h-10' src="/logo1.svg" alt="" />
          </Link>          
          <div className="hidden md:block">
            <div className="flex items-baseline ml-10 space-x-2 font-Poppins lg:space-x-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-100 hover:text-[#FF0F7B] px-2 lg:px-3 py-2 rounded-md text-md font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden glass-effect"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-300 hover:text-[#FF0F7B] block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar