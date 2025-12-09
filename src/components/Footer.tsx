import { motion } from "framer-motion";
import { Linkedin, Instagram, MessageCircle, Mail } from "lucide-react";

// EDIT: Footer links and content
const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "1Profile", href: "https://1profile.in" },
  { label: "Contact", href: "#contact" },
];

// EDIT: Social media links
const socialLinks = [
  {
    name: "Email",
    url: "mailto:rishidar27@gmail.com",
    icon: Mail,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rishidar",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/therealrishi2004",
    icon: Instagram,
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/9442636130",
    icon: MessageCircle,
  },
];


export const Footer = () => {
  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container-wide">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="text-2xl font-bold tracking-tight"
            whileHover={{ scale: 1.02 }}
          >
            RISHI<span className="text-accent">.</span>
          </motion.a>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  // Only prevent default and scroll for anchor links
                  if (link.href.startsWith('#')) {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }
                }}
                target={link.href.startsWith('#') ? undefined : "_blank"}
                rel={link.href.startsWith('#') ? undefined : "noopener noreferrer"}
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Tagline */}
          <p className="text-sm text-primary-foreground/40 text-center">
            Built with no-code thinking.<br />
            Executed like a startup.
          </p>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/40">
            © {new Date().getFullYear()} RISHIDAR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
