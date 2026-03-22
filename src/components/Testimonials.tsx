import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Digital Nomad & Developer',
    location: 'Currently in Portugal',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    quote: 'Bordermath saved me from a costly Schengen overstay. The visual timeline made it crystal clear when I needed to leave and when I could return. Essential tool for any digital nomad.',
    rating: 5
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Remote Product Manager',
    location: 'Traveling full-time',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    quote: 'I used to spend hours in spreadsheets tracking my days. Bordermath does it automatically and even suggests optimal routes. The compliance alerts alone are worth it.',
    rating: 5
  },
  {
    name: 'Emily Thompson',
    role: 'Content Creator & Traveler',
    location: 'Based in Barcelona',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    quote: 'Finally, a tool that understands the complexity of European visa rules. The policy update notifications have helped me plan around changing regulations. Highly recommend!',
    rating: 5
  },
  {
    name: 'David Kim',
    role: 'Entrepreneur & World Traveler',
    location: 'Between continents',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    quote: 'As someone who travels to 20+ countries yearly, Bordermath is indispensable. It handles multi-country complexity that no other tool can. The premium features are absolutely worth it.',
    rating: 5
  },
  {
    name: 'Lisa Anderson',
    role: 'Remote Consultant',
    location: 'European explorer',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    quote: 'The instant recalculation feature is amazing. I can experiment with different routes and immediately see if they work. No more anxiety about visa compliance!',
    rating: 5
  },
  {
    name: 'Ahmed Hassan',
    role: 'Software Engineer',
    location: 'Digital nomad since 2019',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    quote: 'Bordermath transformed how I plan my travel. The interface is intuitive, the calculations are accurate, and the peace of mind is priceless. This is the future of travel planning.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Travelers Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of digital nomads who rely on Bordermath for stress-free visa planning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
