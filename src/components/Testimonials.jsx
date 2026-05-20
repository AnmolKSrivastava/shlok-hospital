import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rahul Sharma',
      treatment: 'Cardiac Surgery',
      rating: 5,
      review: 'Excellent care and facilities. The doctors are highly professional and caring. My cardiac surgery was successful and the post-operative care was outstanding.',
      avatar: 'RS'
    },
    {
      name: 'Priya Deshmukh',
      treatment: 'Maternity Care',
      rating: 5,
      review: 'The entire maternity team at Shlok Hospital made my delivery experience wonderful. Dr. Sharma and the nursing staff were exceptional. Highly recommended!',
      avatar: 'PD'
    },
    {
      name: 'Amit Kulkarni',
      treatment: 'Orthopedic Treatment',
      rating: 5,
      review: 'Had knee replacement surgery here. The doctors are experts in their field and the physiotherapy support helped me recover quickly. Thank you team!',
      avatar: 'AK'
    },
    {
      name: 'Sneha Patil',
      treatment: 'General Health Checkup',
      rating: 5,
      review: 'Very organized and professional. The health checkup package was comprehensive and affordable. All reports were explained clearly by the doctor.',
      avatar: 'SP'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#F7FAFC] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#2BB3A3] font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-gray-600 text-lg">
            Real experiences from real patients who trust us with their healthcare
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-[#2BB3A3] opacity-20" />

              {/* Avatar */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0F4C81] to-[#2BB3A3] rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div className="ml-3">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-xs text-[#2BB3A3]">{testimonial.treatment}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-700 text-sm leading-relaxed">
                "{testimonial.review}"
              </p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid sm:grid-cols-3 gap-6 mt-16">
          <div className="bg-gradient-to-br from-[#0F4C81] to-[#2BB3A3] text-white rounded-2xl p-8 text-center shadow-xl">
            <div className="text-4xl font-bold mb-2">5000+</div>
            <div className="text-sm opacity-90">Happy Patients</div>
          </div>
          <div className="bg-gradient-to-br from-[#2BB3A3] to-[#0F4C81] text-white rounded-2xl p-8 text-center shadow-xl">
            <div className="text-4xl font-bold mb-2">4.8/5</div>
            <div className="text-sm opacity-90">Average Rating</div>
          </div>
          <div className="bg-gradient-to-br from-[#0F4C81] to-[#2BB3A3] text-white rounded-2xl p-8 text-center shadow-xl">
            <div className="text-4xl font-bold mb-2">98%</div>
            <div className="text-sm opacity-90">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
