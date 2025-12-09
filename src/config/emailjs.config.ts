// EmailJS Configuration
// Instructions:
// 1. Create a .env.local file in the root of your project (next to package.json)
// 2. Add these three lines to .env.local:
//    VITE_EMAILJS_SERVICE_ID=service_rixwi0q
//    VITE_EMAILJS_TEMPLATE_ID=template_clientform
//    VITE_EMAILJS_PUBLIC_KEY=YOUR_ACTUAL_PUBLIC_KEY
// 3. Replace YOUR_ACTUAL_PUBLIC_KEY with your real public key from EmailJS

export const emailConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_5kou4jg',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_af4xrmb',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'c0WxzZoG8RzHkOLXW',
};
