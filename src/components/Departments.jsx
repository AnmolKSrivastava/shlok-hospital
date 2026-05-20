import {
  Activity, Heart, Baby, Bone, Brain, Ear,
  Stethoscope, Syringe, UserCheck, Zap, Droplet, Microscope, Wind
} from 'lucide-react';

export default function Departments() {
  const departments = [
    { icon: Stethoscope, name: 'Medicine', description: 'General medical care and treatment', color: 'bg-blue-50 text-blue-600' },
    { icon: Activity, name: 'General Medicine', description: 'Comprehensive health management', color: 'bg-green-50 text-green-600' },
    { icon: Droplet, name: 'Gastrology', description: 'Digestive system specialists', color: 'bg-purple-50 text-purple-600' },
    { icon: Heart, name: 'Gynecology', description: 'Women\'s health and wellness', color: 'bg-pink-50 text-pink-600' },
    { icon: Heart, name: 'Cardiology', description: 'Heart and vascular care', color: 'bg-red-50 text-red-600' },
    { icon: UserCheck, name: 'Physiotherapy', description: 'Physical rehabilitation therapy', color: 'bg-teal-50 text-teal-600' },
    { icon: Zap, name: 'Radiology', description: 'Advanced imaging diagnostics', color: 'bg-yellow-50 text-yellow-600' },
    { icon: Bone, name: 'Orthopaedics', description: 'Bone and joint treatment', color: 'bg-orange-50 text-orange-600' },
    { icon: Baby, name: 'Pediatrics', description: 'Child healthcare services', color: 'bg-cyan-50 text-cyan-600' },
    { icon: Ear, name: 'ENT', description: 'Ear, nose, and throat care', color: 'bg-indigo-50 text-indigo-600' },
    { icon: Brain, name: 'Neurology', description: 'Neurological care and treatment', color: 'bg-violet-50 text-violet-600' },
    { icon: Wind, name: 'Urology', description: 'Urinary system specialists', color: 'bg-sky-50 text-sky-600' },
    { icon: Syringe, name: 'Anaesthesia', description: 'Anesthesia and pain management', color: 'bg-slate-50 text-slate-600' },
    { icon: Microscope, name: 'Pathology', description: 'Laboratory diagnostics', color: 'bg-emerald-50 text-emerald-600' },
  ];

  return (
    <section id="departments" className="py-20 bg-[#F7FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#2BB3A3] font-semibold text-sm uppercase tracking-wider">Our Departments</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
            14 Speciality Departments
          </h2>
          <p className="text-gray-600 text-lg">
            Comprehensive multispeciality care with expert doctors across all major medical fields
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-gray-100"
            >
              <div className={`w-14 h-14 ${dept.color} rounded-lg flex items-center justify-center mb-4`}>
                <dept.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{dept.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{dept.description}</p>
              <button className="text-[#0F4C81] font-semibold text-sm hover:text-[#2BB3A3] transition flex items-center space-x-1">
                <span>View Doctors</span>
                <span>→</span>
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-[#0F4C81] text-white rounded-lg hover:bg-[#0d3d66] transition font-semibold shadow-lg">
            Explore All Departments
          </button>
        </div>
      </div>
    </section>
  );
}
