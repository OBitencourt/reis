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
      id="home"
      ref={ref}
      className="relative w-[98%] min-h-[88vh] rounded-[22px] flex overflow-hidden"
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

      <div className="z-10 mt-22 md:mt-6 max-w-7xl px-6 ">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-sans w-300 font-normal tracking-tighter text-zinc-100 leading-[0.95]">
            Building modern spaces with{" "}
            <span className="font-black tracking-[-18px] -ml-2 text-[175px] brightness-105">
              EXCELLENCE{" "}
              <span className="text-zinc-100 tracking-[-10px] -ml-2 text-7xl">
                and
              </span>{" "}
              <span className="font-black text-[175px] ml-257">PRECISION.</span>
            </span>
          </h1>

          <div className="absolute top-20 right-6 flex items-center justify-center w-45 h-45">
            {/* Ícone Centralizado */}
            <div className="absolute z-10 text-amber-500">
              <Image
                src="/medal-icon.svg"
                alt="Medal Icon"
                width={40}
                height={40}
              />
            </div>

            {/* Texto Circular com Animação de Rotação */}
            <svg
              className="w-full h-full animate-[spin_12s_linear_infinite]"
              viewBox="0 0 200 200"
            >
              <defs>
                {/* Mantive o raio em 70 para dar um bom respiro ao ícone */}
                <path
                  id="textPath"
                  d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                />
              </defs>

              <text className="text-sm font-bold uppercase   fill-white tracking-[2.3px]">
                {/* textLength e lengthAdjust ajudam a esticar o texto uniformemente se necessário */}
                <textPath href="#textPath" startOffset="0%">
                  construction - remodelling - excellence -
                </textPath>
              </text>
            </svg>
          </div>

          <p className="-mt-40 text-3xl text-zinc-300 font-light leading-tight max-w-xl">
            Specialists in residential and commercial renovations, delivering
            quality in every detail.
          </p>
          <div className="mt-10 flex flex-wrap gap-8">
            <a
              href="#contact"
              className="group bg-white hover:bg-zinc-200 py-2 font-medium hover:translate-x-2 transition-all duration-300 rounded-3xl pr-2 pl-5 text-xl uppercase tracking-[0.18em] text-black flex items-center gap-3 hover:scale-105"
            >
              <span className="bg-linear-to-r from-black via-[#686868] to-[#03020B] bg-clip-text text-transparent">
                Get a free quote
              </span>
              <div className="p-3 ml-1 rounded-2xl bg-linear-to-br from-secondary via-secondary to-secondary/50   transition-transform duration-300">
                <ArrowRight size={45} className="text-white" />
              </div>
            </a>

            <a
              href="#services"
              className="border flex flex-col justify-center border-white font-medium  transition-all duration-300 rounded-full px-7 text-md uppercase tracking-[0.18em] text-zinc-100 hover:bg-zinc-200/10"
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
