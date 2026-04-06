import AnimatedText from '@/components/AnimatedText'
import GrainOverlay from '@/components/GrainOverlay'

const sections = [
  {
    title: 'THE REFUSAL',
    body: `We built Primal Source because we were tired of fashion that lacked meaning.
    Tired of clothes that dressed the surface while ignoring the substance.
    We believe what you wear should reflect who you are becoming — not who you already are.`,
  },
  {
    title: 'THE FORGE',
    body: `Every man who has ever become something did it through a process of discomfort.
    Not inspiration. Not luck. Through the daily act of showing up when every part of you
    said stop. That struggle deserves to be honored — worn, carried, remembered.`,
  },
  {
    title: 'THE SOURCE',
    body: `The source is what you return to when everything else falls away.
    Your principles. Your discipline. Your non-negotiable commitment to yourself.
    We create pieces that remind you of that anchor — and dare the world to notice.`,
  },
  {
    title: 'THE STANDARD',
    body: `We source with intention. Every material chosen for longevity.
    Every silhouette built for presence. We don't follow trends.
    We build for the man who is building himself.`,
  },
]

export default function PhilosophyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end bg-[#0a0a0a] overflow-hidden pb-16 pt-32">
        <GrainOverlay />
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <p className="text-[#8B6914] text-xs tracking-[0.4em] uppercase mb-4">
            Our Creed
          </p>
          <h1 className="font-['Bebas_Neue'] text-[clamp(4rem,10vw,8rem)] leading-none tracking-wider text-[#f5f0e8]">
            THE ORIGIN
          </h1>
          <div className="mt-6 w-24 h-px bg-[#8B6914]" />
        </div>
      </section>

      {/* Philosophy Sections */}
      <section className="bg-[#0a0a0a] py-24 px-6">
        <div className="max-w-3xl mx-auto flex flex-col gap-24">
          {sections.map((section, i) => (
            <AnimatedText key={i} delay={0.1}>
              <div className="flex flex-col gap-5">
                <h2 className="font-['Bebas_Neue'] text-4xl tracking-[0.2em] text-[#f5f0e8]">
                  {section.title}
                </h2>
                <div className="w-8 h-px bg-[#8B6914]" />
                <p className="text-[#f5f0e8]/60 leading-8 tracking-wide text-lg">
                  {section.body}
                </p>
              </div>
            </AnimatedText>
          ))}
        </div>
      </section>

      {/* Closing Statement */}
      <section className="bg-[#1a1a1a] py-32 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedText>
            <p className="font-['Bebas_Neue'] text-[clamp(1.5rem,4vw,3rem)] text-[#f5f0e8]/30 leading-snug tracking-wider">
              &ldquo;YOU ARE NOT THE RESULT OF YOUR CIRCUMSTANCES.
              <br />
              YOU ARE THE RESULT OF YOUR CHOICES.&rdquo;
            </p>
            <div className="mt-10">
              <a
                href="/products"
                className="inline-block bg-[#8B6914] hover:bg-[#a07a1e] text-[#f5f0e8] text-xs tracking-[0.3em] uppercase py-4 px-10 transition-colors duration-300"
              >
                Shop The Collection
              </a>
            </div>
          </AnimatedText>
        </div>
      </section>
    </>
  )
}
