import {
  Clock, Users, Activity, Heart,
  Shield, Stethoscope, Scissors, DollarSign
} from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Clock,
      title: '24×7 Emergency Care',
      description: 'Round-the-clock emergency services with rapid response trauma care',
      color: 'bg-red-50 text-red-600'
    },
    {
      icon: Users,
      title: 'Multispeciality Expertise',
      description: '14 departments with 24 specialist doctors under one roof',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: Activity,
      title: 'Modern Diagnostics',
      description: 'Advanced radiology and pathology lab with latest technology',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Stethoscope,
      title: 'Skilled Doctors',
      description: 'Highly qualified and experienced medical professionals',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: Heart,
      title: 'ICU Support',
      description: '10-bed ICU with advanced life support and monitoring',
      color: 'bg-pink-50 text-pink-600'
    },
    {
      icon: Shield,
      title: 'Compassionate Nursing',
      description: 'Dedicated nursing staff providing personalized patient care',
      color: 'bg-teal-50 text-teal-600'
    },
    {
      icon: Scissors,
      title: 'Surgical Care',
      description: 'Modern operation theaters with minimally invasive procedures',
      color: 'bg-orange-50 text-orange-600'
    },
    {
      icon: DollarSign,
      title: 'Affordable Healthcare',
      description: 'Quality medical care with transparent and affordable pricing',
      color: 'bg-cyan-50 text-cyan-600'
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#2BB3A3] font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Your Health, Our Priority
          </h2>
          <p className="text-gray-600 text-lg">
            Experience exceptional healthcare with our commitment to quality, compassion, and excellence
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 ${reason.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <reason.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#0F4C81] to-[#2BB3A3] rounded-3xl p-8 lg:p-12 text-white text-center shadow-2xl">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Trusted by Thousands of Families in Hinjewadi & Pune
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Join our family of satisfied patients experiencing world-class healthcare close to home
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-white text-[#0F4C81] rounded-lg hover:bg-gray-100 transition font-semibold shadow-lg">
              Book Appointment
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition font-semibold">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
