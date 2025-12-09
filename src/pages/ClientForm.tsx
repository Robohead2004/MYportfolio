import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { ArrowLeft, Send, Upload, X, FileIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { emailConfig } from '@/config/emailjs.config';

export default function ClientForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        budget: "",
        duration: "",
        category: "",
        name: "",
        mobile: "",
        notes: "",
    });
    const [files, setFiles] = useState<File[]>([]);

    const handleChange = (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [field]: e.target.value });
    };

    const handleSelect = (value: string) => {
        setFormData({ ...formData, category: value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = Array.from(e.target.files || []);
        const maxSize = 50 * 1024 * 1024; // 50MB per file

        const validFiles = selectedFiles.filter(file => {
            if (file.size > maxSize) {
                toast.error(`${file.name} is too large. Max size is 50MB.`);
                return false;
            }
            return true;
        });

        setFiles(prev => [...prev, ...validFiles]);
    };

    const removeFile = (index: number) => {
        setFiles(prev => prev.filter((_, i) => i !== index));
    };

    const formatFileSize = (bytes: number) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
    };

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const { budget, duration, category, name, mobile, notes } = formData;
        if (!budget || !duration || !category || !name || !mobile) {
            toast.error("Please fill in all required fields.");
            return;
        }

        setIsSubmitting(true);

        try {
            // Convert files to base64 for EmailJS
            const fileAttachments = await Promise.all(
                files.map(async (file) => {
                    return new Promise<string>((resolve) => {
                        const reader = new FileReader();
                        reader.onload = () => {
                            resolve(reader.result as string);
                        };
                        reader.readAsDataURL(file);
                    });
                })
            );

            // Create file list for email body
            const filesList = files.map((file, index) =>
                `${index + 1}. ${file.name} (${formatFileSize(file.size)})`
            ).join('\n') || 'No files attached';

            // Send email using EmailJS
            const templateParams = {
                from_name: name,
                from_mobile: mobile,
                budget: budget,
                duration: duration,
                category: category,
                notes: notes || "No additional notes",
                files_list: filesList,
                to_email: "rishidar27@gmail.com"
            };

            console.log("🔵 Sending email with EmailJS...");
            console.log("Service ID:", emailConfig.serviceId);
            console.log("Template ID:", emailConfig.templateId);
            console.log("Template Params:", templateParams);
            console.log("Files attached:", files.length);

            const response = await emailjs.send(
                emailConfig.serviceId,
                emailConfig.templateId,
                templateParams,
                emailConfig.publicKey
            );

            console.log("✅ Email sent successfully!", response);
            toast.success("Submitted successfully! We'll contact you soon.");

            // Reset form
            setFormData({ budget: "", duration: "", category: "", name: "", mobile: "", notes: "" });
            setFiles([]);

            // Redirect to home after 1.5 seconds
            setTimeout(() => {
                navigate("/");
            }, 1500);
        } catch (error: any) {
            console.error("❌ Email sending failed!");
            console.error("Full error:", error);
            console.error("Error status:", error.status);
            console.error("Error text:", error.text);

            // Show specific error message
            let errorMessage = "Failed to submit request. ";
            if (error.status === 400) {
                errorMessage += "Template variables mismatch. Check console.";
            } else if (error.status === 403) {
                errorMessage += "Invalid credentials. Check service ID and public key.";
            } else if (error.text) {
                errorMessage += error.text;
            } else {
                errorMessage += "Please check browser console for details.";
            }

            toast.error(errorMessage);
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-background">
            {/* Header */}
            <div className="border-b border-border">
                <div className="container-wide py-6">
                    <Button
                        variant="ghost"
                        onClick={() => navigate("/")}
                        className="gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Button>
                </div>
            </div>

            {/* Form Section */}
            <section className="section-padding">
                <div className="container-wide">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl mx-auto"
                    >
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                Tell us about your <span className="text-accent">project</span>
                            </h1>
                            <p className="text-muted-foreground text-lg">
                                Fill out the form below and we'll get back to you within 24 hours
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-card border border-border rounded-2xl p-8 shadow-premium"
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Your Name *
                                        </label>
                                        <Input
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={handleChange("name")}
                                            required
                                            className="h-12"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Mobile Number *
                                        </label>
                                        <Input
                                            placeholder="+91 XXXXX XXXXX"
                                            value={formData.mobile}
                                            onChange={handleChange("mobile")}
                                            required
                                            className="h-12"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Budget *
                                        </label>
                                        <Input
                                            placeholder="e.g., $5000 or ₹50,000"
                                            value={formData.budget}
                                            onChange={handleChange("budget")}
                                            required
                                            className="h-12"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Duration *
                                        </label>
                                        <Input
                                            placeholder="e.g., 3 months"
                                            value={formData.duration}
                                            onChange={handleChange("duration")}
                                            required
                                            className="h-12"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Category *
                                    </label>
                                    <Select onValueChange={handleSelect} value={formData.category} required>
                                        <SelectTrigger className="w-full h-12">
                                            <SelectValue placeholder="Select project category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="web">Web Development</SelectItem>
                                            <SelectItem value="mobile">Mobile App</SelectItem>
                                            <SelectItem value="design">Design (Logo, Brand Kit)</SelectItem>
                                            <SelectItem value="marketing">Marketing & Social Media</SelectItem>
                                            <SelectItem value="presentation">Presentations & Pitch Decks</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Additional Information
                                    </label>
                                    <Textarea
                                        placeholder="Tell us more about your project, requirements, timeline, etc..."
                                        value={formData.notes}
                                        onChange={handleChange("notes")}
                                        rows={6}
                                        className="resize-none"
                                    />
                                </div>

                                {/* File Upload Section */}
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Sample Files (Optional)
                                    </label>
                                    <p className="text-sm text-muted-foreground mb-3">
                                        Upload any sample files, references, or documents (Max 50MB per file)
                                    </p>

                                    <div className="space-y-4">
                                        {/* File Input */}
                                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-xl cursor-pointer hover:border-accent transition-colors bg-card/50">
                                            <div className="flex flex-col items-center justify-center gap-2">
                                                <Upload className="w-8 h-8 text-muted-foreground" />
                                                <p className="text-sm text-muted-foreground">
                                                    <span className="font-semibold text-accent">Click to upload</span> or drag and drop
                                                </p>
                                                <p className="text-xs text-muted-foreground">
                                                    PNG, JPG, PDF, DOC (Max 50MB)
                                                </p>
                                            </div>
                                            <input
                                                type="file"
                                                multiple
                                                accept="image/*,.pdf,.doc,.docx,.txt"
                                                onChange={handleFileChange}
                                                className="hidden"
                                            />
                                        </label>

                                        {/* File Preview */}
                                        {files.length > 0 && (
                                            <div className="space-y-2">
                                                <p className="text-sm font-medium text-foreground">
                                                    Uploaded Files ({files.length})
                                                </p>
                                                <div className="space-y-2">
                                                    {files.map((file, index) => (
                                                        <motion.div
                                                            key={index}
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            exit={{ opacity: 0, y: -10 }}
                                                            className="flex items-center justify-between p-3 bg-card border border-border rounded-lg"
                                                        >
                                                            <div className="flex items-center gap-3 flex-1 min-w-0">
                                                                <FileIcon className="w-5 h-5 text-accent flex-shrink-0" />
                                                                <div className="flex-1 min-w-0">
                                                                    <p className="text-sm font-medium text-foreground truncate">
                                                                        {file.name}
                                                                    </p>
                                                                    <p className="text-xs text-muted-foreground">
                                                                        {formatFileSize(file.size)}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <Button
                                                                type="button"
                                                                variant="ghost"
                                                                size="sm"
                                                                onClick={() => removeFile(index)}
                                                                className="flex-shrink-0 h-8 w-8 p-0"
                                                            >
                                                                <X className="w-4 h-4" />
                                                            </Button>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full h-14 text-lg group"
                                    size="lg"
                                    variant="hero"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Submitting..." : "Submit Request"}
                                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </form>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
