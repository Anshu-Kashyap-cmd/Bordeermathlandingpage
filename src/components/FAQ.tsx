import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How does Bordermath calculate Schengen visa limits?',
    answer: 'Bordermath uses the official 90/180 day rolling calculation method. This means you can spend 90 days within any 180-day period in the Schengen zone. Our algorithm tracks every day and calculates your available days based on your entry and exit dates, updating in real-time as you adjust your travel plans.'
  },
  {
    question: 'Is Bordermath really free?',
    answer: 'Yes! Our basic plan is completely free forever and includes route planning, Schengen calculations, and compliance alerts for up to 3 countries. Premium plans offer advanced features like unlimited countries, policy change notifications, historical tracking, and priority support.'
  },
  {
    question: 'Which countries and visa types does Bordermath support?',
    answer: 'Bordermath covers 190+ countries and territories, with detailed support for the Schengen zone, US, UK, Canada, Australia, and most digital nomad visa programs. We continuously add new countries and update policies as they change. Our database includes tourist visas, digital nomad visas, and visa-free travel regulations.'
  },
  {
    question: 'How accurate are the visa calculations?',
    answer: 'Our calculations are based on official government sources and updated regularly. However, visa rules can change, and individual circumstances vary. We recommend using Bordermath as a planning tool and always confirming requirements with official sources or immigration lawyers before making final travel decisions.'
  },
  {
    question: 'Can Bordermath help if I\'ve already overstayed?',
    answer: 'Bordermath is designed to prevent overstays by alerting you before they happen. If you\'ve already overstayed, we recommend consulting with an immigration lawyer. Our tool can help you plan future travel to avoid additional issues, but past violations require professional legal advice.'
  },
  {
    question: 'What makes Bordermath different from other travel planners?',
    answer: 'Unlike general travel apps, Bordermath specializes in visa compliance for long-term travelers. We handle the complex mathematics of rolling date calculations, support multiple overlapping visa rules, provide real-time alerts, and offer route optimization specifically designed for digital nomads and frequent travelers.'
  },
  {
    question: 'Do you share my travel data?',
    answer: 'Never. Your travel plans and personal information are private and encrypted. We don\'t sell or share your data with third parties. You can delete your account and all associated data at any time. We\'re GDPR compliant and take your privacy seriously.'
  },
  {
    question: 'Can I use Bordermath for business travel?',
    answer: 'Absolutely! Many business travelers use Bordermath to manage frequent international trips while staying compliant with visa regulations. Our premium plans include features specifically useful for business travelers, like multiple trip tracking and export capabilities for expense reporting.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Bordermath and visa planning
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-blue-50 rounded-2xl border border-blue-100">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-4">
            Our support team is here to help you navigate visa planning
          </p>
          <a
            href="mailto:support@bordermath.com"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
