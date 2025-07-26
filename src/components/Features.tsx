import { motion } from "framer-motion";
import { Leaf, HeartPulse, ShieldCheck, BarChart2, Clock, Lightbulb, BookHeart } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <HeartPulse className="w-6 h-6 md:w-8 md:h-8 text-teal-400" />,
      title: "Empathic AI Dialogue",
      description: "Our AI adapts to your emotional state with therapeutic framing, offering responses that validate and guide."
    },
    {
      icon: <Leaf className="w-6 h-6 md:w-8 md:h-8 text-teal-400" />,
      title: "Mindfulness Integration",
      description: "Built-in grounding exercises help you pause and reflect during difficult moments."
    },
    {
      icon: <BarChart2 className="w-6 h-6 md:w-8 md:h-8 text-teal-400" />,
      title: "Progress Tracking",
      description: "Visualize your emotional patterns through AI-generated insights."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-teal-400" />,
      title: "Clinically Informed",
      description: "Designed with therapists using evidence-based techniques."
    },
    {
      icon: <Clock className="w-6 h-6 md:w-8 md:h-8 text-teal-400" />,
      title: "Quick Check-ins",
      description: "5-minute guided reflections for busy days."
    },
    {
      icon: <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-teal-400" />,
      title: "Weekly Insights",
      description: "Personalized reflections highlighting your growth."
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 md:mb-16 px-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-100 mb-3 md:mb-4">
            <span className="font-medium text-teal-400">Your Healing</span> Journey, Enhanced
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            TherapEase combines AI responsiveness with therapeutic principles for transformative journaling.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 sm:px-0">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: Math.min(index * 0.1, 0.4) 
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-gray-800/50 rounded-xl p-6 md:p-8 border border-teal-400/20 hover:border-teal-400/40 transition-all"
            >
              <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-teal-400/10 rounded-lg mb-3 md:mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-medium text-gray-100 mb-2">{feature.title}</h3>
              <p className="text-sm md:text-base text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 bg-gray-700/30 rounded-xl p-6 md:p-8 border border-teal-400/20 text-center mx-4 sm:mx-0"
        >
          <h3 className="text-xl md:text-2xl font-medium text-gray-100 mb-3 md:mb-4">Ready to begin your therapeutic journey?</h3>
          <button className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-medium inline-flex items-center gap-2 text-sm md:text-base">
            <BookHeart className="w-4 h-4 md:w-5 md:h-5" />
            Start Journaling Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}