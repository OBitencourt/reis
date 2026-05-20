"use client";

import { ArrowRight, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex items-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 w-full h-[120%]"
        style={{ y: backgroundY, top: "-10%" }}
      >
        <Image
          src="/hero.jpg"
          alt="image"
          quality={100}
          className="object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-black/10" />
      </motion.div>

      <div className="relative z-10 -mt-30 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-4 py-2 text-xs uppercase tracking-[0.18em] text-zinc-400">
            <ShieldCheck size={14} />
            Construction • Remodeling • Excellence
          </div>

          <h1 className="text-5xl md:text-6xl  font-semibold tracking-tighter text-zinc-100 leading-[1.05]">
            Building modern spaces with{" "}
            <span className="text-secondary brightness-105">
              excellence <span className="text-zinc-100">and</span>{" "}
              <span className="text-secondary">precision.</span>
            </span>
          </h1>

          <p className="mt-8 text-md text-zinc-300 font-light ml-10 leading-relaxed max-w-2xl text-center">
            Specialists in residential and commercial renovations, delivering
            quality in every detail.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center -ml-15">
            <a
              href="#contact"
              className="group bg-zinc-100 hover:bg-zinc-200 hover:shadow-sm hover:shadow-white/50 transition-all duration-300 rounded-full pl-7 pr-4 py-4 text-sm uppercase tracking-[0.18em] text-black flex items-center gap-3 hover:scale-105"
            >
              Get a free quote
              <div className="p-2 rounded-full bg-zinc-800 group-hover:translate-x-1 transition-transform duration-300">
                <ArrowRight size={16} className="text-white" />
              </div>
            </a>

            <a
              href="#services"
              className="border flex flex-col justify-center border-zinc-400 hover:border-zinc-200 transition-all duration-300 rounded-full px-7 py-4 text-sm uppercase tracking-[0.18em] text-zinc-100 hover:bg-zinc-200/10"
            >
              Our Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
