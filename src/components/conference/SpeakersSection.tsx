import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Linkedin, Twitter, Globe } from "lucide-react";

const speakers = [
  {
    name: "Dr. Elena Vasquez",
    title: "Director of Climate Research",
    organization: "MIT Energy Initiative",
    expertise: "Renewable Energy Policy",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Prof. James Okonkwo",
    title: "Chair of Environmental Science",
    organization: "University of Cambridge",
    expertise: "Ecosystem Restoration",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Mei Chen",
    title: "Chief Innovation Officer",
    organization: "Tesla Energy Division",
    expertise: "Battery Technology",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Prof. Anders Lindberg",
    title: "Director of Sustainability",
    organization: "Stockholm University",
    expertise: "Circular Economy",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Priya Sharma",
    title: "Lead Research Scientist",
    organization: "Google DeepMind",
    expertise: "AI for Climate",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Prof. Michael Torres",
    title: "Head of Smart Cities Lab",
    organization: "ETH Zurich",
    expertise: "Urban Sustainability",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Aisha Patel",
    title: "Senior Policy Advisor",
    organization: "United Nations Environment",
    expertise: "Global Climate Policy",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Prof. Henrik Schmidt",
    title: "CEO & Founder",
    organization: "GreenTech Innovations",
    expertise: "Clean Technology",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
  },
];

export const SpeakersSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="speakers" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="container-conference relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            Distinguished Voices
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Keynote <span className="text-gradient-blue">Speakers</span>
          </h2>
          <p className="text-lg text-muted-foreground font-serif">
            Learn from world-renowned experts who are pioneering sustainable solutions 
            and driving transformative change across industries.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="card-conference text-center">
                {/* Image with animated border */}
                <div className="relative w-36 h-36 mx-auto mb-6">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-primary"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="absolute inset-1 rounded-full bg-card" />
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-1">{speaker.name}</h3>
                <p className="text-sm text-primary font-semibold mb-1">{speaker.title}</p>
                <p className="text-sm text-muted-foreground mb-2">{speaker.organization}</p>
                <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent-dark text-xs font-medium">
                  {speaker.expertise}
                </span>

                {/* Social links */}
                <div className="flex items-center justify-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Globe className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
