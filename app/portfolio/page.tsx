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
  { id: "fences", name: "Cercas" },
  { id: "decks", name: "Deques" },
  { id: "drywall", name: "Drywall" },
  { id: "landscaping", name: "Paisagismo" },
  { id: "roof", name: "Telhados" },
];

const portfolioItems: PortfolioItem[] = [
  // Cercas
  { id: "1", serviceId: "fences", image: "https://via.placeholder.com/400x300?text=Cerca+1" },
  { id: "2", serviceId: "fences", image: "https://via.placeholder.com/400x300?text=Cerca+2" },
  { id: "3", serviceId: "fences", image: "https://via.placeholder.com/400x300?text=Cerca+3" },
  { id: "4", serviceId: "fences", image: "https://via.placeholder.com/400x300?text=Cerca+4" },
  { id: "5", serviceId: "fences", image: "https://via.placeholder.com/400x300?text=Cerca+5" },
  { id: "6", serviceId: "fences", image: "https://via.placeholder.com/400x300?text=Cerca+6" },

  // Deques
  { id: "7", serviceId: "decks", image: "https://via.placeholder.com/400x300?text=Deque+1" },
  { id: "8", serviceId: "decks", image: "https://via.placeholder.com/400x300?text=Deque+2" },
  { id: "9", serviceId: "decks", image: "https://via.placeholder.com/400x300?text=Deque+3" },
  { id: "10", serviceId: "decks", image: "https://via.placeholder.com/400x300?text=Deque+4" },
  { id: "11", serviceId: "decks", image: "https://via.placeholder.com/400x300?text=Deque+5" },
  { id: "12", serviceId: "decks", image: "https://via.placeholder.com/400x300?text=Deque+6" },

  // Drywall
  { id: "13", serviceId: "drywall", image: "https://via.placeholder.com/400x300?text=Drywall+1" },
  { id: "14", serviceId: "drywall", image: "https://via.placeholder.com/400x300?text=Drywall+2" },
  { id: "15", serviceId: "drywall", image: "https://via.placeholder.com/400x300?text=Drywall+3" },
  { id: "16", serviceId: "drywall", image: "https://via.placeholder.com/400x300?text=Drywall+4" },
  { id: "17", serviceId: "drywall", image: "https://via.placeholder.com/400x300?text=Drywall+5" },
  { id: "18", serviceId: "drywall", image: "https://via.placeholder.com/400x300?text=Drywall+6" },

  // Paisagismo
  { id: "19", serviceId: "landscaping", image: "https://via.placeholder.com/400x300?text=Paisagismo+1" },
  { id: "20", serviceId: "landscaping", image: "https://via.placeholder.com/400x300?text=Paisagismo+2" },
  { id: "21", serviceId: "landscaping", image: "https://via.placeholder.com/400x300?text=Paisagismo+3" },
  { id: "22", serviceId: "landscaping", image: "https://via.placeholder.com/400x300?text=Paisagismo+4" },
  { id: "23", serviceId: "landscaping", image: "https://via.placeholder.com/400x300?text=Paisagismo+5" },
  { id: "24", serviceId: "landscaping", image: "https://via.placeholder.com/400x300?text=Paisagismo+6" },

  // Telhados
  { id: "25", serviceId: "roof", image: "https://via.placeholder.com/400x300?text=Telhado+1" },
  { id: "26", serviceId: "roof", image: "https://via.placeholder.com/400x300?text=Telhado+2" },
  { id: "27", serviceId: "roof", image: "https://via.placeholder.com/400x300?text=Telhado+3" },
  { id: "28", serviceId: "roof", image: "https://via.placeholder.com/400x300?text=Telhado+4" },
  { id: "29", serviceId: "roof", image: "https://via.placeholder.com/400x300?text=Telhado+5" },
  { id: "30", serviceId: "roof", image: "https://via.placeholder.com/400x300?text=Telhado+6" },
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
              Nossos Projetos
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
          className="grid grid-cols-1 md:grid-cols-3 border-t border-b py-1 border-zinc-200 gap-6 md:gap-8 px-5"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className={"overflow-hidden border border-zinc-200 h-64 md:h-80"}
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