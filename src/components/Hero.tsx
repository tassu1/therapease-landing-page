import { motion } from "framer-motion";
import { BookHeart, Sparkles, Shield, Zap, MessageSquare, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Hero({ id }: { id?: string }) {
const [messages, setMessages] = useState<Message[]>([]);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);



interface Exercise {
  title: string;
  instruction: string;
}

interface Message {
  id: number;
  content: string;
  isUser: boolean;
  delay: number;
  avatar: React.ReactNode;
  exercise?: Exercise;
}

interface ChatMessageProps {
  children: React.ReactNode;
  isUser: boolean;
  exercise?: Exercise;
  avatar: React.ReactNode;
}




  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  
  const messageSequence = [
    {
      id: 1,
      content: "Welcome back! How has your week been so far?",
      isUser: false,
      delay: isMobile ? 2 : 1,
      avatar: <MessageSquare className="text-white" size={18} />
    },
    {
      id: 2,
      content: "It's been okay, but I've been feeling a bit anxious about work lately.",
      isUser: true,
      delay: isMobile ? 4 : 3,
      avatar: <User className="text-white" size={18} />
    },
    {
      id: 3,
      content: "I appreciate you sharing that. Work anxiety is completely normal. Would you like to explore what specifically is causing this feeling?",
      isUser: false,
      delay: isMobile ? 6 : 5,
      avatar: <MessageSquare className="text-white" size={18} />
    },
    {
      id: 4,
      content: "While you think about that, let's try a quick mindfulness exercise to ground yourself:",
      isUser: false,
      delay: isMobile ? 8 : 7,
      avatar: <MessageSquare className="text-white" size={18} />,
      exercise: {
        title: "Mindful Breathing",
        instruction: "Take 3 deep breaths, then write what you notice in your body"
      }
    },
    {
      id: 5,
      content: "I think it's the upcoming project deadline. I did the breathing and noticed my shoulders were really tense.",
      isUser: true,
      delay: isMobile ? 10 : 9,
      avatar: <User className="text-white" size={18} />
    }
  ];

  useEffect(() => {
    setMessages([]);
    const timers = messageSequence.map((message) => {
      return setTimeout(() => {
        setMessages((prev) => [...prev, message]);
      }, message.delay * 1000);
    });
    return () => timers.forEach(timer => clearTimeout(timer));
  }, [isMobile]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

const ChatMessage = ({ children, isUser, exercise, avatar }: ChatMessageProps) =>{
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`rounded-2xl p-4 max-w-[85%] relative ${
          isUser
            ? "bg-teal-400/10 border border-teal-400/30 self-end"
            : "bg-gray-700/80 border border-teal-400/20 self-start"
        }`}
      >
        <div className={`absolute ${isUser ? "-right-2" : "-left-2"} top-3 flex items-center justify-center w-8 h-8 rounded-full ${
          isUser ? "bg-gray-600" : "bg-teal-500"
        }`}>
          {avatar}
        </div>
        <div className={isUser ? "pr-2" : "pl-2"}>
          <p className="text-sm md:text-base text-gray-100">{children}</p>
          {exercise && (
            <div className="mt-3 bg-gray-600/50 rounded-lg p-3 border border-teal-400/20">
              <p className="text-xs md:text-sm text-teal-300 font-medium">{exercise.title}</p>
              <p className="text-sm md:text-base text-gray-200 mt-1">{exercise.instruction}</p>
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  const TypingIndicator = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-700 rounded-2xl p-4 max-w-[70%] self-end border border-teal-400/20 flex items-center gap-2"
      >
        <div className="flex space-x-1">
          {[0, 0.2, 0.4].map((delay) => (
            <motion.div
              key={delay}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1, repeat: Infinity, delay }}
              className="w-2 h-2 bg-teal-400 rounded-full"
            />
          ))}
        </div>
        <span className="text-xs text-gray-400">You're typing...</span>
      </motion.div>
    );
  };

  return (
    <section 
      id={id} 
      className="py-16 md:py-24 lg:py-32 scroll-mt-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden"
    >
     
      <motion.div 
        animate={{
          y: [0, -10, 0],
          opacity: [0.8, 1, 0.8],
          rotate: [0, 2, -2, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-1/5 text-purple-400/20 text-4xl z-10"
      >
        <Sparkles size={40} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center z-10">
     
        <motion.div 
          className="space-y-6 lg:space-y-8 order-1 lg:order-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 bg-gray-800/90 px-4 py-2 rounded-full border border-teal-400/20 w-max"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Zap className="text-teal-400" size={18} />
            <span className="text-teal-100 text-sm md:text-base">AI-Powered Emotional Support</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-100 leading-tight"
          >
            <span className="font-medium text-teal-400 block mb-3 md:mb-4">Your Compassionate</span>
            <span className="font-medium text-teal-400">Journaling Companion</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-lg"
          >
            TherapEase blends therapeutic journaling with AI guidance to help you process emotions and build resilience.
          </motion.p>

          <ul className="space-y-4 md:space-y-5 mt-6 md:mt-8">
            {[
              "Process difficult emotions safely",
              "Develop mindfulness habits",
              "Track your growth journey",
              "Receive clinically-informed insights"
            ].map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i + 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="p-1.5 bg-teal-400/20 rounded-full mt-0.5 flex-shrink-0">
                  <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                </div>
                <span className="text-gray-200 text-lg md:text-xl">{item}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div 
            className="flex flex-wrap gap-4 pt-6 md:pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-lg font-medium flex items-center gap-3 text-lg md:text-xl shadow-lg hover:shadow-teal-500/30 transition-all"
            >
              <BookHeart size={20} />
              Start Journaling Now
            </motion.button>
            <motion.button
              whileHover={{ x: 3 }}
              className="text-teal-400 hover:text-teal-300 underline flex items-center gap-2 text-lg md:text-xl"
            >
              How it helps
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>

        
        <motion.div
          className="relative order-2 lg:order-none"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: isMobile ? 0.5 : 0 }}
        >
         
          <div className="absolute -inset-6 lg:-inset-8 bg-teal-400/10 rounded-3xl blur-xl -z-10">
            
            <motion.div
              className="absolute inset-0 bg-teal-400/20 rounded-3xl"
              animate={{
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          
          <div className="relative bg-gray-800/95 border-2 border-teal-400/30 rounded-2xl shadow-2xl overflow-hidden">
           
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 via-transparent to-transparent pointer-events-none" />
            
            <div className="p-4 lg:p-5 border-b border-teal-400/20 flex flex-col gap-1 bg-gray-800/80 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-teal-400"></div>
                </div>
                <span className="text-sm lg:text-base text-teal-200 flex-1 text-center font-medium">TherapEase AI</span>
                <Shield className="text-teal-400" size={18} />
              </div>
              <div className="text-xs lg:text-sm text-gray-400 text-center">Monday · 8:34 PM · Reflective Session</div>
            </div>
            
            <div 
              ref={chatContainerRef}
              className="p-5 lg:p-6 space-y-4 lg:space-y-5 h-[500px] lg:h-[600px] flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
            >
              {messages.map((message) => (
                <ChatMessage 
                  key={message.id}
                  isUser={message.isUser}
                  exercise={message.exercise}
                  avatar={message.avatar}
                >
                  {message.content}
                </ChatMessage>
              ))}
              
              {messages.length > 0 && messages.length < messageSequence.length && (
                <TypingIndicator />
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}