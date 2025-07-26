import { motion } from "framer-motion";
import { BookHeart, Sparkles, Zap, Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Testimonials({ id }: { id: string }) {
  const testimonials = [
    {
      quote: "TherapEase helped me process my divorce with compassion I didn't know I had.",
      author: "Sarah K.",
      role: "Teacher"
    },
    {
      quote: "The AI reflections revealed anxiety patterns I'd never noticed. Life-changing insights.",
      author: "Michael T.",
      role: "Engineer"
    },
    {
      quote: "Sleep stories gave me restful nights after my deployment. I wake up feeling human again.",
      author: "James W.",
      role: "Veteran"
    },
    {
      quote: "The couples exercises saved our marriage during lockdown. We still use them weekly.",
      author: "Sophie & Tom",
      role: "Married 7 years"
    },
    {
      quote: "My teen engages with therapy now thanks to the mood tracker. Seeing progress changed everything.",
      author: "Lisa N.",
      role: "Parent"
    },
    {
      quote: "Morning check-ins anchor my day. Just 5 minutes makes me more mindful and productive.",
      author: "David P.",
      role: "CEO"
    },
    {
      quote: "I recommend TherapEase to all my clients. Perfect between-session support.",
      author: "Dr. Elena R.",
      role: "Clinical Psychologist"
    },
    {
      quote: "PTSD grounding exercises stop my panic attacks instantly. Gave me my freedom back.",
      author: "Aisha M.",
      role: "Nurse"
    }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const [isPaused, setIsPaused] = useState(false);
  const scrollSpeed = 0.5;
  const [visibleCards, setVisibleCards] = useState(3);
  const [cardWidth, setCardWidth] = useState("33.333%");

  // Calculate card width and visible cards based on screen size
  useEffect(() => {
    const calculateLayout = () => {
      if (window.innerWidth < 640) { // Mobile
        setVisibleCards(1);
        setCardWidth("100%");
      } else if (window.innerWidth < 768) { // Small tablet
        setVisibleCards(2);
        setCardWidth("50%");
      } else { // Desktop
        setVisibleCards(3);
        setCardWidth("33.333%");
      }
    };

    calculateLayout();
    window.addEventListener('resize', calculateLayout);
    return () => window.removeEventListener('resize', calculateLayout);
  }, []);

  // Auto-scroll with perfect card alignment
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    let scrollPosition = 0;
    let targetPosition = 0;
    let animationId: number;

    const getCardWidth = () => {
      const firstCard = container.firstChild as HTMLElement;
      return firstCard ? firstCard.offsetWidth + 32 : 0; // 32px for gap (1rem)
    };

    const animate = () => {
      if (!isPaused && container) {
        scrollPosition += scrollSpeed;
        const cardWidth = getCardWidth();
        const maxScroll = cardWidth * testimonials.length;
        
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
          container.scrollLeft = 0;
        } else {
          // Snap to card boundaries
          if (Math.abs(scrollPosition - targetPosition) > cardWidth * 0.5) {
            targetPosition = Math.floor(scrollPosition / cardWidth) * cardWidth;
          }
          
          container.scrollLeft = scrollPosition;
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused, testimonials.length]);

  return (
    <section id={id} className="py-16 md:py-20 scroll-mt-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div 
        animate={{
          rotate: [0, 360],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/3 left-1/4 text-teal-400/10 text-4xl md:text-5xl"
      >
        <Sparkles className="w-10 h-10 md:w-12 md:h-12" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-10 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gray-700/50 px-3 py-1 rounded-full border border-teal-400/20 mb-3 md:mb-4">
            <Zap className="text-teal-400 h-3 w-3" />
            <span className="text-teal-100 text-xs">Healing Journeys</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white mb-2 md:mb-3">
            <span className="text-teal-400 font-medium">Voices</span> of Hope
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Real stories of transformation
          </p>
        </motion.div>

        {/* Testimonial carousel */}
        <div 
          ref={containerRef}
          className="flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory no-scrollbar"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <motion.div
              key={`${testimonial.author}-${index}`}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 snap-start px-2"
              style={{ width: cardWidth }}
            >
              <div className="bg-gray-800/50 backdrop-blur-md rounded-xl border border-teal-400/30 p-6 h-full flex flex-col relative overflow-hidden shadow-lg shadow-teal-400/10">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 via-transparent to-transparent pointer-events-none" />
                
                <div className="text-2xl mb-4 text-teal-400">
                  <Heart className="w-6 h-6" />
                </div>
                
                <p className="text-sm md:text-base text-gray-200 italic mb-4 leading-relaxed z-10">
                  "{testimonial.quote}"
                </p>
                
                <div className="mt-auto border-t border-teal-400/20 pt-3 z-10">
                  <h4 className="text-white font-medium text-sm md:text-base">{testimonial.author}</h4>
                  <p className="text-gray-300 text-xs md:text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Responsive CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10 md:mt-12"
        >
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 mx-auto text-sm md:text-base shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 transition-all"
          >
            <BookHeart className="w-4 h-4" />
            Begin Your Journey
          </motion.button>
        </motion.div>
      </div>

      {/* Global CSS to hide scrollbar */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}