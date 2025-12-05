import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Youtube, ArrowUp } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Tracks", href: "#tracks" },
  { name: "Speakers", href: "#speakers" },
  { name: "Schedule", href: "#schedule" },
  { name: "Registration", href: "#registration" },
];

const resourceLinks = [
  { name: "Submission Guidelines", href: "#submission" },
  { name: "Committee", href: "#committee" },
  { name: "FAQ", href: "#" },
  { name: "Contact", href: "#" },
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-conference relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">IC</span>
              </div>
              <div>
                <span className="block text-primary-foreground font-bold text-xl">ICISD 2025</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 font-serif leading-relaxed mb-6">
              International Conference on Innovations in Sustainable Development - 
              Bringing together global minds for a greener future.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center text-primary-foreground/80 hover:bg-primary-foreground hover:text-primary transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary-foreground font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-primary-foreground font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary-foreground font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <p className="text-primary-foreground/70">info@icisd2025.org</p>
                  <p className="text-primary-foreground/70">submissions@icisd2025.org</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <p className="text-primary-foreground/70">+1 (555) 123-4567</p>
                  <p className="text-primary-foreground/70">+44 20 7946 0958</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <p className="text-primary-foreground/70">
                  Global Convention Center<br />
                  Innovation District, Tech City
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-primary-foreground/10 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm text-center md:text-left">
            © 2025 ICISD. All rights reserved. International Conference on Innovations in Sustainable Development.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground shadow-gold"
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
