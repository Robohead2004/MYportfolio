import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { ExternalLink, Download } from "lucide-react";

// EDIT: Your works/projects data
const works = [
    {
        title: "Project One",
        description: "An innovative solution for modern businesses",
        image: "/placeholder.svg",
        link: "#",
    },
    {
        title: "Project Two",
        description: "Creative design meets functionality",
        image: "/placeholder.svg",
        link: "#",
    },
    {
        title: "Project Three",
        description: "Building the future of web applications",
        image: "/placeholder.svg",
        link: "#",
    },
    {
        title: "Project Four",
        description: "Transforming ideas into reality",
        image: "/placeholder.svg",
        link: "#",
    },
];

export const WorksSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section id="works" className="section-padding bg-background" ref={sectionRef}>
            <div className="container-wide">
                {/* Google Drive Link */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center mb-8"
                >
                    <Button
                        variant="outline"
                        size="lg"
                        className="group gap-2"
                        asChild
                    >
                        <a
                            href="https://drive.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Download className="w-4 h-4 transition-transform group-hover:scale-110" />
                            Get Startup Files
                            <ExternalLink className="w-3 h-3 opacity-60" />
                        </a>
                    </Button>
                </motion.div>

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-center mb-16"
                >
                    <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                        Portfolio
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
                        My <span className="text-accent">Works</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Explore some of my recent projects and creative endeavors
                    </p>
                </motion.div>

                {/* Works Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full max-w-6xl mx-auto"
                >
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {works.map((work, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                        className="p-1 h-full"
                                    >
                                        <div className="group relative bg-card border border-border rounded-2xl overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-300 h-full">
                                            {/* Project Image */}
                                            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                                                <img
                                                    src={work.image}
                                                    alt={work.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                                {/* Overlay Button */}
                                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <Button
                                                        variant="secondary"
                                                        size="sm"
                                                        className="gap-2"
                                                        asChild
                                                    >
                                                        <a
                                                            href={work.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            View Project
                                                            <ExternalLink className="w-4 h-4" />
                                                        </a>
                                                    </Button>
                                                </div>
                                            </div>

                                            {/* Project Info */}
                                            <div className="p-6">
                                                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                                                    {work.title}
                                                </h3>
                                                <p className="text-muted-foreground text-sm">
                                                    {work.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex" />
                        <CarouselNext className="hidden md:flex" />
                    </Carousel>
                </motion.div>
            </div>
        </section>
    );
};
