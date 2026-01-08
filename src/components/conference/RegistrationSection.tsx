import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check, ArrowRight } from "lucide-react";

const registrationCategories = [
  {
    title: "Author (Indian)",
    subtitle: "UG/PG/Research Scholar",
    earlyBird: "₹9,500",
    late: "₹11,000",
    features: ["Conference Access", "Digital Proceedings", "Certificate", "Lunch & Refreshments"],
  },
  {
    title: "Author (Foreign)",
    subtitle: "International Participants",
    earlyBird: "$350",
    late: "$400",
    features: ["Conference Access", "Digital Proceedings", "Certificate", "Lunch & Refreshments", "Workshop Access"],
  },
  {
    title: "Industry Delegates",
    subtitle: "UG/PG/Industry",
    earlyBird: "₹11,000",
    late: "₹12,000",
    features: ["Conference Access", "Digital Proceedings", "Certificate", "Lunch & Refreshments", "Networking Sessions"],
    popular: true,
  },
];


export const RegistrationSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="registration" className="section-padding bg-secondary">
      <div className="container-conference" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-md bg-accent/20 text-accent-foreground text-sm font-semibold mb-4">
            Secure Your Spot
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Registration Fees
          </h2>
          <p className="text-muted-foreground">
            Early bird pricing available until 12th March 2026. Register early to avail special rates.
          </p>
        </motion.div>

        {/* Registration Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {registrationCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative card-conference flex flex-col ${
                category.popular ? "ring-2 ring-accent" : ""
              }`}
            >
              {category.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-md bg-accent text-accent-foreground text-xs font-bold">
                  Recommended
                </div>
              )}

              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                <p className="text-sm text-muted-foreground">{category.subtitle}</p>
              </div>

              <div className="text-center mb-6 p-4 bg-primary/5 rounded-lg">
                <div className="mb-2">
                  <span className="text-3xl font-bold text-primary">{category.earlyBird}</span>
                  <span className="ml-2 px-2 py-0.5 rounded bg-accent/20 text-accent-foreground text-xs font-semibold">
                    Early Bird
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Late Fee: <span className="font-semibold">{category.late}</span>
                </p>
              </div>

              <ul className="space-y-2 flex-1 mb-6">
                {category.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-md font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                  category.popular
                    ? "bg-accent text-accent-foreground hover:opacity-90"
                    : "bg-primary text-primary-foreground hover:bg-primary-dark"
                }`}
              >
                Register Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>


        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-6"
        >
          Payment via Bank Transfer. All accepted papers will be published as Scopus-indexed conference book proceedings with ISBN and DOI.
        </motion.p>
      </div>
    </section>
  );
};
