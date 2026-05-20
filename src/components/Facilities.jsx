import { Bed, Activity, Heart, Microscope, Zap, Users, Ambulance, Stethoscope } from 'lucide-react';

export default function Facilities() {
  const facilities = [
    {
      icon: Heart,
      title: 'ICU – 10 Beds',
      description: 'Advanced intensive care unit with 24×7 monitoring and life support systems',
      color: 'bg-red-50 text-red-600',
      highlight: true
    },
    {
      icon: Bed,
      title: 'General Ward – 11 Beds',
      description: 'Comfortable patient accommodation with 6 male and 5 female ward sections',
      color: 'bg-blue-50 text-blue-600',
      details: ['6 Male Beds', '5 Female Beds']
    },
    {
      icon: Bed,
      title: '1 Super Deluxe Room',
      description: 'Premium private room with modern amenities and dedicated nursing care',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: Bed,
      title: '1 Semi Deluxe Room',
      description: 'Comfortable semi-private accommodation with quality facilities',
      color: 'bg-indigo-50 text-indigo-600'
    },
    {
      icon: Zap,
      title: 'Radiology & Diagnostics',
      description: 'State-of-the-art imaging technology including X-Ray, Ultrasound, and CT Scan',
      color: 'bg-yellow-50 text-yellow-600'
    },
    {
      icon: Microscope,
      title: 'Pathology Lab',
      description: 'Fully equipped laboratory for comprehensive diagnostic testing',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Users,
      title: 'Nursing Care',
      description: 'Experienced and compassionate nursing staff available round the clock',
      color: 'bg-teal-50 text-teal-600'
    },
    {
      icon: Ambulance,
      title: 'Emergency Services',
      description: '24×7 emergency department with trauma care and ambulance services',
      color: 'bg-red-50 text-red-600',
      highlight: true
    },
  ];

  return (
    <section id="facilities" className="py-20 bg-gradient-to-br from-[#F7FAFC] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#2BB3A3] font-semibold text-sm uppercase tracking-wider">Our Facilities</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Modern Infrastructure & Advanced Medical Facilities
          </h2>
          <p className="text-gray-600 text-lg">
            State-of-the-art infrastructure designed for comprehensive patient care and comfort
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 ${
                facility.highlight ? 'border-[#E63946]' : 'border-gray-100'
              }`}
            >
              <div className={`w-16 h-16 ${facility.color} rounded-xl flex items-center justify-center mb-4`}>
                <facility.icon className="w-8 h-8" />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">{facility.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">{facility.description}</p>

              {facility.details && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {facility.details.map((detail, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#F7FAFC] text-[#0F4C81] text-xs font-semibold rounded-full"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="bg-gradient-to-br from-[#0F4C81] to-[#2BB3A3] text-white rounded-2xl p-8 text-center shadow-xl">
            <Activity className="w-10 h-10 mx-auto mb-3" />
            <div className="text-4xl font-bold mb-2">24×7</div>
            <div className="text-sm opacity-90">Emergency Services</div>
          </div>
          <div className="bg-gradient-to-br from-[#2BB3A3] to-[#0F4C81] text-white rounded-2xl p-8 text-center shadow-xl">
            <Bed className="w-10 h-10 mx-auto mb-3" />
            <div className="text-4xl font-bold mb-2">22</div>
            <div className="text-sm opacity-90">Total Beds</div>
          </div>
          <div className="bg-gradient-to-br from-[#0F4C81] to-[#2BB3A3] text-white rounded-2xl p-8 text-center shadow-xl">
            <Stethoscope className="w-10 h-10 mx-auto mb-3" />
            <div className="text-4xl font-bold mb-2">14</div>
            <div className="text-sm opacity-90">Departments</div>
          </div>
          <div className="bg-gradient-to-br from-[#2BB3A3] to-[#0F4C81] text-white rounded-2xl p-8 text-center shadow-xl">
            <Users className="w-10 h-10 mx-auto mb-3" />
            <div className="text-4xl font-bold mb-2">24</div>
            <div className="text-sm opacity-90">Expert Doctors</div>
          </div>
        </div>
      </div>
    </section>
  );
}
