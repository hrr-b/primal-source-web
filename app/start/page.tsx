'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import GrainOverlay from '@/components/GrainOverlay'

const steps = [
  { number: '01', text: 'Notice what you\'ve been feeling' },
  { number: '02', text: 'Stop ignoring it' },
  { number: '03', text: 'Move toward who you really are' },
]

export default function StartPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      <GrainOverlay />

      <div className="relative z-10 max-w-2xl mx-auto px-6 pt-32 pb-24 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-[#8B6914] text-xs tracking-[0.4em] uppercase mb-6">Begin Here</p>
          <h1 className="font-['Bebas_Neue'] text-[clamp(3rem,10vw,7rem)] leading-none tracking-wider text-[#f5f0e8] mb-6">
            START NOW
          </h1>
          <p className="text-white/40 text-lg tracking-wide mb-16">
            Three steps. No complexity. Just truth.
          </p>
        </motion.div>

        <div className="w-full flex flex-col gap-8 mb-20">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-6 text-left border-t border-white/5 pt-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.8 }}
            >
              <span className="font-['Bebas_Neue'] text-4xl text-[#8B6914]/40 tracking-wider leading-none">
                {step.number}
              </span>
              <p className="text-[#f5f0e8] text-xl leading-8 tracking-wide mt-1">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {submitted ? (
            <div className="text-center">
              <p className="text-[#c4a882] tracking-widest text-sm uppercase mb-4">
                You're in the circle.
              </p>
              <Link
                href="/products"
                className="text-[#8B6914] text-xs tracking-[0.3em] uppercase hover:tracking-[0.5em] transition-all duration-300"
              >
                Explore the collection →
              </Link>
            </div>
          ) : (
            <>
              <p className="text-white/30 text-sm tracking-wide mb-6">
                Join the Primal Circle — first access to drops and content.
              </p>
              <form
                onSubmit={async (e) => {
      e.preventDefault()
      if (!email) return
      try {
        await fetch('/api/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        })
      } catch {}
      setSubmitted(true)
    }}
                className="flex flex-col sm:flex-row gap-3"
              >
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
                  className="bg-[#8B6914] hover:bg-[#a07a1e] text-[#f5f0e8] text-xs tracking-[0.3em] uppercase px-8 py-4 transition-colors duration-200 whitespace-nowrap"
                >
                  Start Now
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </div>
  )
}
