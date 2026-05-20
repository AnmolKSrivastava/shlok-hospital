import { Bed, Heart, Star } from 'lucide-react';

export default function BedAdmission() {
  const accommodations = [
    {
      icon: Star,
      title: 'Super Deluxe Room',
      quantity: '1 Room',
      features: ['Private AC Room', 'Attached Bathroom', 'LCD TV', 'Dedicated Nursing', 'Premium Amenities'],
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      price: 'Premium'
    },
    {
      icon: Star,
      title: 'Semi Deluxe Room',
      quantity: '1 Room',
      features: ['Semi-Private Room', 'AC Facility', 'TV Available', 'Quality Care', 'Modern Amenities'],
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      price: 'Moderate'
    },
    {
      icon: Bed,
      title: 'General Ward',
      quantity: '11 Beds',
      features: ['6 Male Beds', '5 Female Beds', 'Separate Sections', 'Comfortable Beds', '24×7 Nursing Care'],
      color: 'bg-gradient-to-br from-teal-500 to-green-600',
      price: 'Affordable'
    },
    {
      icon: Heart,
      title: 'ICU',
      quantity: '10 Beds',
      features: ['Advanced Monitoring', 'Life Support Systems', 'Critical Care', 'Specialist Supervision', '24×7 Availability'],
      color: 'bg-gradient-to-br from-red-500 to-pink-600',
      price: 'Critical Care'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-[#F7FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#2BB3A3] font-semibold text-sm uppercase tracking-wider">Patient Accommodation</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Comfortable & Modern Patient Care Facilities
          </h2>
          <p className="text-gray-600 text-lg">
            22 total beds across various accommodation types for optimal patient comfort and care
          </p>
        </div>

        {/* Accommodations Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {accommodations.map((room, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Header with gradient */}
              <div className={`${room.color} text-white p-6 text-center`}>
                <room.icon className="w-12 h-12 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-1">{room.title}</h3>
                <div className="text-sm opacity-90">{room.quantity}</div>
              </div>

              {/* Features */}
              <div className="p-6">
                <ul className="space-y-2 mb-4">
                  {room.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-[#2BB3A3] rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-gray-100">
                  <div className="text-sm text-gray-500">Category</div>
                  <div className="text-lg font-bold text-[#0F4C81]">{room.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="bg-gradient-to-r from-[#0F4C81] to-[#2BB3A3] rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">22</div>
              <div className="text-sm opacity-90">Total Beds</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10</div>
              <div className="text-sm opacity-90">ICU Beds</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">11</div>
              <div className="text-sm opacity-90">General Ward Beds</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">2</div>
              <div className="text-sm opacity-90">Premium Rooms</div>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="px-8 py-4 bg-white text-[#0F4C81] rounded-lg hover:bg-gray-100 transition font-semibold shadow-lg">
              Check Bed Availability
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
