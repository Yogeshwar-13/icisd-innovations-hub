import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FileText, Calendar, CheckCircle2, Send, BookOpen, Award } from "lucide-react";

const guidelines = [
  {
    icon: FileText,
    title: "Abstract Requirements",
    items: [
      "250-300 words maximum length",
      "Clear statement of objectives and methodology",
      "Key findings and conclusions summary",
      "5-6 relevant keywords",
    ],
  },
  {
    icon: BookOpen,
    title: "Full Paper Format",
    items: [
      "6,000-8,000 words including references",
      "IEEE double-column format template",
      "Times New Roman, 10pt font",
      "Minimum 15 recent references (post-2020)",
    ],
  },
  {
    icon: Calendar,
    title: "Important Deadlines",
    items: [
      "Abstract Submission: December 15, 2024",
      "Full Paper Deadline: January 31, 2025",
      "Notification of Acceptance: February 20, 2025",
      "Camera-Ready Version: March 1, 2025",
    ],
  },
  {
    icon: CheckCircle2,
    title: "Review Process",
    items: [
      "Double-blind peer review system",
      "Minimum two expert reviewers per paper",
      "15-20 day review turnaround",
      "Detailed feedback and revision guidelines",
    ],
  },
];

const publications = [
  { name: "Scopus Indexed Journals", highlight: true },
  { name: "Web of Science Collection", highlight: true },
  { name: "Conference Proceedings", highlight: false },
  { name: "Special Issue Publications", highlight: false },
];

export const SubmissionSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="submission" className="section-padding gradient-section relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container-conference relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent-dark text-sm font-semibold mb-6">
            Author Guidelines
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Submission <span className="text-gradient-gold">Guidelines</span>
          </h2>
          <p className="text-lg text-muted-foreground font-serif">
            Follow these comprehensive guidelines to ensure your research contribution 
            meets our rigorous academic standards.
          </p>
        </motion.div>

        {/* Guidelines Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {guidelines.map((guide, index) => (
            <motion.div
              key={guide.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-conference"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <guide.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-4">{guide.title}</h3>
                  <ul className="space-y-3">
                    {guide.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Publication Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="card-conference bg-gradient-to-br from-primary to-primary-dark text-primary-foreground"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-bold">Publication Opportunities</h3>
              </div>
              <p className="text-primary-foreground/90 font-serif mb-6">
                Selected papers will be published in high-impact indexed journals and conference 
                proceedings, ensuring global visibility for your research contributions.
              </p>
              <div className="flex flex-wrap gap-3">
                {publications.map((pub) => (
                  <span
                    key={pub.name}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      pub.highlight
                        ? "bg-accent text-accent-foreground"
                        : "bg-primary-foreground/20 text-primary-foreground"
                    }`}
                  >
                    {pub.name}
                  </span>
                ))}
              </div>
            </div>
            <motion.a
              href="#"
              className="btn-accent flex items-center gap-2 group whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send className="w-5 h-5" />
              Submit Your Paper
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
