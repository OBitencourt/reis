"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck } from "lucide-react";

interface AboutProps {
  id?: string;
}

export default function About({ id }: AboutProps) {
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

  const stats = [
    { label: "Completed Projects", value: "100+" },
    { label: "Years of Experience", value: "15+" },
    { label: "Satisfied Clients", value: "500+" },
    { label: "Satisfaction Rate", value: "98%" },
  ];

  return (
    <section
      id={id || "about"}
      className="p-8 md:p-20 border-t border-zinc-200 w-full"
    >
      <div className="container md:w-auto w-full md:flex md:flex-col md:items-center">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col-reverse md:w-full md:flex-row md:items-end md:justify-between mb-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="mt-6 self-end  md:mt-0 md:ml-0 flex items-center gap-2 text-secondary border-b border-transparent hover:border-secondary font-semibold hover:text-accent transition-colors duration-300 whitespace-nowrap"
          >
            Contact us
            <ArrowRight className="w-5 h-5" />
          </motion.a>
          <div className="flex-1">
            <p className="text-sm text-end font-light text-secondary mb-2 uppercase tracking-wide">
              About uts
            </p>
            <h2 className="text-4xl text-end md:text-5xl font-bold text-zinc-800">
              Building Dreams, Renovating Lives.
            </h2>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:flex md:flex-col md:w-1/2 items-start">
          {/* Left Column - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 px-6 md:px-6 py-12 border-t md:border-b border-l border-r border-zinc-200 md:h-163"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-zinc-800 mb-4">
                Who We Are
              </h3>
              <p className="text-lg text-zinc-800/80 leading-relaxed">
                Rei's is a family-owned company with over 15 years of experience in construction and renovation. Born from the passion of a father and son for excellence, we transform projects into reality with quality, dedication, and attention to detail.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-zinc-800 mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-zinc-800/80 leading-relaxed">
                To provide complete construction and renovation solutions that exceed our clients' expectations by combining technique, creativity, and personalized service in every project.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-zinc-800 mb-4">
                Why Choose Us
              </h3>
              <ul className="space-y-3">
                {[
                  "Experienced and qualified team",
                  "High-quality materials",
                  "Deadlines respected",
                  "Personalized service",
                  "Warranty on all services",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-3 text-lg text-zinc-800/80"
                  >
                    <BadgeCheck className="w-4 h-4" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 border w-full border-zinc-200"
          >

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`p-6 duration-300 hover:bg-zinc-100 transition border-t border-zinc-200 ${
                    (index == 0 && "border-b border-r") ||
                    (index == 1 && "border-b md:border-l") ||
                    (index == 2 && "md:border-r") ||
                    (index == 3 && "md:border-l")
                  }`}
                >
                  <div className="text-3xl font-bold text-zinc-700 mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm text-zinc-700/80 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
