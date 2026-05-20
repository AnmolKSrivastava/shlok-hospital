import { Phone, Mail, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#0F4C81] to-[#2BB3A3] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Hospital Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/shlok-hospital-logo.webp" 
                alt="Shlok Hospital Logo" 
                className="w-32 h-32 object-contain bg-white rounded-lg p-1"
              />
              <div>
                <h3 className="text-xl font-bold">Shlok Hospital</h3>
                <p className="text-sm opacity-80">Hinjewadi, Pune</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed mb-4">
              Multispeciality hospital committed to providing quality, accessible, and compassionate healthcare to the community.
            </p>
            <div className="flex space-x-3">
              <button onClick={() => {}} className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition text-sm font-bold cursor-pointer">
                f
              </button>
              <button onClick={() => {}} className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition text-sm font-bold cursor-pointer">
                𝕏
              </button>
              <button onClick={() => {}} className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition text-sm font-bold cursor-pointer">
                📷
              </button>
              <button onClick={() => {}} className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition text-sm font-bold cursor-pointer">
                in
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-sm opacity-90 hover:opacity-100 hover:underline transition">About Us</a></li>
              <li><a href="#departments" className="text-sm opacity-90 hover:opacity-100 hover:underline transition">Departments</a></li>
              <li><a href="#facilities" className="text-sm opacity-90 hover:opacity-100 hover:underline transition">Facilities</a></li>
              <li><a href="#packages" className="text-sm opacity-90 hover:opacity-100 hover:underline transition">Health Packages</a></li>
              <li><a href="#contact" className="text-sm opacity-90 hover:opacity-100 hover:underline transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="text-lg font-bold mb-4">Key Departments</h4>
            <ul className="space-y-2">
              <li className="text-sm opacity-90">Cardiology</li>
              <li className="text-sm opacity-90">Neurology</li>
              <li className="text-sm opacity-90">Orthopedics</li>
              <li className="text-sm opacity-90">Pediatrics</li>
              <li className="text-sm opacity-90">Gynecology</li>
              <li className="text-sm opacity-90">General Medicine</li>
              <li><a href="#departments" className="text-sm font-semibold hover:underline transition">View All 14 →</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div className="text-sm opacity-90">
                  Near Laxmi Chowk, Marunji Road<br />
                  Hinjewadi, Pune 411057
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+918983757899" className="text-sm opacity-90 hover:opacity-100 transition">
                  +91 8983757899
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@shlokhospital.com" className="text-sm opacity-90 hover:opacity-100 transition">
                  info@shlokhospital.com
                </a>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20">
                <div className="flex items-center space-x-2 text-sm">
                  <Heart className="w-5 h-5 text-[#E63946] animate-pulse" />
                  <span className="font-semibold">Emergency: 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-90 text-center md:text-left">
              © {currentYear} Shlok Hospital. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm opacity-90">
              <button onClick={() => {}} className="hover:opacity-100 hover:underline transition cursor-pointer bg-transparent border-0 p-0">Privacy Policy</button>
              <span>•</span>
              <button onClick={() => {}} className="hover:opacity-100 hover:underline transition cursor-pointer bg-transparent border-0 p-0">Terms of Service</button>
              <span>•</span>
              <button onClick={() => {}} className="hover:opacity-100 hover:underline transition cursor-pointer bg-transparent border-0 p-0">Disclaimer</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
