import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// EDIT: Navigation links - change text and href to match your section IDs
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "What I Do", href: "#services" },
  { label: "Freelancers", href: "#freelancers" },
  { label: "Teaching", href: "#teaching" },
  { label: "Works", href: "#works" },
  { label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
          }`}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="text-2xl md:text-3xl font-bold text-black tracking-tight"
            >
              RISHI<span className="text-accent">.</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.div key={link.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="nav"
                    size="default"
                    onClick={() => handleNavClick(link.href)}
                    className="px-4"
                  >
                    {link.label}
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* Desktop CTA - Get Startup Files */}
            <div className="hidden lg:flex items-center gap-2">
              <Button
                variant="accent"
                size="default"
                className="gap-2 shadow-lg"
                asChild
              >
                <a
                  href="https://drive.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4" />
                  Get Startup Files
                </a>
              </Button>
              <Button
                variant="outline"
                size="default"
                onClick={() => handleNavClick("#contact")}
              >
                Let's Talk
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 lg:hidden bg-background/95 backdrop-blur-lg border-b border-border"
          >
            <div className="container-wide py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  variant="ghost"
                  className="justify-start"
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </Button>
              ))}
              <Button
                variant="accent"
                className="mt-2"
                onClick={() => handleNavClick("#contact")}
              >
                Let's Talk
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
