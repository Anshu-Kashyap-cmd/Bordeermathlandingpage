import { Calendar, AlertTriangle, Map, TrendingUp, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Map,
    title: 'Smart Route Optimization',
    description: 'Automatically sequence your travel based on visa constraints and Schengen 90/180 day rules. Get the most time in your favorite destinations.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: AlertTriangle,
    title: 'Compliance Alerts',
    description: 'Real-time warnings when your planned route risks violating visa limits. Catch issues before you book flights or make commitments.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    icon: Calendar,
    title: 'Schengen Calculator',
    description: 'Track your days in the Schengen zone with precision. Visual timeline shows exactly when you can return and for how long.',
    color: 'text-teal-600',
    bgColor: 'bg-teal-50'
  },
  {
    icon: TrendingUp,
    title: 'Policy Change Tracking',
    description: 'Stay ahead with automatic updates when visa policies change. Get notified about new digital nomad visas and rule modifications.',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: Shield,
    title: 'Multi-Country Support',
    description: 'Beyond just Schengen. Track visa requirements across 190+ countries and territories for comprehensive global planning.',
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    icon: Zap,
    title: 'Instant Recalculation',
    description: 'Change your dates or destinations and see updated compliance status instantly. Experiment with different routes in real-time.',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50'
  }
];

export default function Features() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to Travel Confidently
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bordermath handles the complexity of international visa regulations so you can focus on your journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className={`${feature.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
