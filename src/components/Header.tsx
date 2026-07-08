'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'


export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    // Se estamos em /portfolio, navega para home com a section
    if (pathname === '/portfolio') {
      router.push(`/${href}`)
    } else {
      // Se já estamos em home, apenas faz scroll para a section
      window.location.href = href
    }
    setMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`top-0 left-0 z-50 font-sans transition-all duration-500 ${
        scrolled
          ? 'bg-[#0c0a07]/60 backdrop-blur-xl  w-[90%] left-[5%] top-5 rounded-3xl'
          : `bg-[#0c0a07]/60  w-full ${
            menuOpen ? "  backdrop-blur-xl" : "bg-transparent"
          } `
      }`}
    >
      <div className="max-w-480 mx-auto px-6">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? 'h-20' : 'h-24'
          }`}
        >
          {/* LOGO */}
          <Link href="/">
            <div className="relative">
              <Image 
                width={300}
                height={300}
                src={scrolled ? "/Logo-Preta-Detalhes-Verdes-E-Vermelhos-Reis.png" : "/Logo-Preta-Detalhes-Verdes-E-Vermelhos-Reis.png"}
                alt='logo-black'
                className='h-auto w-40'
              />

            </div>
          </Link>

          {/* NAV */}
          <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {[
              ['Home', '#home'],
              ['Services', '#services'],
              ['About us', '#about'],
              ['Contact', '#contact'],
            ].map(([label, href]) => (
              <button
                key={label}
                onClick={() => handleNavClick(href)}
                className={`group relative text-md font-sans font-normal text-[#4E4E4E] px-2 py-1.5 rounded-md hover:bg-[#E9E9E9]/80 transition-all cursor-pointer bg-none border-none`}
              >
                {label}
              </button>
            ))}
            
            {/* Portfólio Link com Next.js Link */}
            <Link
              href="/portfolio"
              className={`group relative text-md flex items-center  font-normal text-[#4E4E4E] px-2 py-1.5 rounded-md  hover:bg-[#E9E9E9]/80 transition-all`}
            >
              Portfólio

              <ArrowUpRight size={20} className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">

            <button
              onClick={() => handleNavClick('#contact')}
              className="bg-[#03020B] squircle transition-all duration-300 rounded-2xl pl-5 pr-1 pt-1 pb-1 text-sm uppercase tracking-[0.18em]  text-white flex items-center gap-2 cursor-pointer shadow-[inset_0px_0px_12px_5px_#525252,inset_0_-2px_4px_#00000099] hover:shadow-[inset_0px_0px_12px_8px_#525252,inset_0_-2px_4px_#00000099]"
            >
              <span className='bg-linear-to-r from-white via-white to-zinc-[#999999] bg-clip-text'>

                MAKE A FREE QUOTE
              </span>

              <div className='p-1.5 rounded-xl bg-[#F1F1F1]'> 
                <ChevronRight size={30} className='text-black ' />

              </div>
            </button>
          </div>

          {/* MOBILE */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.25"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`w-6 h-px bg-white transition-all duration-300 ${
                  menuOpen && i === 0
                    ? 'rotate-45 translate-y-1.5'
                    : ''
                }
                ${
                  menuOpen && i === 1
                    ? 'opacity-0'
                    : ''
                }
                ${
                  menuOpen && i === 2
                    ? '-rotate-45 -translate-y-1.5'
                    : ''
                }`}
              />
            ))}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden overflow-hidden ${
              scrolled ? "bg-transparent"
              : "bg-transparent backdrop-blur-xl"
            }`}
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {[
                ['Serviços', '#services'],
                ['Sobre', '#about'],
                ['Contato', '#contact'],
              ].map(([label, href]) => (
                <button
                  key={label}
                  onClick={() => handleNavClick(href)}
                  className="uppercase tracking-[0.18em] text-sm text-zinc-300 cursor-pointer bg-none border-none text-left"
                >
                  {label}
                </button>
              ))}
              
              {/* Portfólio Link Mobile com Next.js Link */}
              <Link
                href="/portfolio"
                className="uppercase tracking-[0.18em] text-sm text-zinc-300"
              >
                Portfólio
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
