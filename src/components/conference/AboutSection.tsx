import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Target, Users, Lightbulb, Award, BookOpen } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Research Focus",
    description: "Advancing AI, data-driven intelligence, and cyber-physical systems",
  },
  {
    icon: Lightbulb,
    title: "Innovation Hub",
    description: "Cutting-edge technologies transforming industries and society",
  },
  {
    icon: Users,
    title: "Global Platform",
    description: "Connecting researchers, academicians, and industry professionals",
  },
  {
    icon: Award,
    title: "Scopus Indexed",
    description: "All accepted papers published with ISBN and DOI",
  },
];

export const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-conference" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 rounded-md bg-primary/10 text-primary text-sm font-semibold mb-4">
              About the Conference
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              About ICISD'26
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              The International Conference on Intelligent Systems and Digital Transformation (ICISD'26) 
              provides a global platform for researchers, academicians, and industry professionals to 
              present and discuss innovations driving intelligent and digitally enabled systems.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              The conference focuses on cutting-edge technologies such as artificial intelligence, 
              data-driven intelligence, automation, and cyber-physical systems that are transforming 
              industries and society.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              ICISD'26 promotes interdisciplinary collaboration, knowledge exchange, and the development 
              of sustainable and intelligent digital solutions for the future.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-primary bg-primary/10 px-4 py-2 rounded-lg">
                <BookOpen className="w-5 h-5" />
                <span className="font-semibold text-sm">Scopus Indexed Publication</span>
              </div>
              <div className="flex items-center gap-2 text-primary bg-primary/10 px-4 py-2 rounded-lg">
                <Users className="w-5 h-5" />
                <span className="font-semibold text-sm">Hybrid Mode Event</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card-conference"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
