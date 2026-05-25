'use client'
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Clock } from "lucide-react";

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
    name: "Fences",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663348555494/8GftHgkLDKskeRnEf2JXtm/service-fences-GTYyKHcjHM668b4J85N72Q.webp",
    description:
      "Professional installation of modern fences using a variety of materials. From wooden fences to composite options, we provide durable and visually appealing solutions for your property.",
    duration: "5-10 days",
  },
  {
    id: "decks",
    name: "Decks",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663348555494/8GftHgkLDKskeRnEf2JXtm/hero-construction-NnbRubWQ8Fvp3JyAx75z3r.webp",
    description:
      "Construction of wooden or composite decks, perfect for outdoor spaces. Custom designs that transform your area into a cozy place to relax.",
    duration: "7-15 days",
  },
  {
    id: "drywall",
    name: "Drywall",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663348555494/8GftHgkLDKskeRnEf2JXtm/service-drywall-Qiyoir8k3LizWwfeW6EtPw.webp",
    description:
      "Drywall installation and finishing for modern interiors. Clean and precise walls with a professional finish that ensures durability and beauty.",
    duration: "3-7 days",
  },
  {
    id: "landscaping",
    name: "Landscaping",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663348555494/8GftHgkLDKskeRnEf2JXtm/service-landscaping-eXWJXbXxuKP8Cc2VSC.webp",
    description:
      "Landscaping projects that transform outdoor spaces. From planting to hardscaping, we create environments that reflect your style and increase your property's value.",
    duration: "10-20 days",
  },
  {
    id: "roof",
    name: "Roofs",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663348555494/8GftHgkLDKskeRnEf2JXtm/service-roof-9vdpy5tqRYjAwiSxchkAo4.webp",
    description:
      "Roof installation and repair using premium-quality materials. Reliable protection for your home with professional finishing and long-lasting durability.",
    duration: "7-14 days",
  },
];

interface ServicesProps {
  id?: string;
}

export default function Services({ id }: ServicesProps) {
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
    <section id={id || "services"} className="py-5 border-r border-l border-zinc-200">
      <div className="container  py-15 border-t border-zinc-200">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row px-5 md:items-center md:justify-between mb-12"
        >
          <div className="flex-1">
            <p className="text-md font-light text-secondary text-muted-foreground mb-2 uppercase tracking-wide">
              Services
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Complete solutions for any project.
            </h2>
          </div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="mt-6 md:ml-8 mr-8 flex items-center gap-2 text-secondary border-b border-transparent hover:border-b-secondary font-semibold hover:text-accent transition-colors duration-300 whitespace-nowrap"
          >
            Request a Quote
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Service Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap md:gap-1 border-t border-b border-zinc-200"
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
              className={`px-6 py-3  transition-all cursor-pointer duration-300 ${
                activeService.id === service.id
                  ? "bg-zinc-700 text-white font-medium"
                  : "bg-transparent text-zinc-500 border-r border-l border-t border-b border-zinc-200 hover:bg-zinc-200 hover:text-zinc-900"
              }`}
            >
              {service.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Content Grid */}
        <motion.div
          key={activeService.id}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="grid md:grid-cols-2 gap-8 md:gap-12 border-t border-b border-zinc-200 items-center px-5"
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden border-r border-l border-b md:border-b-none border-zinc-200 p-2 h-96 md:h-full"
          >
            <img
              src={activeService.image}
              alt={activeService.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center justify-between md:block ">
              <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {activeService.name}
              </h3>

              {/* Duration Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="inline-block self-end mb-6 px-4 w-30 py-2 bg-muted rounded-full bg-zinc-200"
              >
                <span className="text-sm flex gap-2 items-center font-semibold text-foreground">
                  <Clock className="w-3 h-3" /> {activeService.duration}
                </span>
              </motion.div>
            </div>

            {/* Description */}
            <p className="text-lg md:w-2/3 text-foreground/80 leading-relaxed mb-8">
              {activeService.description}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}