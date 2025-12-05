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
    <section id="submission" className="section-padding bg-secondary">
      <div className="container-conference" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-md bg-accent/20 text-accent-foreground text-sm font-semibold mb-4">
            Author Guidelines
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Submission Guidelines
          </h2>
          <p className="text-muted-foreground">
            Follow these comprehensive guidelines to ensure your research contribution 
            meets our rigorous academic standards.
          </p>
        </motion.div>

        {/* Guidelines Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {guidelines.map((guide, index) => (
            <motion.div
              key={guide.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card-conference"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <guide.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-3">{guide.title}</h3>
                  <ul className="space-y-2">
                    {guide.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
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
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="card-conference bg-primary text-primary-foreground"
        >
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold">Publication Opportunities</h3>
              </div>
              <p className="text-primary-foreground/90 mb-4">
                Selected papers will be published in high-impact indexed journals and conference 
                proceedings, ensuring global visibility for your research contributions.
              </p>
              <div className="flex flex-wrap gap-2">
                {publications.map((pub) => (
                  <span
                    key={pub.name}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium ${
                      pub.highlight
                        ? "bg-accent text-accent-foreground"
                        : "bg-white/20 text-primary-foreground"
                    }`}
                  >
                    {pub.name}
                  </span>
                ))}
              </div>
            </div>
            <a href="#" className="btn-accent flex items-center gap-2 whitespace-nowrap">
              <Send className="w-5 h-5" />
              Submit Your Paper
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};