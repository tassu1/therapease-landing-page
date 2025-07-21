import { motion } from "framer-motion";

const features = [
  {
    icon: "🧘‍♀️",
    title: "Private Journaling",
    desc: "Release your thoughts in a peaceful space that's just for you ",
    color: "bg-purple-100 dark:bg-purple-900/30",
    hoverGlow: "hover:shadow-purple-300/40 dark:hover:shadow-purple-900/20"
  },
  {
    icon: "🤖", 
    title: "AI-Powered Talk",
    desc: "An empathetic listener who helps you reflect and grow gently ",
    color: "bg-blue-100 dark:bg-blue-900/30",
    hoverGlow: "hover:shadow-blue-300/40 dark:hover:shadow-blue-900/20"
  },
  {
    icon: "🔒",
    title: "Privacy First",
    desc: "Your secrets stay yours - always secure and never judged ",
    color: "bg-pink-100 dark:bg-pink-900/30",
    hoverGlow: "hover:shadow-pink-300/40 dark:hover:shadow-pink-900/20"
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          How It Helps You Heal
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`${feature.color} p-8 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all ${feature.hoverGlow}`}
            >
              <motion.span 
                whileHover={{ scale: 1.1 }}
                className="text-4xl mb-4 block"
              >
                {feature.icon}
              </motion.span>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}