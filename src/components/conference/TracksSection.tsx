import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Brain,
  Database,
  MessageSquare,
  Wifi,
  Shield,
  Cloud,
  Atom,
  Leaf,
} from "lucide-react";

const tracks = [
  {
    icon: Brain,
    title: "Track 1: Artificial Intelligence and Intelligent Systems",
    items: [
      "Machine learning, deep learning, and reinforcement learning",
      "Intelligent decision support systems and XAI",
      "AI in healthcare, education, agriculture and industry",
      "Computer Vision and Image Analysis",
    ],
  },
  {
    icon: Database,
    title: "Track 2: Data Science and Big Data Analytics",
    items: [
      "Data Mining",
      "Data Visualization and Feature Engineering",
      "Data Governance and Quality",
      "Predictive analytics and visualization",
    ],
  },
  {
    icon: MessageSquare,
    title: "Track 3: Natural Language Processing & Speech Technologies",
    items: [
      "Text Mining and Sentiment Analysis",
      "Multilingual Models / LLMs",
      "Speech Recognition",
      "Chatbots and Conversational AI",
    ],
  },
  {
    icon: Wifi,
    title: "Track 4: Internet of Things (IoT) and Cyber-Physical Systems",
    items: [
      "IoT architectures and protocols",
      "Cyber physical systems design and applications",
      "Embedded and Real-Time Computing",
      "Digital Twins and Bio IoT",
    ],
  },
  {
    icon: Shield,
    title: "Track 5: Cybersecurity and Blockchain",
    items: [
      "Network Security and Cryptography",
      "Ethical Hacking and Forensics",
      "Smart Contracts & Zero-Trust Architecture",
    ],
  },
  {
    icon: Cloud,
    title: "Track 6: Cloud Computing & Distributed Systems",
    items: [
      "Serverless & Microservice Architectures",
      "Cloud Security & Cloud-Native Systems",
      "Distributed Storage and Computing Frameworks (Hadoop, Spark)",
      "Green and Sustainable Computing",
    ],
  },
  {
    icon: Atom,
    title: "Track 7: Quantum Computing & Future Technologies",
    items: [
      "Quantum Algorithms",
      "Quantum Cryptography",
      "Quantum Machine Learning",
      "Hardware & Hybrid Architectures",
    ],
  },
  {
    icon: Leaf,
    title: "Track 8: Sustainability & Digital Transformation",
    items: [
      "Green Computing",
      "Intelligent Transport Systems",
      "AI for Climate and Society",
      "Smart Grid and Smart Governance",
    ],
  },
];

export const TracksSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="tracks" className="section-padding bg-secondary">
      <div className="container-conference" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-md bg-accent/20 text-accent-foreground text-sm font-semibold mb-4">
            Research Domains
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tracks for Conference
          </h2>
          <p className="text-muted-foreground">
            Explore eight interdisciplinary tracks covering cutting-edge technologies 
            in intelligent systems and digital transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="card-conference h-full">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <track.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      {track.title}
                    </h3>
                    <ul className="space-y-1.5">
                      {track.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
