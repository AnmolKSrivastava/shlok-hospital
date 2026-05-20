import { Phone, MapPin, Clock } from 'lucide-react';

export default function EmergencyCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#E63946] to-[#d32f3c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="text-white text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-3">
              <Clock className="w-6 h-6 animate-pulse" />
              <span className="text-sm font-semibold uppercase tracking-wider">Available 24×7</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-2">
              Emergency & Critical Care Support
            </h2>
            <p className="text-lg opacity-90">
              Immediate medical attention when you need it most
            </p>
          </div>

          {/* Right Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+918983757899"
              className="px-8 py-4 bg-white text-[#E63946] rounded-lg hover:bg-gray-100 transition font-semibold shadow-xl flex items-center space-x-3 transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <div className="text-left">
                <div className="text-xs opacity-75">Call Emergency</div>
                <div className="text-lg font-bold">+91 8983757899</div>
              </div>
            </a>

            <a href="https://www.google.com/maps/place/SHLOK+HOSPITAL/@18.6000705,73.7342926,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bb2e88100ead:0x587da79f92c8ac96!8m2!3d18.6000705!4d73.7342926!16s%2Fg%2F11tt8grps4?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition font-semibold flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>

        {/* Emergency Services List */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 text-white text-center border border-white/20">
            <div className="font-semibold">Trauma Care</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 text-white text-center border border-white/20">
            <div className="font-semibold">Cardiac Emergency</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 text-white text-center border border-white/20">
            <div className="font-semibold">ICU Support</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 text-white text-center border border-white/20">
            <div className="font-semibold">Ambulance Service</div>
          </div>
        </div>
      </div>
    </section>
  );
}
