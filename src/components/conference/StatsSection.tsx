import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Mic2, Layers, BookOpen } from "lucide-react";

const stats = [
  { icon: Mic2, value: 50, suffix: "+", label: "Expert Speakers" },
  { icon: Users, value: 2500, suffix: "+", label: "Expected Participants" },
  { icon: Layers, value: 10, suffix: "", label: "Research Tracks" },
  { icon: BookOpen, value: 25, suffix: "+", label: "Workshops & Sessions" },
];

const AnimatedCounter = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Floating elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 rounded-full border border-primary-foreground/10"
        animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 rounded-2xl border border-accent/20 rotate-45"
        animate={{ y: [0, 20, 0], rotate: [45, 90, 45] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-conference relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Conference at a <span className="text-accent">Glance</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg font-serif max-w-2xl mx-auto">
            Join thousands of researchers and innovators shaping the future of sustainable development
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                className="w-20 h-20 mx-auto rounded-2xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center mb-6 border border-primary-foreground/20"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <stat.icon className="w-10 h-10 text-accent" />
              </motion.div>
              <div className="text-5xl md:text-6xl font-bold text-primary-foreground mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <p className="text-primary-foreground/80 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
