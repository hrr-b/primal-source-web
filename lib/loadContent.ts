import type { UserType } from './session'

export type HeroContent = {
  headline: string
  sub: string
  cta_primary: string
  cta_secondary?: string
}

export type DynamicContent = {
  hero: HeroContent
  story?: string[]
  philosophy?: { headline: string; body: string }
  email?: { headline: string; sub: string; cta: string }
}

export async function loadContent(type: UserType): Promise<DynamicContent> {
  try {
    const data = await import(`../content/homepage_${type}.json`)
    return data.default
  } catch {
    // Fallback to base homepage if segment file missing
    const base = await import('../content/homepage.json')
    return base.default as DynamicContent
  }
}
