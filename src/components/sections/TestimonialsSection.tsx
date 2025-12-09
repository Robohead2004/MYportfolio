import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

// EDIT: Testimonials - replace with real testimonials
const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Student → Founder",
    quote:
      "Rishi's sessions changed how I think about business. I went from confused student to launching my first product in 6 months. His practical approach cuts through the noise.",
    avatar: "AM",
  },
  {
    name: "Priya Sharma",
    role: "Startup Founder",
    quote:
      "Working with 1Profile was seamless. They matched us with a designer who understood our vision perfectly. Our brand identity went from messy to memorable.",
    avatar: "PS",
  },
  {
    name: "Vikram Patel",
    role: "Business Owner",
    quote:
      "I needed a landing page fast. Rishi connected me with the right freelancer, and the project was done in days, not weeks. Quality work, zero stress.",
    avatar: "VP",
  },
  {
    name: "Neha Reddy",
    role: "Aspiring Investor",
    quote:
      "The investment fundamentals sessions opened my eyes. I finally understand how to evaluate businesses and make smarter decisions with my money.",
    avatar: "NR",
  },
  {
    name: "Karthik Iyer",
    role: "Early-stage Founder",
    quote:
      "Rishi doesn't just teach—he connects dots you didn't know existed. His advisory sessions helped me avoid mistakes that would have cost months.",
    avatar: "KI",
  },
  {
    name: "Anjali Gupta",
    role: "Freelancer",
    quote:
      "Joining 1Profile's network changed my freelance career. Better clients, clearer briefs, and fair pay. It's how freelancing should work.",
    avatar: "AG",
  },
];

export const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-muted/30" ref={sectionRef}>
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            What People <span className="text-accent">Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Real feedback from students, founders, and clients I've had the pleasure of working with.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 shadow-premium"
            >
              <Quote className="w-8 h-8 text-accent/30 mb-4" />
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-6 shadow-premium mb-6"
          >
            <Quote className="w-8 h-8 text-accent/30 mb-4" />
            <p className="text-muted-foreground mb-6 leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold text-sm">
                {testimonials[currentIndex].avatar}
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4">
            <Button variant="outline" size="icon" onClick={prevTestimonial}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-accent w-6"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={nextTestimonial}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
