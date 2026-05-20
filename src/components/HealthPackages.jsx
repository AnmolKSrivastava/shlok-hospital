import { Check, Heart, Users, Activity, Droplet } from 'lucide-react';

export default function HealthPackages() {
  const packages = [
    {
      icon: Activity,
      name: 'Basic Health Checkup',
      price: '₹1,499',
      features: [
        'Complete Blood Count',
        'Blood Sugar Test',
        'Lipid Profile',
        'Kidney Function Test',
        'Liver Function Test',
        'General Physician Consultation'
      ],
      color: 'border-blue-500',
      popular: false
    },
    {
      icon: Heart,
      name: 'Women\'s Health Package',
      price: '₹2,999',
      features: [
        'Gynecologist Consultation',
        'Pap Smear Test',
        'Breast Examination',
        'Thyroid Profile',
        'Bone Density Test',
        'Vitamin D & B12 Test'
      ],
      color: 'border-pink-500',
      popular: true
    },
    {
      icon: Heart,
      name: 'Cardiac Screening',
      price: '₹3,499',
      features: [
        'ECG & Echo Test',
        'Cardiologist Consultation',
        'Lipid Profile',
        'Blood Pressure Monitoring',
        'Stress Test',
        'Cardiac Risk Assessment'
      ],
      color: 'border-red-500',
      popular: false
    },
    {
      icon: Users,
      name: 'Senior Citizen Package',
      price: '₹3,999',
      features: [
        'Comprehensive Health Checkup',
        'Bone Density Scan',
        'Eye Examination',
        'Diabetes Screening',
        'Geriatric Consultation',
        'Medicine Review'
      ],
      color: 'border-purple-500',
      popular: false
    },
    {
      icon: Droplet,
      name: 'Diabetes Package',
      price: '₹2,499',
      features: [
        'HbA1c Test',
        'Fasting & PP Blood Sugar',
        'Kidney Function Test',
        'Diabetic Foot Assessment',
        'Dietician Consultation',
        'Eye Screening'
      ],
      color: 'border-teal-500',
      popular: false
    },
  ];

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#2BB3A3] font-semibold text-sm uppercase tracking-wider">Health Packages</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Comprehensive Health Checkup Packages
          </h2>
          <p className="text-gray-600 text-lg">
            Affordable preventive healthcare packages designed for your wellness
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 ${pkg.color} overflow-hidden ${
                pkg.popular ? 'ring-4 ring-[#2BB3A3] ring-offset-4' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-[#2BB3A3] text-white px-4 py-1 text-xs font-bold rounded-bl-xl">
                  POPULAR
                </div>
              )}

              <div className="p-6">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br from-[#0F4C81] to-[#2BB3A3] text-white rounded-xl flex items-center justify-center mb-4`}>
                  <pkg.icon className="w-8 h-8" />
                </div>

                {/* Package Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-lg font-semibold text-[#2BB3A3] bg-[#2BB3A3]/10 px-4 py-2 rounded-lg inline-block">
                    Prices Announcing Soon
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-[#2BB3A3] flex-shrink-0 mr-2 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full py-3 rounded-lg font-semibold transition ${
                  pkg.popular
                    ? 'bg-[#2BB3A3] text-white hover:bg-[#249a8b]'
                    : 'bg-[#0F4C81] text-white hover:bg-[#0d3d66]'
                }`}>
                  Book Package
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need a customized health package?</p>
          <button className="px-8 py-4 bg-white text-[#0F4C81] border-2 border-[#0F4C81] rounded-lg hover:bg-[#0F4C81] hover:text-white transition font-semibold">
            Request Custom Package
          </button>
        </div>
      </div>
    </section>
  );
}
