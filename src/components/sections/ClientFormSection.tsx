import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';
import { emailConfig } from '@/config/emailjs.config';

export const ClientFormSection = () => {
    const [formData, setFormData] = useState({
        budget: "",
        duration: "",
        category: "",
        name: "",
        mobile: "",
        notes: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [field]: e.target.value });
    };

    const handleSelect = (value: string) => {
        setFormData({ ...formData, category: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const { budget, duration, category, mobile, notes } = formData;

        if (!budget || !duration || !category || !mobile) {
            toast.error("Please fill in all required fields.");
            return;
        }

        setIsSubmitting(true);

        try {
            // Send email using EmailJS
            const templateParams = {
                from_mobile: mobile,
                budget: budget,
                duration: duration,
                category: category,
                notes: notes || "No additional notes",
                to_email: "rishidar27@gmail.com"
            };

            await emailjs.send(
                emailConfig.serviceId,
                emailConfig.templateId,
                templateParams,
                emailConfig.publicKey
            );

            toast.success("Request submitted successfully! We'll contact you soon.");

            // Reset form
            setFormData({ budget: "", duration: "", category: "", name: "", mobile: "", notes: "" });
        } catch (error) {
            console.error("Email sending failed:", error);
            toast.error("Failed to submit request. Please try again or contact us directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="client-form" className="section-padding">
            <div className="container-wide">
                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                            placeholder="Budget (e.g., $5000)"
                            value={formData.budget}
                            onChange={handleChange("budget")}
                            required
                        />
                        <Input
                            placeholder="Duration (e.g., 3 months)"
                            value={formData.duration}
                            onChange={handleChange("duration")}
                            required
                        />
                    </div>
                    <Select onValueChange={handleSelect} value={formData.category} required>
                        <SelectTrigger className="w-full h-12">
                            <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="web">Web Development</SelectItem>
                            <SelectItem value="mobile">Mobile App</SelectItem>
                            <SelectItem value="design">Design</SelectItem>
                            <SelectItem value="marketing">Marketing</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                    </Select>
                    <Input
                        placeholder="Mobile Number"
                        value={formData.mobile}
                        onChange={handleChange("mobile")}
                        required
                    />
                    <Textarea
                        placeholder="Additional information or notes"
                        value={formData.notes}
                        onChange={handleChange("notes")}
                        rows={4}
                    />
                    <Button type="submit" className="w-full" size="lg" variant="default" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Submit Request"}
                    </Button>
                </form>
            </div>
        </section>
    );
};
