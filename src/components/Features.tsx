import { motion } from "framer-motion";
import { Leaf, HeartPulse, ShieldCheck, BarChart2, Clock, Lightbulb, BookHeart, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export default function Features({ id }: { id?: string }) {
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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section 
      id={id} 
      className="py-16 md:py-24 scroll-mt-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden"
    >
      {/* Floating decorative elements */}
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
        className="absolute top-1/4 right-1/4 text-teal-400/10 text-4xl md:text-5xl"
      >
        <Leaf className="w-10 h-10 md:w-12 md:h-12" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gray-700/50 px-3 py-1 rounded-full border border-teal-400/20 mb-4 md:mb-5">
            <Zap className="text-teal-400 h-3 w-3" />
            <span className="text-teal-100 text-xs">Therapeutic Tools</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-100 mb-3 md:mb-4">
            <span className="font-medium text-teal-400">Your Healing</span> Journey, Enhanced
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            TherapEase combines AI responsiveness with therapeutic principles for transformative self-care.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={!isMobile ? { y: -5 } : undefined}
              transition={{ 
                duration: 0.5, 
                delay: Math.min(index * 0.1, 0.4),
               
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-7 border border-teal-400/20 hover:border-teal-400/40 transition-all shadow-lg hover:shadow-teal-400/10 relative overflow-hidden"
            >
              {/* Animated background element */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-teal-400/5 via-transparent to-transparent pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={!isMobile ? { opacity: 1 } : {}}
                transition={{ duration: 0.3 }}
              />
              
              <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-teal-400/10 rounded-lg mb-4 md:mb-5">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-medium text-gray-100 mb-2 md:mb-3">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-14 md:mt-16"
        >
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 mx-auto text-sm md:text-base shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 transition-all"
          >
            <BookHeart className="w-4 h-4 md:w-5 md:h-5" />
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}