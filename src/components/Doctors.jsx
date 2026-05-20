import { useState } from 'react';
import { Calendar, Award } from 'lucide-react';
import { ImageWithFallback } from './utils/ImageWithFallback';

export default function Doctors() {
  const [activeTab, setActiveTab] = useState('All');

  const departments = ['All', 'Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Gynecology'];

  const doctors = [
    {
      name: 'Dr. Rajesh Kumar',
      specialty: 'Cardiology',
      qualification: 'MD, DM (Cardiology)',
      experience: '15+ years',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
    },
    {
      name: 'Dr. Priya Sharma',
      specialty: 'Gynecology',
      qualification: 'MBBS, MS (OBG)',
      experience: '12+ years',
      image: 'https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
    },
    {
      name: 'Dr. Amit Patel',
      specialty: 'Neurology',
      qualification: 'MD, DM (Neurology)',
      experience: '18+ years',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
    },
    {
      name: 'Dr. Sneha Desai',
      specialty: 'Pediatrics',
      qualification: 'MBBS, MD (Pediatrics)',
      experience: '10+ years',
      image: 'https://images.unsplash.com/photo-1673865641073-4479f93a7776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
    },
    {
      name: 'Dr. Vikram Singh',
      specialty: 'Orthopedics',
      qualification: 'MS (Ortho), DNB',
      experience: '14+ years',
      image: 'https://images.unsplash.com/photo-1645066928295-2506defde470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
    },
    {
      name: 'Dr. Anjali Mehta',
      specialty: 'Cardiology',
      qualification: 'MD, DM (Cardiology)',
      experience: '11+ years',
      image: 'https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
    },
  ];

  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#2BB3A3] font-semibold text-sm uppercase tracking-wider">Our Doctors</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
            24 Experienced Specialist Doctors
          </h2>
          <p className="text-gray-600 text-lg">
            Highly qualified medical professionals dedicated to your health and wellbeing
          </p>
        </div>

        {/* Department Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveTab(dept)}
              className={`px-6 py-2.5 rounded-lg font-semibold transition ${
                activeTab === dept
                  ? 'bg-[#0F4C81] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2"
            >
              {/* Doctor Image */}
              <div className="relative h-64 bg-gradient-to-br from-[#0F4C81] to-[#2BB3A3] overflow-hidden">
                <ImageWithFallback
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover mix-blend-overlay opacity-90"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <div className="flex items-center space-x-1 text-sm">
                    <Award className="w-4 h-4 text-[#2BB3A3]" />
                    <span className="font-semibold text-gray-800">{doctor.experience}</span>
                  </div>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                <div className="text-[#2BB3A3] font-semibold mb-2">{doctor.specialty}</div>
                <p className="text-gray-600 text-sm mb-4">{doctor.qualification}</p>

                <button className="w-full px-6 py-3 bg-[#0F4C81] text-white rounded-lg hover:bg-[#0d3d66] transition font-semibold flex items-center justify-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-white text-[#0F4C81] border-2 border-[#0F4C81] rounded-lg hover:bg-[#0F4C81] hover:text-white transition font-semibold">
            View All 24 Doctors
          </button>
        </div>
      </div>
    </section>
  );
}
