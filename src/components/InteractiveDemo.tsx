import { useState } from 'react';
import { MapPin, Calendar, CheckCircle2, AlertCircle } from 'lucide-react';

const sampleRoutes = [
  { country: 'Portugal', days: 45, schengen: true },
  { country: 'Spain', days: 30, schengen: true },
  { country: 'Morocco', days: 20, schengen: false },
  { country: 'France', days: 25, schengen: true }
];

export default function InteractiveDemo() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const totalSchengenDays = sampleRoutes
    .filter(r => r.schengen)
    .reduce((sum, r) => sum + r.days, 0);

  const isCompliant = totalSchengenDays <= 90;

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plan complex multi-country routes and instantly see if you're within visa limits
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Sample Route</h3>
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${isCompliant ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {isCompliant ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                <span className="font-semibold">{isCompliant ? 'Compliant' : 'Warning'}</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {sampleRoutes.map((route, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                    hoveredIndex === index
                      ? 'border-blue-500 bg-blue-50 shadow-md'
                      : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MapPin className={`w-5 h-5 ${hoveredIndex === index ? 'text-blue-600' : 'text-gray-500'}`} />
                      <div>
                        <p className="font-semibold text-gray-900">{route.country}</p>
                        <p className="text-sm text-gray-600">
                          {route.schengen ? 'Schengen Zone' : 'Non-Schengen'}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900">{route.days} days</p>
                      <p className="text-sm text-gray-600">planned</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gray-600" />
                  <span className="font-semibold text-gray-900">Schengen Days Used</span>
                </div>
                <span className={`text-2xl font-bold ${isCompliant ? 'text-green-600' : 'text-red-600'}`}>
                  {totalSchengenDays} / 90
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`h-3 rounded-full transition-all ${
                    isCompliant ? 'bg-green-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${Math.min((totalSchengenDays / 90) * 100, 100)}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Automatic Calculations</h4>
                  <p className="text-gray-600">
                    Bordermath instantly calculates your Schengen days and flags potential violations before you book anything.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="bg-teal-100 rounded-full p-3">
                  <Calendar className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Visual Timeline</h4>
                  <p className="text-gray-600">
                    See your entire journey laid out with color-coded compliance indicators and day-by-day breakdowns.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 rounded-full p-3">
                  <AlertCircle className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Smart Recommendations</h4>
                  <p className="text-gray-600">
                    Get alternative route suggestions when you're at risk of exceeding visa limits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
