import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Presentation,
  Users,
  MessageSquare,
} from "lucide-react";

// EDIT: Services/offerings
const services = [
  {
    icon: Presentation,
    title: "Pitch Deck Review & Guidance",
    subtitle: "For ambitious founders preparing to raise funds",
    benefits: [
      "Expert review of your pitch deck",
      "Storytelling + clarity that investors want",
      "Honest feedback to make your pitch stand out",
    ],
    tagline: "Let's build a winning deck together",
    cta: "Review my pitch deck",
  },
  {
    icon: MessageSquare,
    title: "Founder-to-Founder Conversations",
    subtitle: "For new entrepreneurs who need clarity and support",
    benefits: [
      "Casual & friendly business discussions",
      "Break mental blocks and gain direction",
      "Learn from real startup experience",
    ],
    tagline: "Let's talk through your startup journey",
    cta: "Let's chat",
  },
  {
    icon: Users,
    title: "Freelance Talent Matching",
    subtitle: "For startups that need skilled people fast",
    benefits: [
      "Matched with trusted freelancers",
      "Save time and skip hiring mistakes",
      "Quality output — on budget, on time",
    ],
    tagline: "Get the right talent for your startup",
    cta: "Request a match",
  },
];

export const ServicesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFreelancers = () => {
    document.querySelector("#freelancers")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="section-padding" ref={sectionRef}>
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            What I Do
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            How I Can <span className="text-accent">Help You</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Whether you're learning to build, need work done, or want guidance—I've got you covered.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 hover:shadow-elevated flex flex-col h-full"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Icon */}
              <motion.div
                className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <service.icon className="w-7 h-7 text-accent transition-transform group-hover:scale-110" />
              </motion.div>

              {/* Title & Subtitle */}
              <h3 className="text-xl font-bold text-foreground mb-1 transition-colors group-hover:text-accent">
                {service.title}
              </h3>
              <p className="text-sm text-accent mb-4">{service.subtitle}</p>

              {/* Benefits */}
              <ul className="space-y-2 mb-4">
                {service.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0 group-hover:scale-150 transition-transform" />
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* Tagline */}
              <p className="text-sm text-foreground/70 mb-4 flex items-center gap-1 group-hover:text-foreground transition-colors">
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span> {service.tagline}
              </p>

              {/* CTA */}
              <div className="mt-auto">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                  onClick={service.title === "Freelance Talent Matching" ? scrollToFreelancers : scrollToContact}
                >
                  {service.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
