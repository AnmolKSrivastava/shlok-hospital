import { Phone, ArrowRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './utils/ImageWithFallback';
import hospitalOutdoor from '../assets/Outdoor.webp';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-teal-50 to-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#0F4C81] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#2BB3A3] rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white border-2 border-[#0F4C81]/10 rounded-full px-5 py-2 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#2BB3A3]" />
              <span className="text-sm font-semibold text-gray-700">Trusted Healthcare Since 2009</span>
            </div>

            <div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6">
                Advanced Care,
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0F4C81] to-[#2BB3A3]">
                  Right Here
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Expert multispeciality healthcare available 24×7 in the heart of Hinjewadi, Pune. Your health, our commitment.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 bg-[#0F4C81] text-white rounded-xl hover:bg-[#0d3d66] transition-all shadow-xl hover:shadow-2xl hover:scale-105 font-semibold flex items-center space-x-2">
                <span>Book Appointment</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="tel:+918983757899" className="px-8 py-4 bg-[#E63946] text-white rounded-xl hover:bg-[#d32f3c] transition-all shadow-xl hover:shadow-2xl hover:scale-105 font-semibold flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Emergency</span>
              </a>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-4 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0F4C81]">14</div>
                <div className="text-xs text-gray-600 mt-1">Departments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#2BB3A3]">28</div>
                <div className="text-xs text-gray-600 mt-1">Doctors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#E63946]">10</div>
                <div className="text-xs text-gray-600 mt-1">ICU Beds</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0F4C81]">24/7</div>
                <div className="text-xs text-gray-600 mt-1">Available</div>
              </div>
            </div>
          </div>

          {/* Right Side - Image with overlays */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={hospitalOutdoor}
                alt="Shlok Hospital - Outdoor View"
                className="w-full h-[600px] object-cover"
                fallbackSrc="https://images.unsplash.com/photo-1769698678497-c41f0ab47c3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              />
              {/* Overlay card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Available Now</div>
                    <div className="text-xl font-bold text-gray-900">24×7 Emergency Services</div>
                  </div>
                  <div className="w-12 h-12 bg-[#E63946] rounded-full flex items-center justify-center animate-pulse">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
              <div className="text-2xl font-bold text-[#2BB3A3]">98%</div>
              <div className="text-xs text-gray-600">Satisfaction</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
              <div className="text-2xl font-bold text-[#0F4C81]">5000+</div>
              <div className="text-xs text-gray-600">Patients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
