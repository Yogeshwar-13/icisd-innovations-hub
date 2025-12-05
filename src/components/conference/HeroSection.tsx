import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight, FileText } from "lucide-react";

const FloatingShape = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay }}
  />
);

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10"
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating geometric shapes */}
      <FloatingShape
        className="absolute top-20 left-10 w-32 h-32 rounded-full border border-primary-foreground/10 animate-float"
        delay={0.2}
      />
      <FloatingShape
        className="absolute top-40 right-20 w-24 h-24 rounded-2xl border border-accent/20 rotate-45 animate-float-delayed"
        delay={0.4}
      />
      <FloatingShape
        className="absolute bottom-40 left-20 w-16 h-16 rounded-lg bg-accent/10 animate-float-slow"
        delay={0.6}
      />
      <FloatingShape
        className="absolute bottom-20 right-40 w-40 h-40 rounded-full border-2 border-primary-foreground/5 animate-spin-slow"
        delay={0.8}
      />
      <FloatingShape
        className="absolute top-1/3 left-1/4 w-8 h-8 rounded-full bg-accent/20 animate-pulse-slow"
        delay={1}
      />
      <FloatingShape
        className="absolute bottom-1/3 right-1/4 w-12 h-12 rounded-xl border border-accent/30 rotate-12 animate-float"
        delay={1.2}
      />

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="container-conference relative z-10 text-center py-20 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-primary-foreground/90 text-sm font-medium">
            Early Bird Registration Open
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6"
        >
          ICISD{" "}
          <span className="text-gradient-gold">2025</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl text-primary-foreground/90 font-serif max-w-4xl mx-auto mb-8 leading-relaxed"
        >
          International Conference on{" "}
          <span className="text-accent font-semibold">Innovations</span> in{" "}
          <span className="text-accent font-semibold">Sustainable Development</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/80 mb-12"
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-accent" />
            <span className="font-medium">March 15-17, 2025</span>
          </div>
          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-accent" />
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="font-medium">Hybrid Event • Global Access</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#registration"
            className="btn-accent flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.a>
          <motion.a
            href="#submission"
            className="btn-outline flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FileText className="w-5 h-5" />
            Submit Paper
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-1.5"
          >
            <motion.div
              animate={{ opacity: [1, 0, 1], y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 rounded-full bg-primary-foreground/50"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
