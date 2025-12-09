import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Building2, BookOpen, Users } from "lucide-react";

// EDIT: Timeline steps - your journey
const timeline = [
  {
    icon: Rocket,
    title: "Engineering & Early Curiosity",
    description: "Started with a technical foundation, always curious about how businesses work.",
  },
  {
    icon: Building2,
    title: "CBO at KKR Pvt Ltd",
    description: "Real-world execution, understanding operations, and building systems that scale.",
  },
  {
    icon: BookOpen,
    title: "Teaching Business & Investments",
    description: "Sharing practical knowledge with students and aspiring entrepreneurs.",
  },
  {
    icon: Users,
    title: "Building 1Profile",
    description: "Creating a bridge between clients and freelancers for seamless execution.",
  },
];

// EDIT: Your principles
const principles = [
  "Start small, move fast",
  "Think like an owner",
  "Teach what I practice",
  "Always build teams, not tasks",
  "Execution over perfection",
];

export const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-muted/30" ref={sectionRef}>
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            From Curiosity to <span className="text-accent">Execution</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My journey from engineering to becoming a CBO, teacher, and founder has been about
            one thing: helping others turn ideas into reality.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-8">My Journey</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-border" />

              {timeline.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="relative flex gap-6 pb-8 last:pb-0"
                >
                  {/* Icon */}
                  <div className="relative z-10 w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center shrink-0 shadow-sm">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Principles & Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Story */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-8 shadow-premium">
              <h3 className="text-xl font-bold mb-4">What Drives Me</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I've always believed that the best way to learn is by doing. That's why
                  I don't just teach theory—I share what I've practiced and what actually works.
                </p>
                <p>
                  Whether it's helping a student understand value investing, connecting a
                  founder with the right designer, or building systems at KKR, my focus
                  remains the same: <strong className="text-foreground">making things happen</strong>.
                </p>
                <p>
                  With 1Profile, I'm taking this further—creating a system where getting
                  work done is as simple as telling us what you need.
                </p>
              </div>
            </div>

            {/* Principles */}
            <div>
              <h3 className="text-xl font-bold mb-4">Principles I Work By</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {principles.map((principle, index) => (
                  <motion.div
                    key={principle}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                    className="flex items-center gap-3 bg-card/50 border border-border/50 rounded-lg px-4 py-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                    <span className="text-sm font-medium text-foreground">{principle}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
