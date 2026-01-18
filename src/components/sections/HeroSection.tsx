import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Briefcase, GraduationCap } from "lucide-react";

// EDIT: Hero content - update name, roles, mission, and stats
const heroContent = {
  greeting: "Hi, I'm",
  name: "RISHIDAR",
  nickname: "",
  roles: "CBO at KKR Pvt Ltd • Business & Investment Teacher • Building 1Profile",
  mission:
    "I help people start businesses, think like investors, and get work executed through the right freelancers.",
  socialProof: "Helping students, founders, and teams move from idea to execution.",
  primaryCta: "I am a client",
  secondaryCta: "Learn business with me",
  stats: [
    { icon: Users, value: "500+", label: "People guided into business thinking" },
    { icon: Briefcase, value: "200+", label: "Projects executed via freelancers" },
    { icon: GraduationCap, value: "1000+", label: "Hours of business & investment teaching" },
  ],
};

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/50" />

        {/* Decorative shapes */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-wide pt-24 pb-16">
        <div className="grid lg:grid-cols-[350px_1fr] gap-32 items-center max-w-7xl mx-auto">
          {/* Mobile Profile Photo - Shows only on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:hidden mb-0"
          >
            <div className="relative w-64 mx-auto">
              <motion.div
                className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-premium border-2 border-border"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Your profile photo */}
                <img
                  src="/profile-photo.jpg"
                  alt="Rishidar"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-black font-bold text-lg">Rishidar</h3>
                  <p className="text-white/90 text-xs">CBO • Teacher • Builder</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Desktop Profile Photo - Shows only on large screens */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block"
          >
            <div className="relative w-full max-w-[350px] mx-auto">
              <motion.div
                className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-premium border-2 border-border transition-all duration-300"
                style={{
                  transform: "rotate(-6deg)",
                  transformOrigin: "center",
                }}
                whileHover={{ scale: 1.05, rotate: 0, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                transition={{ duration: 0.3 }}
              >
                {/* Your profile photo */}
                <img
                  src="/profile-photo.jpg"
                  alt="Rishidar"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-black font-bold text-2xl">Rishidar</h3>
                  <p className="text-white/90 text-base">CBO • Teacher • Builder</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Hero Content */}
          <div className="text-center lg:text-left">
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-muted-foreground text-lg mb-4"
            >
              {heroContent.greeting}
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-2 text-black"
            >
              {heroContent.name}{" "}
              <span className="text-yellow-400">{heroContent.nickname}</span>
            </motion.h1>

            {/* Roles */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground mb-6"
            >
              {heroContent.roles}
            </motion.p>

            {/* Mission */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl sm:text-2xl text-foreground/80 mb-8 leading-relaxed max-w-2xl lg:max-w-none"
            >
              {heroContent.mission}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-8"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="default"
                  size="xl"
                  onClick={() => scrollToSection("#client-form")}
                  className="group"
                >
                  {heroContent.primaryCta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="heroOutline"
                  size="xl"
                  onClick={() => scrollToSection("#teaching")}
                >
                  {heroContent.secondaryCta}
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="hero"
                  size="xl"
                  onClick={() => scrollToSection("#freelancers")}
                  className="group"
                >
                  Get Freelancers
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Proof */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-sm text-muted-foreground"
            >
              {heroContent.socialProof}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
