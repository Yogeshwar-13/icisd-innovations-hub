import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check, Star, ArrowRight } from "lucide-react";

const registrationCategories = [
  {
    title: "Student",
    subtitle: "Undergraduate & Graduate",
    earlyBird: 99,
    regular: 149,
    features: ["Conference Access", "Digital Proceedings", "Certificate", "Lunch & Refreshments"],
    popular: false,
  },
  {
    title: "Research Scholar",
    subtitle: "PhD & Postdoctoral",
    earlyBird: 149,
    regular: 199,
    features: ["Conference Access", "Digital Proceedings", "Certificate", "Lunch & Refreshments", "Workshop Access"],
    popular: false,
  },
  {
    title: "Faculty",
    subtitle: "Academic Professionals",
    earlyBird: 199,
    regular: 299,
    features: ["Conference Access", "Digital Proceedings", "Certificate", "Lunch & Refreshments", "Workshop Access", "Networking Dinner"],
    popular: true,
  },
  {
    title: "Industry Delegate",
    subtitle: "Corporate Representatives",
    earlyBird: 349,
    regular: 449,
    features: ["Conference Access", "Digital Proceedings", "Certificate", "Lunch & Refreshments", "Workshop Access", "Networking Dinner", "Exhibition Access"],
    popular: false,
  },
  {
    title: "International",
    subtitle: "Outside Host Country",
    earlyBird: 249,
    regular: 349,
    features: ["Virtual + Onsite Access", "Digital Proceedings", "Certificate", "Lunch & Refreshments", "Workshop Access", "Networking Dinner"],
    popular: false,
  },
];

export const RegistrationSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="registration" className="section-padding gradient-section relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container-conference relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent-dark text-sm font-semibold mb-6">
            Secure Your Spot
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Registration <span className="text-gradient-gold">Fees</span>
          </h2>
          <p className="text-lg text-muted-foreground font-serif">
            Early bird pricing available until February 1, 2025. All fees are in USD and include 
            applicable taxes.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {registrationCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative card-conference flex flex-col ${
                category.popular ? "ring-2 ring-accent shadow-gold" : ""
              }`}
            >
              {category.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center gap-1">
                  <Star className="w-3 h-3" fill="currentColor" />
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                <p className="text-sm text-muted-foreground">{category.subtitle}</p>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-4xl font-bold text-primary">${category.earlyBird}</span>
                  <span className="px-2 py-0.5 rounded bg-accent/20 text-accent-dark text-xs font-semibold">
                    Early Bird
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Regular: <span className="line-through">${category.regular}</span>
                </p>
              </div>

              <ul className="space-y-3 flex-1 mb-6">
                {category.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  category.popular
                    ? "bg-accent text-accent-foreground hover:shadow-gold"
                    : "bg-primary text-primary-foreground hover:shadow-blue"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Register
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Payment note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          Secure payment via Credit Card, PayPal, or Bank Transfer. Group discounts available for 5+ participants.
        </motion.p>
      </div>
    </section>
  );
};
