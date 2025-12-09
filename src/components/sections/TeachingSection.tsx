import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Lightbulb,
  Target,
  BarChart3,
  Play,
  ArrowRight,
} from "lucide-react";

// EDIT: Teaching topics
const topics = [
  {
    icon: TrendingUp,
    title: "How to Think Like a Value Investor",
    description: "Understanding the mindset behind smart investment decisions.",
    tag: "Investment",
  },
  {
    icon: Lightbulb,
    title: "Starting a Business as a Student",
    description: "Foundations for building something while you learn.",
    tag: "Business",
  },
  {
    icon: Target,
    title: "Understanding Risk and Reward",
    description: "Making decisions that balance potential with protection.",
    tag: "Investment",
  },
  {
    icon: BarChart3,
    title: "Reading Financial Statements",
    description: "The basics every founder and investor should know.",
    tag: "Business",
  },
];

export const TeachingSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="teaching" className="section-padding" ref={sectionRef}>
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Teaching & Content
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Learn <span className="text-accent">Business & Investing</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Practical knowledge on building businesses and making smart investments—taught
            from real experience, not just theory.
          </p>
        </motion.div>

        {/* Topics Grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-accent/30 hover:shadow-elevated transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <topic.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      {topic.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{topic.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
