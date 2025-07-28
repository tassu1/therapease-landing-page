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

  const [isPaused, setIsPaused] = useState(false);
  const scrollSpeed = 1.5;
  const cardGap = 16; 
  const [cardWidth, setCardWidth] = useState(0);
  const [, setCardsToShow] = useState(3); 

  useEffect(() => {
    const updateLayout = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.clientWidth;
      
      if (containerWidth < 640) { // Mobile
        setCardsToShow(1);
        setCardWidth(containerWidth - 48);
      } else if (containerWidth < 768) { // Tablet
        setCardsToShow(2);
        setCardWidth((containerWidth - 48 - cardGap) / 2);
      } else { // Desktop
        setCardsToShow(3);
        setCardWidth((containerWidth - 2 * cardGap) / 3);
      }
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  // Auto-scroll with snapping
  useEffect(() => {
    if (!containerRef.current || cardWidth === 0) return;

    const container = containerRef.current;
    let scrollPosition = 0;
    let animationId: number;

    const animate = () => {
      if (!isPaused && container) {
        scrollPosition += scrollSpeed;
        const maxScroll = (cardWidth + cardGap) * testimonials.length;
        
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
          container.scrollLeft = 0;
        } else {
          
          const snapThreshold = (cardWidth + cardGap) * 0.5;
          const snapPosition = Math.round(scrollPosition / (cardWidth + cardGap)) * (cardWidth + cardGap);
          
          if (Math.abs(scrollPosition - snapPosition) < snapThreshold) {
            container.scrollLeft = snapPosition;
          } else {
            container.scrollLeft = scrollPosition;
          }
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused, cardWidth, testimonials.length]);

  return (
    <section id={id} className="py-12 md:py-20 scroll-mt-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
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
          className="text-center mb-8 md:mb-12"
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

       
        <div className="relative overflow-hidden px-4 sm:px-0">
         
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-16 z-20 bg-gradient-to-r from-gray-800 to-transparent pointer-events-none" />
          
          {/* Carousel */}
          <div 
            ref={containerRef}
            className="flex gap-4 md:gap-8 overflow-x-auto pb-6 no-scrollbar snap-x snap-mandatory"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={`${testimonial.author}-${index}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0 snap-center"
                style={{ width: `${cardWidth}px` }}
              >
                <div className="bg-gray-800/50 backdrop-blur-md rounded-xl border border-teal-400/30 p-6 h-full flex flex-col relative overflow-hidden shadow-lg shadow-teal-400/10 mx-auto">
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
          
        
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-16 z-20 bg-gradient-to-l from-gray-800 to-transparent pointer-events-none" />
        </div>

        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8 md:mt-12"
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

 
      <style> {`
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