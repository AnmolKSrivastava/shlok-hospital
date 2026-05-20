import { useState } from 'react';
import { Thermometer, Stethoscope, Heart, Activity, Baby, Bone, Ear, Brain, Scissors } from 'lucide-react';

export default function Treatments() {
  const [activeTab, setActiveTab] = useState('Treatments');

  const treatments = [
    { icon: Thermometer, name: 'Viral Fever', category: 'General Medicine' },
    { icon: Stethoscope, name: 'General Medicine', category: 'Primary Care' },
    { icon: Activity, name: 'Hemorrhoids', category: 'Gastrology' },
    { icon: Heart, name: 'Cardiac Evaluation', category: 'Cardiology' },
    { icon: Baby, name: 'Pediatric Care', category: 'Pediatrics' },
    { icon: Bone, name: 'Orthopaedic Care', category: 'Orthopedics' },
    { icon: Ear, name: 'ENT Care', category: 'ENT' },
    { icon: Brain, name: 'Neurological Care', category: 'Neurology' },
  ];

  const surgeries = [
    { icon: Scissors, name: 'Minimally Invasive Urology', category: 'Urology' },
    { icon: Scissors, name: 'General Surgical Procedures', category: 'Surgery' },
    { icon: Scissors, name: 'Orthopedic Surgeries', category: 'Orthopedics' },
    { icon: Scissors, name: 'Emergency Procedures', category: 'Emergency' },
    { icon: Scissors, name: 'Gynecological Surgeries', category: 'Gynecology' },
    { icon: Scissors, name: 'Laparoscopic Surgery', category: 'General Surgery' },
  ];

  const currentList = activeTab === 'Treatments' ? treatments : surgeries;

  return (
    <section className="py-20 bg-[#F7FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#2BB3A3] font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Treatments & Procedures
          </h2>
          <p className="text-gray-600 text-lg">
            Comprehensive medical and surgical care across multiple specialties
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('Treatments')}
            className={`px-8 py-3 rounded-xl font-semibold transition-all ${
              activeTab === 'Treatments'
                ? 'bg-[#0F4C81] text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Medical Treatments
          </button>
          <button
            onClick={() => setActiveTab('Surgeries')}
            className={`px-8 py-3 rounded-xl font-semibold transition-all ${
              activeTab === 'Surgeries'
                ? 'bg-[#0F4C81] text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Surgical Procedures
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentList.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group cursor-pointer"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#0F4C81] to-[#2BB3A3] text-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{item.name}</h3>
              <p className="text-sm text-[#2BB3A3] font-semibold">{item.category}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Need a Specific Treatment or Procedure?
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                Our team of specialists is ready to provide personalized care for your medical needs. Book a consultation today.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-[#0F4C81] text-white rounded-lg hover:bg-[#0d3d66] transition font-semibold">
                  Book Consultation
                </button>
                <button className="px-8 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-semibold">
                  View All Services
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#F7FAFC] rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-[#0F4C81] mb-2">100+</div>
                <div className="text-sm text-gray-600">Procedures</div>
              </div>
              <div className="bg-[#F7FAFC] rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-[#2BB3A3] mb-2">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="bg-[#F7FAFC] rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-[#0F4C81] mb-2">24×7</div>
                <div className="text-sm text-gray-600">Availability</div>
              </div>
              <div className="bg-[#F7FAFC] rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-[#2BB3A3] mb-2">5000+</div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
