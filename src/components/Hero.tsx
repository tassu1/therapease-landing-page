import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

// Floating affirmations data
const AFFIRMATIONS = [
  "You are safe.",
  "You are growing.",
  "It’s okay to rest.",
];

export default function Hero() {
  const { theme } = useTheme();
  const [isMusicOn, setIsMusicOn] = useState(false);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-purple-100 via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-6 overflow-hidden">
      {/* Floating blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 rounded-full opacity-20 blur-3xl animate-float dark:bg-purple-800" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl animate-float-delay dark:bg-blue-800" />

      {/* Floating affirmations */}
      {AFFIRMATIONS.map((text, index) => (
        <motion.p
          key={text}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{
            delay: index * 1.5,
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={`absolute text-lg ${theme === 'dark' ? 'text-purple-300' : 'text-purple-600'}`}
          style={{
            left: `${10 + index * 25}%`,
            top: `${15 + index * 15}%`,
          }}
        >
          {text}
        </motion.p>
      ))}

      <div className="relative z-10 text-center max-w-3xl lg:max-w-4xl mx-auto">
        {/* Headline with typing effect */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Heal your mind, <br />
          <TypeAnimation
            cursor={true}
            sequence={[
              "one conversation at a time.",
              2000,
              "one thought at a time.",
              2000,
              "one breath at a time.",
              2000,
            ]}
            wrapper="span"
            className={`${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}
            repeat={Infinity}
          />
        </motion.h1>

        {/* Subtitle with fade-in delay */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8"
        >
          TherapEase offers private journaling, calm guidance, and AI conversations —
          all in one peaceful space.
        </motion.p>

        {/* CTA with glow + music toggle */}
        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all shadow-lg shadow-purple-300/40 dark:shadow-purple-800/30"
          >
            Start Healing
          </motion.button>

          <motion.button
            onClick={() => setIsMusicOn(!isMusicOn)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
          >
            {isMusicOn ? <Volume2 size={20} /> : <VolumeX size={20} />}
            <span>{isMusicOn ? "Music On" : "Music Off"}</span>
          </motion.button>
        </motion.div>
      </div>

      {/* CSS for floating animations */}
      <style >{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 10s ease-in-out infinite 2s;
        }
      `}</style>
    </section>
  );
}