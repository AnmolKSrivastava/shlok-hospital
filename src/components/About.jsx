import { CheckCircle2, TrendingUp, Award, Shield } from 'lucide-react';
import { ImageWithFallback } from './utils/ImageWithFallback';
import hospitalReception from '../assets/reception.webp';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-block px-4 py-2 bg-[#2BB3A3]/10 text-[#2BB3A3] rounded-full text-sm font-semibold mb-4">
                About Shlok Hospital
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Compassionate Healthcare for Every Family
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                <span className="font-semibold text-gray-900">Shlok Hospital</span> is Hinjewadi's trusted multispeciality healthcare provider, delivering quality medical care with compassion and expertise. Our 14 departments and 24 specialist doctors work together to provide comprehensive treatment under one roof.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-[#0F4C81] rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">24 Specialist Doctors</h4>
                  <p className="text-gray-600 text-sm">Highly qualified medical professionals across all major specialties</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-[#2BB3A3] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Advanced Medical Infrastructure</h4>
                  <p className="text-gray-600 text-sm">ICU, modern diagnostics, radiology, and surgical facilities</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-[#E63946] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">24×7 Emergency Services</h4>
                  <p className="text-gray-600 text-sm">Round-the-clock emergency care with rapid response team</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="border-l-4 border-[#0F4C81] pl-4">
                <div className="text-3xl font-bold text-[#0F4C81]">5000+</div>
                <div className="text-sm text-gray-600">Patients Treated</div>
              </div>
              <div className="border-l-4 border-[#2BB3A3] pl-4">
                <div className="text-3xl font-bold text-[#2BB3A3]">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="border-l-4 border-[#E63946] pl-4">
                <div className="text-3xl font-bold text-[#E63946]">98%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative lg:order-first">
            <div className="relative rounded-3xl overflow-hidden">
              <ImageWithFallback
                src={hospitalReception}
                alt="Shlok Hospital - Reception Area"
                className="w-full h-[600px] object-cover"
                fallbackSrc="https://images.unsplash.com/photo-1769698678497-c41f0ab47c3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Achievement Card */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 max-w-[200px]">
              <TrendingUp className="w-8 h-8 text-[#2BB3A3] mb-2" />
              <div className="text-2xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600">Patient Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
