import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Briefcase,
  PenTool,
  Globe,
  Smartphone,
  FileText,
  ArrowRight,
} from "lucide-react";

// EDIT: Benefits for clients
const clientBenefits = [
  "Get work done without hunting for freelancers",
  "Quality control + communication handled",
  "Flexible for small or large tasks",
  "Transparent pricing, no surprises",
];

// EDIT: Benefits for freelancers
const freelancerBenefits = [
  "Get matched to better clients",
  "Clear requirements and expectations",
  "Long-term relationship potential",
  "Fair compensation, always",
];

// EDIT: Work types
const workTypes = [
  { icon: PenTool, title: "Logos & Brand Kits" },
  { icon: Globe, title: "Websites & Landing Pages" },
  { icon: Smartphone, title: "Social Media Content" },
  { icon: FileText, title: "Presentations & Pitch Decks" },
];

export const FreelancersSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="freelancers" className="section-padding bg-muted/30" ref={sectionRef}>
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            For Everyone
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Clients & <span className="text-accent">Freelancers</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Whether you need work done or want to find better clients—there's a place for you here.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* For Clients */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-premium"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">For Clients</h3>
            </div>

            <ul className="space-y-4 mb-6">
              {clientBenefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <Button
              variant="hero"
              size="lg"
              onClick={() => navigate("/client-form")}
              className="w-full group"
            >
              I'm a Client
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* For Freelancers */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-premium"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <PenTool className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">For Freelancers</h3>
            </div>

            <ul className="space-y-4 mb-6">
              {freelancerBenefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <Button
              variant="outline"
              size="lg"
              onClick={scrollToContact}
              className="w-full group"
            >
              I'm a Freelancer
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>

        {/* Work Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-xl font-bold text-center mb-8">Types of Work We Handle</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {workTypes.map((work, index) => (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="bg-card border border-border rounded-xl p-5 text-center hover:border-accent/30 hover:shadow-premium transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <work.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-semibold text-sm">{work.title}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
