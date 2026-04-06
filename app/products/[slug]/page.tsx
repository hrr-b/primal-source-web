import { getProduct, getProducts } from '@/lib/shopify'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return [
    { slug: 'origin-tee' },
    { slug: 'primal-hoodie' },
    { slug: 'source-cap' },
  ]
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = await getProduct(slug)

  if (!product) notFound()

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Back link */}
        <Link
          href="/products"
          className="text-white/40 hover:text-white/80 text-xs tracking-[0.2em] uppercase transition-colors duration-200 flex items-center gap-2 mb-12"
        >
          <span>←</span>
          <span>Back to Collection</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image placeholder */}
          <div className="aspect-square bg-[#1a1a1a] flex items-center justify-center border border-white/5">
            <span className="text-white/10 text-sm tracking-widest uppercase">
              Product Image
            </span>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center gap-8">
            <div>
              <p className="text-[#8B6914] text-xs tracking-[0.4em] uppercase mb-4">
                Primal Source
              </p>
              <h1 className="font-['Bebas_Neue'] text-6xl tracking-wider text-[#f5f0e8] mb-4">
                {product.name}
              </h1>
              <div className="w-16 h-px bg-[#8B6914] mb-6" />
              <p className="text-[#f5f0e8]/60 text-lg leading-8 tracking-wide">
                {product.description}
              </p>
            </div>

            <div className="flex items-baseline gap-4">
              <span className="font-['Bebas_Neue'] text-4xl text-[#c4a882] tracking-wider">
                ${product.price}
              </span>
              <span className="text-white/30 text-xs tracking-widest uppercase">USD</span>
            </div>

            {/* Size selector placeholder */}
            <div className="flex flex-col gap-3">
              <p className="text-white/40 text-xs tracking-[0.2em] uppercase">Size</p>
              <div className="flex gap-3">
                {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                  <button
                    key={size}
                    className="w-12 h-12 border border-white/10 hover:border-[#8B6914] text-white/50 hover:text-[#f5f0e8] text-xs tracking-wider transition-all duration-200"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button className="bg-[#8B6914] hover:bg-[#a07a1e] text-[#f5f0e8] text-xs tracking-[0.3em] uppercase py-5 px-12 transition-colors duration-300 w-full sm:w-auto">
              Add to Cart
            </button>

            <p className="text-white/20 text-xs tracking-wide">
              Free shipping on orders over $100. Returns within 30 days.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
