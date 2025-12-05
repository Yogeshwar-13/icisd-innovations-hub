import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Target, Users, Lightbulb, Award, Globe, Leaf } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Advancing sustainable solutions through interdisciplinary research collaboration",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connecting researchers, innovators, and policymakers from 50+ countries",
  },
  {
    icon: Lightbulb,
    title: "Innovation Focus",
    description: "Showcasing cutting-edge technologies driving environmental transformation",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Peer-reviewed publications in high-impact indexed journals",
  },
];

export const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-conference relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6"
            >
              About the Conference
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
            >
              Shaping Tomorrow's{" "}
              <span className="text-gradient-blue">Sustainable</span> World
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground font-serif leading-relaxed mb-6"
            >
              ICISD 2025 brings together visionary researchers, industry leaders, and policymakers 
              to explore groundbreaking solutions for our planet's most pressing challenges. This 
              premier international forum serves as a catalyst for transformative ideas in sustainable 
              development.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-muted-foreground font-serif leading-relaxed mb-8"
            >
              Through rigorous academic discourse and hands-on workshops, participants will 
              engage with pioneering research spanning renewable energy, artificial intelligence, 
              circular economy models, and smart city innovations—all unified by our commitment 
              to environmental stewardship.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <div className="flex items-center gap-2 text-primary">
                <Leaf className="w-5 h-5" />
                <span className="font-semibold">Carbon Neutral Event</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Users className="w-5 h-5" />
                <span className="font-semibold">Open Access Research</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="card-conference group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:shadow-blue transition-all duration-300">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
