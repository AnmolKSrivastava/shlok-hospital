import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <img 
                src="/shlok-hospital-logo.webp" 
                alt="Shlok Hospital Logo" 
                className="w-28 h-28 object-contain"
              />
              <div>
                <h1 className="text-lg font-bold text-gray-900">Shlok Hospital</h1>
                <p className="text-xs text-gray-500">Hinjewadi, Pune</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <a href="#home" className="px-4 py-2 text-gray-700 hover:text-[#0F4C81] hover:bg-gray-50 rounded-lg transition font-medium">Home</a>
            <a href="#about" className="px-4 py-2 text-gray-700 hover:text-[#0F4C81] hover:bg-gray-50 rounded-lg transition font-medium">About</a>
            <a href="#departments" className="px-4 py-2 text-gray-700 hover:text-[#0F4C81] hover:bg-gray-50 rounded-lg transition font-medium">Departments</a>
            <a href="#facilities" className="px-4 py-2 text-gray-700 hover:text-[#0F4C81] hover:bg-gray-50 rounded-lg transition font-medium">Facilities</a>
            <a href="#packages" className="px-4 py-2 text-gray-700 hover:text-[#0F4C81] hover:bg-gray-50 rounded-lg transition font-medium">Packages</a>
            <a href="#contact" className="px-4 py-2 text-gray-700 hover:text-[#0F4C81] hover:bg-gray-50 rounded-lg transition font-medium">Contact</a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button className="px-6 py-2.5 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition font-semibold">
              Book Now
            </button>
            <a href="tel:+918983757899" className="flex items-center space-x-2 px-5 py-2.5 bg-[#E63946] text-white rounded-xl hover:bg-[#d32f3c] transition font-semibold">
              <Phone className="w-4 h-4" />
              <span>Emergency</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-2">
              <a href="#home" className="px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">Home</a>
              <a href="#about" className="px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">About</a>
              <a href="#departments" className="px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">Departments</a>
              <a href="#facilities" className="px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">Facilities</a>
              <a href="#packages" className="px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">Health Packages</a>
              <a href="#contact" className="px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">Contact</a>
              <div className="pt-2 space-y-2">
                <button className="w-full px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition font-semibold">
                  Book Appointment
                </button>
                <a href="tel:+918983757899" className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-[#E63946] text-white rounded-xl hover:bg-[#d32f3c] transition font-semibold">
                  <Phone className="w-4 h-4" />
                  <span>Emergency Call</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
