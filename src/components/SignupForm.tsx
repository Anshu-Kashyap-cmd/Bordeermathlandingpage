import { useState, FormEvent } from 'react';
import { Mail, User, MapPin, Loader2, CheckCircle2 } from 'lucide-react';
import { submitSignup } from '../lib/supabase';

interface SignupFormProps {
  source?: string;
}

export default function SignupForm({ source = 'landing_page' }: SignupFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    travelStyle: '',
    regions: [] as string[],
    newsletter: true
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const travelStyles = [
    'Digital Nomad',
    'Long-term Traveler',
    'Remote Worker',
    'Frequent Business Traveler',
    'Retiree/Slow Traveler'
  ];

  const regions = [
    'Europe/Schengen',
    'Asia',
    'Americas',
    'Africa',
    'Middle East',
    'Oceania'
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await submitSignup({
        name: formData.name,
        email: formData.email,
        travel_preferences: {
          travel_style: formData.travelStyle,
          regions: formData.regions,
          frequency: 'regular'
        },
        source,
        subscribed_to_newsletter: formData.newsletter
      });

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        travelStyle: '',
        regions: [],
        newsletter: true
      });
    } catch (err) {
      if (err instanceof Error) {
        if (err.message.includes('duplicate')) {
          setError('This email is already registered. Check your inbox for our welcome email!');
        } else {
          setError('Something went wrong. Please try again.');
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const toggleRegion = (region: string) => {
    setFormData(prev => ({
      ...prev,
      regions: prev.regions.includes(region)
        ? prev.regions.filter(r => r !== region)
        : [...prev.regions, region]
    }));
  };

  if (success) {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-2xl mx-auto text-center">
        <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Bordermath!</h3>
        <p className="text-lg text-gray-600 mb-6">
          Check your email for next steps and early access to our visa planning tool.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="text-blue-600 font-semibold hover:text-blue-700"
        >
          Sign up another email
        </button>
      </div>
    );
  }

  return (
    <section id="signup" className="py-24 px-4 bg-gradient-to-br from-blue-600 to-teal-600">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Start Planning Your Journey
          </h2>
          <p className="text-xl text-blue-100">
            Join thousands of travelers who trust Bordermath for visa compliance
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Travel Style
            </label>
            <select
              required
              value={formData.travelStyle}
              onChange={(e) => setFormData({ ...formData, travelStyle: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            >
              <option value="">Select your travel style</option>
              {travelStyles.map((style) => (
                <option key={style} value={style}>{style}</option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              <MapPin className="inline w-4 h-4 mr-1" />
              Regions of Interest (select all that apply)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {regions.map((region) => (
                <button
                  key={region}
                  type="button"
                  onClick={() => toggleRegion(region)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    formData.regions.includes(region)
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.newsletter}
                onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-600">
                Send me updates about new features, visa policy changes, and travel tips. Unsubscribe anytime.
              </span>
            </label>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Creating your account...
              </>
            ) : (
              'Get Free Access'
            )}
          </button>

          <p className="text-center text-sm text-gray-500 mt-4">
            By signing up, you agree to our Terms of Service and Privacy Policy
          </p>
        </form>
      </div>
    </section>
  );
}
