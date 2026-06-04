'use client'

import { motion } from "framer-motion";
import { useState } from "react";

interface PortfolioItem {
  id: string;
  serviceId: string;
  image: string;
}

interface Service {
  id: string;
  name: string;
}

const services: Service[] = [
  { id: "decks", name: "Decks" },
  { id: "fences", name: "Fences" },
  { id: "interlock", name: "Interlock" },
  { id: "railings", name: "Railings" },
  { id: "roof", name: "Roof" },
  { id: "woodwork", name: "Wood Work" },
  { id: "general", name: "General" },
];

const portfolioItems: PortfolioItem[] = [
  // Decks
  { id: "1", serviceId: "decks", image: "/deck-2.jpg" },
  { id: "2", serviceId: "decks", image: "/deck-3.jpg" },
  { id: "3", serviceId: "decks", image: "/deck-inicio.jpg" },
  { id: "4", serviceId: "decks", image: "/deck-interlock-railings.jpeg" },
  { id: "5", serviceId: "decks", image: "/deck-interlock-railings-2.jpeg" },

  // Fences
  { id: "6", serviceId: "fences", image: "/fence-1.jpeg" },
  { id: "7", serviceId: "fences", image: "/fence-2.jpeg" },
  { id: "8", serviceId: "fences", image: "/fence-3.jpeg" },
  { id: "9", serviceId: "fences", image: "/fence-4.jpeg" },

  // Interlock
  { id: "10", serviceId: "interlock", image: "/interlock-1.jpeg" },
  { id: "11", serviceId: "interlock", image: "/interlock-2.jpeg" },
  { id: "12", serviceId: "interlock", image: "/interlock-3.jpeg" },
  { id: "13", serviceId: "interlock", image: "/interlock-4-wood-sidings.jpg" },
  { id: "14", serviceId: "interlock", image: "/interlock-5.jpg" },
  { id: "15", serviceId: "interlock", image: "/interlock-6.jpg" },
  { id: "16", serviceId: "interlock", image: "/interlock-e-railings.jpg" },

  // Railings
  { id: "17", serviceId: "railings", image: "/railings_e_deque-1.jpeg" },
  { id: "18", serviceId: "railings", image: "/railings-1.jpeg" },
  { id: "19", serviceId: "railings", image: "/railings-2.jpeg" },
  { id: "20", serviceId: "railings", image: "/railings-3.jpg" },
  { id: "21", serviceId: "railings", image: "/railings-4-wood-sidings.jpg" },
  { id: "22", serviceId: "railings", image: "/railings-5.jpg" },

  // Roof
  { id: "23", serviceId: "roof", image: "/roof-4.jpg" },
  { id: "24", serviceId: "roof", image: "/wood-roof-1.jpeg" },
  { id: "25", serviceId: "roof", image: "/wood-roof-2.jpeg" },
  { id: "26", serviceId: "roof", image: "/wood-sidings-gate.jpg" },
  { id: "27", serviceId: "roof", image: "/woof-roof-and-walls-3.jpeg" },

  // Woodwork
  { id: "28", serviceId: "gates", image: "/gate-1.jpg" },

  // General
  { id: "29", serviceId: "sauna", image: "/sauna-1.jpg" },
];

export default function Portfolio() {
  const [activeService, setActiveService] = useState(services[0]);

  const filteredItems = portfolioItems.filter(
    (item) => item.serviceId === activeService.id
  );

  const contentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.05, duration: 0.4 },
    }),
  };

  return (
    <div className="min-h-screen w-full bg-zinc-800 pt-26">
      <div className="w-full py-15 border-t bg-white border-zinc-200">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col px-5 md:items-start md:justify-start mb-12"
        >
          <div className="flex-1">
            <p className="text-md font-light text-secondary text-muted-foreground mb-2 uppercase tracking-wide">
              Portfólio
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Projects
            </h2>
          </div>
        </motion.div>

        {/* Service Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap gap-1 border-t border-b border-zinc-200"
        >
          {services.map((service, index) => (
            <motion.button
              key={service.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              onClick={() => setActiveService(service)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 py-3 transition-all cursor-pointer duration-300 ${
                activeService.id === service.id
                  ? "bg-zinc-700 text-white font-medium"
                  : "bg-transparent text-zinc-500 border-r border-l border-zinc-200 hover:bg-zinc-200 hover:text-zinc-900"
              }`}
            >
              {service.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Title Section */}
        <motion.div
          key={activeService.id}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="mb-12 px-5 border-t border-b border-zinc-200 py-8"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">
            {activeService.name}
          </h1>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          key={`grid-${activeService.id}`}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-5"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="overflow-hidden p-1 border-zinc-200 border h-64 md:h-80"
            >
              <img
                src={item.image}
                alt={`${activeService.name} ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
