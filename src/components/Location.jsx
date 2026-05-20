import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#2BB3A3] font-semibold text-sm uppercase tracking-wider">Visit Us</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Our Location
          </h2>
          <p className="text-gray-600 text-lg">
            Conveniently located in Hinjewadi, Pune - Easy to reach from anywhere in the city
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map Placeholder */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px] bg-gray-100 group cursor-pointer">
            <iframe
              src="https://maps.google.com/maps?q=18.6000705,73.7342926&hl=en&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, pointerEvents: 'none' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shlok Hospital Location"
            ></iframe>
            <a 
              href="https://www.google.com/maps/place/SHLOK+HOSPITAL/@18.6000705,73.7342926,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bb2e88100ead:0x587da79f92c8ac96!8m2!3d18.6000705!4d73.7342926!16s%2Fg%2F11tt8grps4?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10"
              aria-label="Open location in Google Maps"
            ></a>
            <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg px-4 py-2 z-20 pointer-events-none">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-[#E63946]" />
                <span className="font-semibold text-gray-900">Shlok Hospital</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition z-20 pointer-events-none flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition bg-white/90 rounded-lg px-4 py-2 shadow-lg">
                <span className="text-sm font-semibold text-gray-900">Click to open in Google Maps</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#0F4C81] to-[#2BB3A3] text-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Address</div>
                    <p className="opacity-90">
                      Near Laxmi Chowk, Marunji Road<br />
                      Hinjewadi, Pune, Maharashtra 411057
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <p className="opacity-90">+91 8983757899</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <p className="opacity-90">info@shlokhospital.com</p>
                    <p className="opacity-90">emergency@shlokhospital.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Working Hours</div>
                    <p className="opacity-90">Emergency: 24×7</p>
                    <p className="opacity-90">OPD: 9:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>

              <a href="https://www.google.com/maps/place/SHLOK+HOSPITAL/@18.6000705,73.7342926,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bb2e88100ead:0x587da79f92c8ac96!8m2!3d18.6000705!4d73.7342926!16s%2Fg%2F11tt8grps4?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="w-full mt-6 px-6 py-4 bg-white text-[#0F4C81] rounded-lg hover:bg-gray-100 transition font-semibold shadow-lg flex items-center justify-center space-x-2">
                <Navigation className="w-5 h-5" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#F7FAFC] rounded-xl p-6 text-center border-2 border-[#0F4C81]">
                <MapPin className="w-8 h-8 text-[#0F4C81] mx-auto mb-2" />
                <div className="text-sm text-gray-600">Prime Location</div>
                <div className="font-bold text-gray-900">Hinjewadi</div>
              </div>
              <div className="bg-[#F7FAFC] rounded-xl p-6 text-center border-2 border-[#2BB3A3]">
                <Clock className="w-8 h-8 text-[#2BB3A3] mx-auto mb-2" />
                <div className="text-sm text-gray-600">Available</div>
                <div className="font-bold text-gray-900">24×7</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
