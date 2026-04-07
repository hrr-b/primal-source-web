'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import GrainOverlay from '@/components/GrainOverlay'
import ProductCard from '@/components/ProductCard'
import AnimatedText from '@/components/AnimatedText'
import { getProducts } from '@/lib/shopify'
import homepageContent from '@/content/homepage.json'
import emailContent from '@/content/email.json'

const storyLines = homepageContent.story

export default function HomePage() {
  const storyRef = useRef<HTMLDivElement>(null)
  const [products, setProducts] = useState<Awaited<ReturnType<typeof getProducts>>>([])
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    getProducts().then(setProducts)
  }, [])

  useEffect(() => {
    if (!storyRef.current) return

    let cleanup: (() => void) | undefined

    const initGSAP = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const elements = storyRef.current?.querySelectorAll('.story-line')
      if (!elements) return

      const triggers: ReturnType<typeof ScrollTrigger.create>[] = []

      elements.forEach((el) => {
        gsap.set(el, { opacity: 0, y: 60 })
        const trigger = ScrollTrigger.create({
          trigger: el,
          start: 'top 80%',
          onEnter: () => {
            gsap.to(el, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
          },
        })
        triggers.push(trigger)
      })

      cleanup = () => {
        triggers.forEach(t => t.kill())
      }
    }

    initGSAP()
    return () => cleanup?.()
  }, [])

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden">
        <GrainOverlay />

        <motion.div
          className="relative z-20 text-center px-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <motion.p
            className="text-[#8B6914] text-xs tracking-[0.4em] uppercase mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Primal Source
          </motion.p>

          <h1
            className="font-['Bebas_Neue'] text-[clamp(4rem,12vw,10rem)] leading-none tracking-wider text-[#f5f0e8] mb-8"
          >
            {homepageContent.hero.headline.split(' TO').map((part, i) => i === 0 ? <span key={i}>{part} TO<br /></span> : <span key={i}>{part}</span>)}
          </h1>

          <motion.p
            className="text-[#f5f0e8]/50 text-lg tracking-widest max-w-md mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {homepageContent.hero.sub}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            <a
              href="/products"
              className="bg-[#8B6914] hover:bg-[#a07a1e] text-[#f5f0e8] text-xs tracking-[0.3em] uppercase py-4 px-10 transition-colors duration-300"
            >
              Shop Now
            </a>
            <a
              href="/philosophy"
              className="border border-[#f5f0e8]/20 hover:border-[#f5f0e8]/60 text-[#f5f0e8]/70 hover:text-[#f5f0e8] text-xs tracking-[0.3em] uppercase py-4 px-10 transition-all duration-300"
            >
              Our Philosophy
            </a>
          </motion.div>
        </motion.div>

        {/* Decorative bottom line */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
        >
          <span className="text-white/20 text-xs tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </section>

      {/* SCROLL STORY */}
      <section
        ref={storyRef}
        className="bg-[#0a0a0a] py-32 px-6"
      >
        <div className="max-w-3xl mx-auto flex flex-col gap-32">
          {storyLines.map((line, i) => (
            <div key={i} className="story-line text-center">
              <p
                className="font-['Bebas_Neue'] text-[clamp(2rem,5vw,4rem)] text-[#f5f0e8]/80 tracking-wide leading-tight"
              >
                {line}
              </p>
              <div className="mt-6 mx-auto w-12 h-px bg-[#8B6914]/40" />
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="bg-[#0a0a0a] py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <AnimatedText className="text-center mb-16">
            <p className="text-[#8B6914] text-xs tracking-[0.4em] uppercase mb-3">Apparel</p>
            <h2 className="font-['Bebas_Neue'] text-6xl tracking-wider text-[#f5f0e8]">
              THE COLLECTION
            </h2>
          </AnimatedText>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <AnimatedText key={product.id} delay={0.1 * parseInt(product.id)}>
                <ProductCard product={product} />
              </AnimatedText>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY BLOCK */}
      <section className="bg-[#1a1a1a] py-32 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedText>
            <blockquote className="italic text-[#f5f0e8]/60 text-xl leading-relaxed tracking-wide">
              &ldquo;Suffering is not a punishment. It is the forge.<br />
              Strength is not given. It is extracted — from discipline,<br />
              from darkness, from the refusal to stop.<br />
              <br />
              Every garment we make carries that conviction.&rdquo;
            </blockquote>
            <div className="mt-8 text-[#8B6914] text-xs tracking-[0.3em] uppercase">
              — Primal Source
            </div>
          </AnimatedText>
        </div>
      </section>

      {/* EMAIL CAPTURE */}
      <section className="bg-[#0a0a0a] py-24 px-6 border-t border-white/5">
        <div className="max-w-lg mx-auto text-center">
          <AnimatedText>
            <p className="text-[#8B6914] text-xs tracking-[0.4em] uppercase mb-4">Community</p>
            <h2 className="font-['Bebas_Neue'] text-4xl tracking-wider text-[#f5f0e8] mb-4">
              {emailContent.capture.headline}
            </h2>
            <p className="text-white/40 text-sm tracking-wide mb-10">
              {emailContent.capture.sub}
            </p>

            {submitted ? (
              <p className="text-[#c4a882] tracking-widest text-sm uppercase">
                You&apos;re in. Welcome to the circle.
              </p>
            ) : (
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-[#1a1a1a] border border-white/10 text-[#f5f0e8] placeholder-white/20 text-sm tracking-wide px-5 py-4 focus:outline-none focus:border-[#8B6914] transition-colors duration-200"
                />
                <button
                  type="submit"
                  className="bg-[#8B6914] hover:bg-[#a07a1e] text-[#f5f0e8] text-xs tracking-[0.2em] uppercase px-8 py-4 transition-colors duration-200 whitespace-nowrap"
                >
                  Join
                </button>
              </form>
            )}
          </AnimatedText>
        </div>
      </section>
    </>
  )
}
