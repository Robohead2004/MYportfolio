import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Users2,
  CheckCircle2,
  Palette,
  Code2,
  Megaphone,
  ArrowRight,
} from "lucide-react";

// EDIT: 1Profile process steps
const processSteps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Tell Us What You Need",
    description: "Share your project requirements—design, development, content, or anything else.",
  },
  {
    icon: Users2,
    step: "02",
    title: "We Match You",
    description: "We connect you with the right freelancer or team based on your needs and budget.",
  },
  {
    icon: CheckCircle2,
    step: "03",
    title: "Work Gets Done",
    description: "Your project is executed with quality checks and clear communication throughout.",
  },
];

// EDIT: Service categories
const categories = [
  {
    icon: Palette,
    title: "Design & Branding",
    items: ["Logo design", "Brand identity", "UI/UX design", "Marketing materials"],
  },
  {
    icon: Code2,
    title: "Web & No-code",
    items: ["Landing pages", "Web applications", "No-code solutions", "E-commerce"],
  },
  {
    icon: Megaphone,
    title: "Content & Social",
    items: ["Social media content", "Copywriting", "Video editing", "Presentations"],
  },
];

export const OneProfileSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="1profile" className="section-padding bg-primary text-primary-foreground" ref={sectionRef}>
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            1Profile
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Your Work, <span className="text-accent">Done Right</span>
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            A system where clients get matched with the right freelancers—without the stress.
            Tell us what you need, and we handle the rest.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-primary-foreground/10" />
              )}

              <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-primary-foreground/10 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-3xl font-bold text-accent">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-primary-foreground/60 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-xl font-bold text-center mb-8">What We Handle</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h4 className="font-semibold">{category.title}</h4>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-primary-foreground/60"
                    >
                      <div className="w-1 h-1 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center"
        >
          <Button
            variant="accent"
            size="xl"
            onClick={scrollToContact}
            className="group"
          >
            Request a Freelancer
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
