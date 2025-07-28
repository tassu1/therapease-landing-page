import { motion } from "framer-motion";
import { Waves,Heart, Mail, Instagram, Twitter, Linkedin, Youtube, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 pt-16 pb-8 px-4 sm:px-6 relative overflow-hidden">
     
      <motion.div 
        animate={{
          y: [0, -10, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 left-10 text-teal-400/10 text-4xl"
      >
        <Heart className="w-8 h-8" />
      </motion.div>
      
      <motion.div 
        animate={{
          rotate: [0, 360],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-32 right-1/4 text-teal-400/10 text-4xl"
      >
        <Heart className="w-6 h-6" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
    
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Waves className="text-teal-400 w-6 h-6" />
              <span className="text-xl font-light text-white">
              <span className="text-teal-400 font-medium">Therap</span>Ease
            </span>

            </div>
            <p className="text-gray-400 mb-6 max-w-xs">
              Your safe space for healing and hope.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

     
          <div>
            <h3 className="text-white font-medium mb-4 text-lg flex items-center gap-2">
              <span>🧭</span> Explore
            </h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Features', 'Testimonials', 'Pricing'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

         
          <div>
            <h3 className="text-white font-medium mb-4 text-lg flex items-center gap-2">
              <span>📘</span> Resources
            </h3>
            <ul className="space-y-3">
              {['Mental Health Blog', 'Help Center', 'FAQs', 'Community', 'Research'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

      
          <div>
            <h3 className="text-white font-medium mb-4 text-lg flex items-center gap-2">
              <span>🛠</span> Support
            </h3>
            <ul className="space-y-3">
              {['Contact Us', 'Terms & Conditions', 'Privacy Policy', 'Feedback', 'Crisis Resources'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        
        <div className="border-t border-gray-800 pt-10 mb-10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white text-xl font-medium mb-3 flex items-center justify-center gap-2">
              <Mail className="w-5 h-5 text-teal-400" />
              Get weekly wellness tips & updates
            </h3>
            <p className="text-gray-400 mb-6">
              Join our newsletter for mental health insights and app updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-medium whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-800">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 Therapease. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-teal-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-teal-400 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-teal-400 text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}