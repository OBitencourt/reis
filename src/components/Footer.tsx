'use client'

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

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

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 mb-8"
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-bold">Rei's</span>
            </div>
            <p className="text-white/80 text-sm">
              Construindo e reformando com excelência desde 2010.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-white/80 hover:text-white transition-colors">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-white/80">Cercas</li>
              <li className="text-white/80">Deques</li>
              <li className="text-white/80">Drywall</li>
              <li className="text-white/80">Paisagismo</li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                Facebook Icon
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                Instagram Icon
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                Linkedin Icon
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white/60 text-sm"
          >
            <p>
              &copy; {currentYear} Rei's Construction. Todos os direitos
              reservados.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}