import blogData from '@/content/blog.json'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return blogData.posts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogData.posts.find(p => p.slug === slug)
  if (!post) return {}
  return { title: `${post.title} — Primal Source`, description: post.excerpt }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogData.posts.find(p => p.slug === slug)
  if (!post) notFound()

  const paragraphs = post.content.split('\n\n').filter(Boolean)

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <Link
          href="/blog"
          className="text-white/40 hover:text-white/80 text-xs tracking-[0.2em] uppercase transition-colors duration-200 flex items-center gap-2 mb-16"
        >
          <span>←</span>
          <span>All Posts</span>
        </Link>

        <p className="text-white/30 text-xs tracking-[0.2em] uppercase mb-4">{post.date}</p>
        <h1 className="font-['Bebas_Neue'] text-5xl tracking-wider text-[#f5f0e8] mb-6 leading-tight">
          {post.title}
        </h1>
        <div className="w-16 h-px bg-[#8B6914] mb-12" />

        <div className="flex flex-col gap-6">
          {paragraphs.map((para, i) => (
            <p
              key={i}
              className={`leading-8 tracking-wide ${
                para.startsWith('**')
                  ? 'text-[#f5f0e8] font-semibold text-base'
                  : para.length < 60
                  ? 'text-[#c4a882] text-lg font-light italic'
                  : 'text-[#f5f0e8]/70 text-base'
              }`}
              dangerouslySetInnerHTML={{
                __html: para
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              }}
            />
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-white/5 text-center">
          <p className="text-[#8B6914] text-xs tracking-[0.4em] uppercase mb-6">Ready?</p>
          <Link
            href="/start"
            className="bg-[#8B6914] hover:bg-[#a07a1e] text-[#f5f0e8] text-xs tracking-[0.3em] uppercase py-4 px-10 transition-colors duration-300 inline-block"
          >
            Return to Your Origin
          </Link>
        </div>
      </div>
    </div>
  )
}
