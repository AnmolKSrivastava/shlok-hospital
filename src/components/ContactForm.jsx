import { Calendar, User, Phone, Mail, MessageSquare, Send, Clock, Activity } from 'lucide-react';

export default function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#F7FAFC] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#2BB3A3] font-semibold text-sm uppercase tracking-wider">Book Appointment</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Schedule Your Visit
          </h2>
          <p className="text-gray-600 text-lg">
            Fill out the form below and our team will contact you to confirm your appointment
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10 border border-gray-100">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-[#0F4C81]" />
                    <span>Full Name</span>
                  </div>
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent outline-none transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-[#0F4C81]" />
                    <span>Phone Number</span>
                  </div>
                </label>
                <input
                  type="tel"
                  placeholder="+91 8983757899"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent outline-none transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-[#0F4C81]" />
                    <span>Email (Optional)</span>
                  </div>
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-4 h-4 text-[#0F4C81]" />
                    <span>Department</span>
                  </div>
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent outline-none transition">
                  <option value="">Select Department</option>
                  <option>Cardiology</option>
                  <option>Neurology</option>
                  <option>Orthopedics</option>
                  <option>Pediatrics</option>
                  <option>Gynecology</option>
                  <option>General Medicine</option>
                  <option>ENT</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-[#0F4C81]" />
                    <span>Preferred Date</span>
                  </div>
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent outline-none transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4 text-[#0F4C81]" />
                    <span>Message (Optional)</span>
                  </div>
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your health concern..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent outline-none transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-[#0F4C81] to-[#2BB3A3] text-white rounded-lg hover:from-[#0d3d66] hover:to-[#249a8b] transition font-semibold shadow-lg flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Book Appointment</span>
              </button>
            </form>
          </div>

          {/* Right Side Info */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-[#E63946] to-[#d32f3c] text-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
              <p className="mb-6 opacity-90">For emergency cases, please call our 24×7 helpline</p>
              <a
                href="tel:+918983757899"
                className="flex items-center justify-center space-x-3 px-8 py-4 bg-white text-[#E63946] rounded-lg hover:bg-gray-100 transition font-semibold shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span>+91 8983757899</span>
              </a>
            </div>

            {/* Why Book With Us */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Why Book With Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#2BB3A3] rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Doctors</h4>
                    <p className="text-sm text-gray-600">Consult with 24 specialist doctors</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#2BB3A3] rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">No Waiting Time</h4>
                    <p className="text-sm text-gray-600">Pre-booked appointments save your time</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#2BB3A3] rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Modern Facilities</h4>
                    <p className="text-sm text-gray-600">State-of-the-art diagnostic equipment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#2BB3A3] rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Affordable Care</h4>
                    <p className="text-sm text-gray-600">Quality healthcare at reasonable costs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-[#F7FAFC] rounded-2xl p-8 border-2 border-[#0F4C81]">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-[#0F4C81]" />
                <h3 className="text-xl font-bold text-gray-900">Office Hours</h3>
              </div>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Emergency</span>
                  <span className="font-semibold text-[#E63946]">24×7</span>
                </div>
                <div className="flex justify-between">
                  <span>OPD</span>
                  <span className="font-semibold">9:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Diagnostics</span>
                  <span className="font-semibold">8:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
