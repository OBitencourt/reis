'use client'

import { motion } from "framer-motion";
import { useState } from "react";

interface Service {
  id: string;
  name: string;
  image: string;
  description: string;
  duration: string;
}

const services: Service[] = [
  {
    id: "fences",
    name: "Cercas",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663348555494/8GftHgkLDKskeRnEf2JXtm/service-fences-GTYyKHcjHM668b4J85N72Q.webp",
    description:
      "Instalação profissional de cercas modernas em diversos materiais. Desde cercas de madeira até compostas, oferecemos soluções duráveis e esteticamente atraentes para sua propriedade.",
    duration: "5-10 dias",
  },
  {
    id: "decks",
    name: "Deques",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663348555494/8GftHgkLDKskeRnEf2JXtm/hero-construction-NnbRubWQ8Fvp3JyAx75z3r.webp",
    description:
      "Construção de decks de madeira ou material composto, perfeitos para áreas externas. Designs personalizados que transformam seu espaço em um local aconchegante para relaxar.",
    duration: "7-15 dias",
  },
  {
    id: "drywall",
    name: "Drywall",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663348555494/8GftHgkLDKskeRnEf2JXtm/service-drywall-Qiyoir8k3LizWwfeW6EtPw.webp",
    description:
      "Instalação e acabamento de drywall para interiores modernos. Paredes limpas e precisas, com acabamento profissional que garante durabilidade e beleza.",
    duration: "3-7 dias",
  },
  {
    id: "landscaping",
    name: "Paisagismo",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663348555494/8GftHgkLDKskeRnEf2JXtm/service-landscaping-eXWJXbXxuKP8Cc2VSC.webp",
    description:
      "Projetos de paisagismo que transformam espaços externos. Desde plantações até hardscaping, criamos ambientes que refletem seu estilo e aumentam o valor da propriedade.",
    duration: "10-20 dias",
  },
  {
    id: "roof",
    name: "Telhados",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663348555494/8GftHgkLDKskeRnEf2JXtm/service-roof-9vdpy5tqRYjAwiSxchkAo4.webp",
    description:
      "Instalação e reparo de telhados com materiais de qualidade superior. Proteção confiável para sua casa com acabamento profissional e garantia de durabilidade.",
    duration: "7-14 dias",
  },
];

interface ServicesProps {
  id?: string;
}

export default function Services({ id }: ServicesProps ) {
  const [activeService, setActiveService] = useState(services[0]);

  const tabVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
    hover: { scale: 1.02, transition: { duration: 0.2 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } },
  };

  return (
    <section id={id || "services"} className="py-20 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-primary">Nossos Serviços</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços de construção e reforma para
            atender todas as suas necessidades.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Tabs */}
          <motion.div className="lg:col-span-1 space-y-3">
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                custom={index}
                variants={tabVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                onClick={() => setActiveService(service)}
                className={`w-full text-left px-6 py-4 rounded-lg transition-all duration-300 ${
                  activeService.id === service.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-foreground hover:bg-gray-50 border border-border"
                }`}
              >
                <span className="font-semibold">{service.name}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Content */}
          <motion.div
            key={activeService.id}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:col-span-2"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={activeService.image}
                  alt={activeService.name}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="mb-3 text-primary">{activeService.name}</h3>
                <div className="inline-block mb-4 px-3 py-1 bg-accent/10 rounded-full">
                  <span className="text-sm font-semibold text-accent">
                    ⏱ {activeService.duration}
                  </span>
                </div>
                <p className="text-foreground leading-relaxed mb-6">
                  {activeService.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-accent hover:bg-accent/90 text-white rounded-lg font-semibold transition-colors duration-300"
                >
                  Solicitar Orçamento
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}