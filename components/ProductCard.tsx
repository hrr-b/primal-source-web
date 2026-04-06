'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface Product {
  id: string
  slug: string
  name: string
  price: number
  description: string
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      className="bg-[#1a1a1a] border border-white/5 flex flex-col overflow-hidden"
      whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Image placeholder */}
      <div className="w-full aspect-square bg-[#0d0d0d] flex items-center justify-center">
        <span className="text-white/10 text-xs tracking-widest uppercase">Image</span>
      </div>

      <div className="flex flex-col gap-3 p-6">
        <div className="flex justify-between items-start">
          <h3 className="font-['Bebas_Neue'] text-2xl text-[#f5f0e8] tracking-wider">
            {product.name}
          </h3>
          <span className="text-[#c4a882] text-lg font-light">${product.price}</span>
        </div>

        <p className="text-white/50 text-sm tracking-wide">{product.description}</p>

        <Link
          href={`/products/${product.slug}`}
          className="mt-2 inline-block text-center bg-[#8B6914] hover:bg-[#a07a1e] text-[#f5f0e8] text-xs tracking-[0.2em] uppercase py-3 px-6 transition-colors duration-200"
        >
          View
        </Link>
      </div>
    </motion.div>
  )
}
