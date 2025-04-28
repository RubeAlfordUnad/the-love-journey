import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, Heart, HeartPulse } from 'lucide-react';

const plans = [
  {
    name: '1 Month Plan',
    price: '$300',
    features: [
      '5 potential partners selected after thorough research',
      'Journey Assistant for chat support & weekly check-ins',
      'Personalized relationship tips during the month',
    ],
    recommended: false,
    icon: Heart,
  },
  {
    name: '2 Month Plan',
    price: '$560',
    features: [
      'All 1-Month Plan benefits',
      '2 Match opportunities if the first one doesn’t work',
      'Priority journey support with video sessions',
      'Special journey coaching for building deeper connections',
    ],
    recommended: true,
    icon: HeartHandshake,
  },
  {
    name: '3 Month Plan',
    price: '$800',
    features: [
      'All 2-Month Plan benefits',
      'Extended journey support throughout 3 months',
      'Personalized progress updates & deeper coaching',
      'Bonus invitations to exclusive love journey events',
    ],
    recommended: false,
    icon: HeartPulse,
  },
];

export default function Plans() {
  return (
    <section id="plans" className="py-20 bg-gradient-to-b from-pink-50 via-rose-50 to-white px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-pink-700 mb-14">
          Choose Your Journey Plan
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {plans.map((plan, idx) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                className={`relative flex flex-col bg-white rounded-3xl shadow-md p-8 transition-all duration-500 ease-in-out
                  ${plan.recommended ? 'border-4 border-pink-400 shadow-lg scale-105' : 'hover:shadow-xl hover:scale-105'}
                `}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Recommended Badge (inside plan card) */}
                {plan.recommended && (
                  <div className="absolute top-4 left-4 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Recommended
                  </div>
                )}

                {/* Plan Icon */}
                <Icon className="text-pink-400 mx-auto mb-4 transform transition-transform duration-300 ease-in-out hover:scale-110" size={36} />

                {/* Plan Title */}
                <h3 className="text-2xl font-bold text-pink-700 mb-2">{plan.name}</h3>

                {/* Plan Price */}
                <p className="text-3xl font-extrabold text-gray-800 mb-6">{plan.price}</p>

                {/* Features */}
                <ul className="text-gray-600 mb-8 space-y-3 text-left text-sm">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-pink-500 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.08, backgroundColor: '#f86161' }}
                  className="relative mt-auto py-3 px-6 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-red-400 text-white font-semibold shadow-md hover:shadow-xl transition-all duration-300"
                >
                  {/* Sparkle Animation */}
                  <span className="absolute inset-0 flex justify-center items-center">
                    <span className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping"></span>
                  </span>
                  Choose Plan
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
