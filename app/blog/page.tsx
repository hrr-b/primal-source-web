import Link from 'next/link'
import blogData from '@/content/blog.json'

export const metadata = {
  title: 'Blog — Primal Source',
  description: 'Identity. Discipline. Return to your origin.',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-16">
          <p className="text-[#8B6914] text-xs tracking-[0.4em] uppercase mb-4">The Source</p>
          <h1 className="font-['Bebas_Neue'] text-6xl tracking-wider text-[#f5f0e8]">
            HUMAN REDISCOVERY
          </h1>
          <div className="mt-4 w-16 h-px bg-[#8B6914]" />
        </div>

        <div className="flex flex-col gap-12">
          {blogData.posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block border-t border-white/5 pt-10">
              <p className="text-white/30 text-xs tracking-[0.2em] uppercase mb-3">{post.date}</p>
              <h2 className="font-['Bebas_Neue'] text-3xl tracking-wider text-[#f5f0e8] group-hover:text-[#c4a882] transition-colors duration-300 mb-3">
                {post.title}
              </h2>
              <p className="text-white/50 text-sm leading-7 tracking-wide mb-4">
                {post.excerpt}
              </p>
              <span className="text-[#8B6914] text-xs tracking-[0.3em] uppercase group-hover:tracking-[0.5em] transition-all duration-300">
                Read →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
