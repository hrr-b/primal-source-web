import { getProducts } from '@/lib/shopify'
import ProductCard from '@/components/ProductCard'
import AnimatedText from '@/components/AnimatedText'
import GrainOverlay from '@/components/GrainOverlay'

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end bg-[#0a0a0a] overflow-hidden pb-16 pt-32">
        <GrainOverlay />
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <p className="text-[#8B6914] text-xs tracking-[0.4em] uppercase mb-4">
            Primal Source Apparel
          </p>
          <h1 className="font-['Bebas_Neue'] text-[clamp(4rem,10vw,8rem)] leading-none tracking-wider text-[#f5f0e8]">
            THE COLLECTION
          </h1>
          <div className="mt-6 w-24 h-px bg-[#8B6914]" />
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-[#0a0a0a] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <AnimatedText key={product.id} delay={0.1 * parseInt(product.id)}>
                <ProductCard product={product} />
              </AnimatedText>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
