'use client'

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { useState } from "react";

interface ContactProps {
  id?: string;
}

export default function Contact({ id }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const googleMapsUrl = "https://www.google.com/maps/search/Sua+Cidade,+Estado";

  return (
    <section id={id || "contact"} className="py-20 border-t w-full border-zinc-200 flex justify-center">
      <div className="container">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
            Contato
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Fale Conosco
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pronto para iniciar seu projeto? Entre em contato conosco hoje mesmo
            e receba um orçamento gratuito.
          </p>
        </motion.div>

        {/* Content - Centered */}
        <div className="max-w-4xl mx-auto md:flex items-center border-b border-t border-l border-zinc-200">
          {/* Contact Info - Centered Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-1 gap-6 mb-16 border-t border-b border-zinc-200"
          >
            {/* Phone */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center p-6 bg-white transition duration-300 border-b border-zinc-200"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Telefone</h4>
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
              <h4 className="font-semibold text-foreground mb-2">E-mail</h4>
              <a
                href="mailto:contato@reis.com"
                className="text-zinc-400 hover:text-zinc-900 transition-colors duration-300"
              >
                contato@reis.com
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center p-6 bg-white transition duration-300 border-t border-zinc-200"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Localização</h4>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-900 transition-colors duration-300 flex items-center gap-2 justify-center"
              >
                Sua Cidade, Estado
                <ArrowRight className="w-4 h-4" />
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
            className=" p-8 md:p-12 border bg-white border-zinc-200"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-zinc-800 mb-3">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-zinc-500 rounded-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-white"
                  placeholder="Seu nome"
                  required
                />
              </motion.div>

              {/* Phone */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-zinc-800 mb-3">
                  Telefone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-zinc-500 rounded-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-white"
                  placeholder="(555) 123-4567"
                  required
                />
              </motion.div>
            </div>

            {/* Email */}
            <motion.div variants={itemVariants} className="mb-6">
              <label className="block text-sm font-semibold text-zinc-800 mb-3">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-zinc-500 rounded-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-white"
                placeholder="seu@email.com"
                required
              />
            </motion.div>

            {/* Service */}
            <motion.div variants={itemVariants} className="mb-6">
              <label className="block text-sm font-semibold text-zinc-800 mb-3">
                Serviço de Interesse
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-zinc-500 rounded-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-white"
                required
              >
                <option value="">Selecione um serviço</option>
                <option value="fences">Cercas</option>
                <option value="decks">Deques</option>
                <option value="drywall">Drywall</option>
                <option value="landscaping">Paisagismo</option>
                <option value="roof">Telhados</option>
              </select>
            </motion.div>

            {/* Message */}
            <motion.div variants={itemVariants} className="mb-8">
              <label className="block text-sm font-semibold text-zinc-800 mb-3">
                Mensagem
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-zinc-500 rounded-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-white resize-none"
                rows={5}
                placeholder="Descreva seu projeto..."
                required
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-white py-4 font-semibold rounded-sm transition-colors duration-300"
            >
              Enviar Mensagem
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}