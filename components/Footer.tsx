import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        <div className="text-center">
          <div className="font-['Bebas_Neue'] text-3xl text-[#f5f0e8] tracking-[0.3em] mb-2">
            PRIMAL SOURCE
          </div>
          <p className="text-[#c4a882] text-xs tracking-[0.3em] uppercase">
            Return to Your Origin
          </p>
        </div>

        <div className="flex items-center gap-10">
          <Link
            href="/products"
            className="text-white/40 hover:text-white/80 text-xs tracking-[0.15em] uppercase transition-colors duration-200"
          >
            Shop
          </Link>
          <Link
            href="/philosophy"
            className="text-white/40 hover:text-white/80 text-xs tracking-[0.15em] uppercase transition-colors duration-200"
          >
            Philosophy
          </Link>
          <a
            href="mailto:hello@primalsource.com"
            className="text-white/40 hover:text-white/80 text-xs tracking-[0.15em] uppercase transition-colors duration-200"
          >
            Contact
          </a>
        </div>

        <p className="text-white/20 text-xs tracking-widest">
          © {new Date().getFullYear()} PRIMAL SOURCE. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  )
}
