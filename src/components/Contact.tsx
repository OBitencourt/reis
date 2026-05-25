'use client'

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowRight, Check } from "lucide-react";
import { useState } from "react";

interface ContactProps {
  id?: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
}

export default function Contact({ id }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Validação de campos
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^[\d\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error from field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Send to Formspree
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          message: formData.message,
        }),
      });

      if (response.ok) {
        // Show success toast
        setShowSuccessToast(true);
        
        // Clear form
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          message: "",
        });

        // Hide toast after 5 seconds
        setTimeout(() => {
          setShowSuccessToast(false);
        }, 5000);
      } else {
        alert("Error sending message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const googleMapsUrl = "https://www.google.com/maps/search/Your+City,+State";

  return (
    <section id={id || "contact"} className="py-20 border-t w-full border-zinc-200 flex justify-center">
      {/* Success Toast */}
      {showSuccessToast && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-6 right-6 z-50 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3"
        >
          <Check className="w-5 h-5" />
          <div>
            <p className="font-semibold">Message sent successfully!</p>
            <p className="text-sm opacity-90">We'll get back to you soon.</p>
          </div>
        </motion.div>
      )}

      <div className="container">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-6"
        >
          <p className="text-sm font-light text-secondary mb-2 uppercase tracking-wide">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your project? Contact us today and get a free quote.
          </p>
        </motion.div>

        {/* Content - Centered */}
        <div className="max-w-4xl mx-auto md:flex items-center border border-zinc-200">
          {/* Contact Info - Centered Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-1 gap-6 mb-16 md:border-t md:border-b border-zinc-200"
          >
            {/* Phone */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center p-6 bg-white transition duration-300 border-b border-zinc-200"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Phone</h4>
              <a
                href="tel:(555)123-4567"
                className="text-zinc-400 hover:text-zinc-900 transition-colors duration-300"
              >
                (555) 123-4567
              </a>
            </motion.div>

            {/* Email */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center p-6 bg-white transition duration-300 border-t border-b border-zinc-200"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Email</h4>
              <a
                href="mailto:contact@reis.com"
                className="text-zinc-400 hover:text-zinc-900 transition-colors duration-300"
              >
                contact@reis.com
              </a>
            </motion.div>
          </motion.div>

          {/* Form - Centered */}
          <motion.form
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className=" p-8 md:p-12 border-t md:border-t-none border-l border-r bg-white border-zinc-200"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-zinc-800 mb-3">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-sm focus:outline-none focus:border-secondary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-white ${
                    errors.name ? "border-red-500" : "border-zinc-500"
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </motion.div>

              {/* Phone */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-zinc-800 mb-3">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-sm focus:outline-none focus:border-secondary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-white ${
                    errors.phone ? "border-red-500" : "border-zinc-500"
                  }`}
                  placeholder="(555) 123-4567"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </motion.div>
            </div>

            {/* Email */}
            <motion.div variants={itemVariants} className="mb-6">
              <label className="block text-sm font-semibold text-zinc-800 mb-3">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-sm focus:outline-none focus:border-secondary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-white ${
                  errors.email ? "border-red-500" : "border-zinc-500"
                }`}
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </motion.div>

            {/* Service */}
            <motion.div variants={itemVariants} className="mb-6">
              <label className="block text-sm font-semibold text-zinc-800 mb-3">
                Service of Interest
              </label>
              <input
                type="text"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-sm focus:outline-none focus:border-secondary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-white ${
                  errors.service ? "border-red-500" : "border-zinc-500"
                }`}
                placeholder="e.g., Fences, Decks, Drywall..."
              />
              {errors.service && (
                <p className="text-red-500 text-sm mt-1">{errors.service}</p>
              )}
            </motion.div>

            {/* Message */}
            <motion.div variants={itemVariants} className="mb-8">
              <label className="block text-sm font-semibold text-zinc-800 mb-3">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-sm focus:outline-none focus:border-secondary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-white resize-none ${
                  errors.message ? "border-red-500" : "border-zinc-500"
                }`}
                rows={5}
                placeholder="Describe your project..."
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </motion.div>

            {/* Submit Button */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-zinc-700 hover:bg-zinc-800 disabled:bg-zinc/50 text-white cursor-pointer py-3 font-semibold rounded-xl transition-colors duration-300"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}