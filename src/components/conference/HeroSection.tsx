import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight, FileText } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-navy">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
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
          <p className="text-white/80 text-sm md:text-base tracking-wide uppercase mb-2">
            SRM Institute of Science and Technology
          </p>
          <p className="text-white/70 text-xs md:text-sm tracking-wide">
            Faculty of Engineering and Technology • Vadapalani Campus, Chennai-26
          </p>
          <p className="text-white/70 text-xs md:text-sm tracking-wide">
            Department of Computer Science & Engineering
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-accent/20 border border-accent/30 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-accent text-sm font-medium">
            Early Bird Registration Open
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-white/90 text-lg md:text-xl uppercase tracking-widest mb-4"
        >
          International Conference on
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
        >
          <span className="text-accent">Intelligent Systems</span>
          <br />
          <span className="text-white">and Digital Transformation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-accent mb-8"
        >
          (ICISD'26)
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 mb-12"
        >
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
            <Calendar className="w-5 h-5 text-accent" />
            <span className="font-semibold">6th & 7th April, 2026</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="font-semibold">Hybrid Mode</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#registration" className="btn-accent flex items-center gap-2 shadow-gold">
            Register Now
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#submission" className="btn-outline flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Submit Paper
          </a>
        </motion.div>
      </div>
    </section>
  );
};
