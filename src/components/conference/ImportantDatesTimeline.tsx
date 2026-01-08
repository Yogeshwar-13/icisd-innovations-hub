import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, FileText, Bell, CheckCircle, Clock, Sparkles } from "lucide-react";

const importantDates = [
  { 
    label: "Paper Submission Deadline", 
    date: "5th March 2026",
    icon: FileText,
    status: "upcoming"
  },
  { 
    label: "Acceptance Notification", 
    date: "10th March 2026",
    icon: Bell,
    status: "upcoming"
  },
  { 
    label: "Early Bird Registration", 
    date: "12th March 2026",
    icon: Sparkles,
    status: "upcoming"
  },
  { 
    label: "Camera Ready Submission", 
    date: "15th March 2026",
    icon: CheckCircle,
    status: "upcoming"
  },
  { 
    label: "Late Registration Deadline", 
    date: "25th March 2026",
    icon: Clock,
    status: "upcoming"
  },
  { 
    label: "Conference Dates", 
    date: "6 & 7 April 2026",
    icon: Calendar,
    status: "highlight"
  },
];

export const ImportantDatesTimeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="dates" className="section-padding bg-primary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container-conference relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-4 border border-accent/30">
            Mark Your Calendar
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Important Dates
          </h2>
          <p className="text-primary-foreground/70">
            Stay on track with these key milestones for ICISD'26
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-accent transform -translate-x-1/2" />
          
          {/* Mobile line */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-accent" />

          {importantDates.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 2 === 0;
            const isHighlight = item.status === "highlight";
            
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center mb-8 last:mb-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Mobile layout */}
                <div className="md:hidden flex items-start gap-4 w-full pl-4">
                  {/* Icon circle */}
                  <div className={`relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    isHighlight 
                      ? "bg-accent text-accent-foreground shadow-lg shadow-accent/30" 
                      : "bg-primary-dark border-2 border-accent/50 text-accent"
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  
                  {/* Content */}
                  <div className={`flex-1 p-4 rounded-xl ${
                    isHighlight 
                      ? "bg-accent text-accent-foreground" 
                      : "bg-primary-dark/80 backdrop-blur border border-accent/20"
                  }`}>
                    <p className={`text-sm font-medium mb-1 ${
                      isHighlight ? "text-accent-foreground/80" : "text-primary-foreground/70"
                    }`}>
                      {item.label}
                    </p>
                    <p className={`text-lg font-bold ${
                      isHighlight ? "text-accent-foreground" : "text-accent"
                    }`}>
                      {item.date}
                    </p>
                  </div>
                </div>

                {/* Desktop layout */}
                <div className={`hidden md:flex items-center w-full ${
                  isLeft ? "justify-end pr-8" : "justify-start pl-8"
                }`}>
                  <div className={`w-5/12 ${isLeft ? "text-right" : "text-left"}`}>
                    <div className={`inline-block p-5 rounded-xl transition-all duration-300 hover:scale-105 ${
                      isHighlight 
                        ? "bg-accent text-accent-foreground shadow-xl shadow-accent/20" 
                        : "bg-primary-dark/80 backdrop-blur border border-accent/20 hover:border-accent/40"
                    }`}>
                      <p className={`text-sm font-medium mb-1 ${
                        isHighlight ? "text-accent-foreground/80" : "text-primary-foreground/70"
                      }`}>
                        {item.label}
                      </p>
                      <p className={`text-xl font-bold ${
                        isHighlight ? "text-accent-foreground" : "text-accent"
                      }`}>
                        {item.date}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Center icon for desktop */}
                <div className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10 w-12 h-12 rounded-full items-center justify-center transition-all duration-300 ${
                  isHighlight 
                    ? "bg-accent text-accent-foreground shadow-lg shadow-accent/40 scale-110" 
                    : "bg-primary-dark border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
