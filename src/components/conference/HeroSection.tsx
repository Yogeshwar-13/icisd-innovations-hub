import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight, FileText } from "lucide-react";
import heroImage from "@/assets/conference-hero.jpg";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="ICISD'26 Conference Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary" />
      </div>

      {/* Animated decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15] 
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            y: [-20, 20, -20],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/4 w-40 h-40 bg-accent/10 rounded-full blur-2xl" 
        />
      </div>

      {/* Content */}
      <div className="container-conference relative z-10 text-center py-20 pt-32">
        {/* Institution Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-primary-foreground/90 text-sm md:text-base tracking-wide uppercase mb-2 font-medium">
            SRM Institute of Science and Technology
          </p>
          <p className="text-primary-foreground/70 text-xs md:text-sm tracking-wide">
            Faculty of Engineering and Technology • Vadapalani Campus, Chennai-26
          </p>
          <p className="text-primary-foreground/70 text-xs md:text-sm tracking-wide">
            Department of Computer Science & Engineering
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/20 border border-accent/40 mb-8 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-accent text-sm font-semibold">
            Early Bird Registration Open
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-primary-foreground/90 text-lg md:text-xl uppercase tracking-[0.2em] mb-4 font-medium"
        >
          International Conference on
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
        >
          <span className="text-accent drop-shadow-lg">Intelligent Systems</span>
          <br />
          <span className="text-primary-foreground">and Digital Transformation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-accent mb-10 drop-shadow-lg"
        >
          (ICISD'26)
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-3 bg-primary-dark/60 backdrop-blur-sm px-5 py-3 rounded-xl border border-accent/20">
            <Calendar className="w-5 h-5 text-accent" />
            <span className="font-semibold text-primary-foreground">6th & 7th April, 2026</span>
          </div>
          <div className="flex items-center gap-3 bg-primary-dark/60 backdrop-blur-sm px-5 py-3 rounded-xl border border-accent/20">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="font-semibold text-primary-foreground">Hybrid Mode</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#registration" 
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-bold text-lg shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:scale-105 transition-all duration-300"
          >
            Register Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#submission" 
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-transparent border-2 border-accent/50 text-accent font-bold text-lg hover:bg-accent/10 hover:border-accent transition-all duration-300"
          >
            <FileText className="w-5 h-5" />
            Submit Paper
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 1, duration: 0.5 },
            y: { delay: 1.5, duration: 1.5, repeat: Infinity }
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-accent/40 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-accent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
