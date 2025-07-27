import { motion } from "framer-motion";
import { Check, Heart, Zap, Sparkles, Star, Users, MessageSquare, Calendar, BookOpen, Award } from "lucide-react";
import { useState } from "react";

export default function Pricing() {
  const [annualBilling, setAnnualBilling] = useState(false);

  const plans = [
    {
      name: "Basic Care",
      price: annualBilling ? "₹0" : "₹0",
      description: "Essential mental health support",
      cta: "Get Started",
      popular: false,
      features: [
        { text: "AI Chat Support (24/7)", icon: MessageSquare },
        { text: "Weekly Mental Health Tips", icon: BookOpen },
        { text: "Basic Mood Tracking", icon: Heart },
        { text: "Community Access", icon: Users }
      ],
      limitations: [
        "No Live Sessions",
        "No Personalized Plans"
      ],
      bg: "bg-gray-800/50",
      border: "border-gray-700"
    },
    {
      name: "Premium Care",
      price: annualBilling ? "₹4,790" : "₹499",
      period: annualBilling ? "per year" : "per month",
      description: "Complete mental wellness toolkit",
      cta: "Start Healing",
      popular: true,
      features: [
        { text: "AI + Human Support", icon: Users },
        { text: "4 Live Therapy Sessions", icon: Calendar },
        { text: "Personalized Wellness Plans", icon: Award },
        { text: "Emotional Journal Tracker", icon: BookOpen },
        { text: "Priority Support", icon: Zap },
        { text: "Sleep Stories Library", icon: Sparkles }
      ],
      bg: "bg-gradient-to-br from-teal-500/10 to-teal-600/20",
      border: "border-teal-400/30"
    },
    {
      name: "Complete Care",
      price: annualBilling ? "₹9,590" : "₹999",
      period: annualBilling ? "per year" : "per month",
      description: "Full family mental health solution",
      cta: "Join Now",
      popular: false,
      features: [
        { text: "Everything in Premium", icon: Check },
        { text: "Unlimited Live Sessions", icon: Calendar },
        { text: "Family Access (3 members)", icon: Users },
        { text: "24/7 Crisis Support", icon: Zap },
        { text: "Quarterly Wellness Reports", icon: Award },
        { text: "Couples/Family Therapy", icon: Heart }
      ],
      bg: "bg-gray-800/50",
      border: "border-purple-400/30"
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-20 scroll-mt-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        animate={{
          rotate: [0, 360],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 left-1/4 text-teal-400/10 text-4xl md:text-5xl"
      >
        <Sparkles className="w-10 h-10 md:w-12 md:h-12" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gray-700/50 px-3 py-1 rounded-full border border-teal-400/20 mb-3 md:mb-4">
            <Zap className="text-teal-400 h-3 w-3" />
            <span className="text-teal-100 text-xs">Simple Pricing</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white mb-2 md:mb-3">
            <span className="text-teal-400 font-medium">Affordable</span> Care for Every Mind
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
            Choose a plan that fits your needs – no hidden costs, no pressure.
          </p>
        </motion.div>

        {/* Billing toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex justify-center mb-8 md:mb-12"
        >
          <div className="bg-gray-800/50 rounded-full p-1 border border-gray-700 flex">
            <button
              onClick={() => setAnnualBilling(false)}
              className={`px-4 py-2 text-sm rounded-full transition-all ${!annualBilling ? 'bg-teal-500 text-white' : 'text-gray-300'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnualBilling(true)}
              className={`px-4 py-2 text-sm rounded-full transition-all ${annualBilling ? 'bg-teal-500 text-white' : 'text-gray-300'}`}
            >
              Annual (20% off)
            </button>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative rounded-xl border ${plan.border} ${plan.bg} backdrop-blur-md p-6 flex flex-col h-full transition-all ${plan.popular ? 'shadow-lg shadow-teal-400/10' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-teal-500 text-white text-xs font-medium px-3 py-1 rounded-full flex items-center">
                  <Star className="w-3 h-3 mr-1" />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-medium text-white mb-1">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="text-3xl font-bold text-white mb-1">
                  {plan.price}
                  {plan.period && (
                    <span className="text-gray-400 text-base font-normal"> / {plan.period}</span>
                  )}
                </div>
                {annualBilling && plan.name !== "Basic Care" && (
                  <div className="text-teal-400 text-sm">Save 20% vs monthly</div>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <feature.icon className="w-4 h-4 text-teal-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature.text}</span>
                  </li>
                ))}
              </ul>

              {plan.limitations && (
                <div className="mb-6">
                  <h4 className="text-xs text-gray-500 uppercase mb-2">Not included</h4>
                  <ul className="space-y-2">
                    {plan.limitations.map((limitation, i) => (
                      <li key={i} className="text-gray-500 text-sm flex items-start">
                        <span className="mr-2">✕</span>
                        {limitation}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 mt-auto ${plan.popular ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white' : 'bg-gray-700 hover:bg-gray-600 text-white'}`}
              >
                {plan.cta}
                {plan.popular && <Heart className="w-4 h-4" />}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-6">
            All plans come with a 14-day money-back guarantee. Need help choosing? Our support team is here.
          </p>
          <a href="#faq" className="text-teal-400 hover:text-teal-300 text-sm font-medium inline-flex items-center">
            Compare all plans
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}