export type UserType = 'new' | 'returning' | 'high_intent'

export function getUserType(): UserType {
  if (typeof window === 'undefined') return 'new'

  const highIntent = localStorage.getItem('ps_high_intent')
  const hasVisited = localStorage.getItem('ps_visited')

  if (highIntent) return 'high_intent'
  if (hasVisited) return 'returning'

  localStorage.setItem('ps_visited', 'true')
  return 'new'
}

export function trackHighIntent() {
  if (typeof window === 'undefined') return
  localStorage.setItem('ps_high_intent', 'true')
}
