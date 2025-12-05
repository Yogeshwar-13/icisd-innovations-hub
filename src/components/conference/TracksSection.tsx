import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Cpu,
  Leaf,
  Sun,
  Database,
  Recycle,
  TrendingUp,
  Building2,
  Bot,
  Microscope,
  Zap,
} from "lucide-react";

const tracks = [
  {
    icon: Zap,
    title: "Sustainable Engineering",
    description: "Green manufacturing, sustainable materials, and eco-friendly design principles for modern infrastructure.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Cpu,
    title: "AI & Smart Technologies",
    description: "Machine learning applications for environmental monitoring, prediction models, and resource optimization.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Leaf,
    title: "Environmental Science",
    description: "Climate change mitigation, ecosystem restoration, and biodiversity conservation strategies.",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Sun,
    title: "Renewable Energy Systems",
    description: "Solar, wind, and hybrid energy solutions, grid integration, and energy storage technologies.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Database,
    title: "Data Science & Green Computing",
    description: "Energy-efficient algorithms, sustainable data centers, and carbon-aware computing practices.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Recycle,
    title: "Circular Economy Models",
    description: "Waste reduction frameworks, product lifecycle analysis, and regenerative business practices.",
    color: "from-lime-500 to-green-600",
  },
  {
    icon: TrendingUp,
    title: "Green Finance & ESG",
    description: "Sustainable investment strategies, ESG reporting standards, and impact measurement frameworks.",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: Building2,
    title: "Smart Cities & IoT",
    description: "Urban sustainability solutions, intelligent transportation, and connected infrastructure systems.",
    color: "from-sky-500 to-cyan-600",
  },
  {
    icon: Bot,
    title: "Robotics & Automation",
    description: "Autonomous systems for environmental monitoring, precision agriculture, and sustainable manufacturing.",
    color: "from-rose-500 to-pink-600",
  },
  {
    icon: Microscope,
    title: "Biotechnology for Sustainability",
    description: "Biofuels, bioremediation, synthetic biology, and sustainable agricultural innovations.",
    color: "from-teal-500 to-cyan-600",
  },
];

export const TracksSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="tracks" className="section-padding gradient-section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container-conference relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent-dark text-sm font-semibold mb-6">
            Research Domains
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Conference <span className="text-gradient-gold">Tracks</span>
          </h2>
          <p className="text-lg text-muted-foreground font-serif">
            Explore ten interdisciplinary tracks spanning the spectrum of sustainable development, 
            from cutting-edge technology to policy frameworks.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group relative"
            >
              <div className="card-conference h-full flex flex-col text-center relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${track.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-white/20 transition-all duration-300">
                    <track.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-white transition-colors duration-300">
                    {track.title}
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                    {track.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
