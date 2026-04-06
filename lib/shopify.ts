export const getProducts = async () => [
  { id: '1', slug: 'origin-tee', name: 'Origin Tee', price: 65, description: 'Built for presence.' },
  { id: '2', slug: 'primal-hoodie', name: 'Primal Hoodie', price: 120, description: 'Wear your conviction.' },
  { id: '3', slug: 'source-cap', name: 'Source Cap', price: 45, description: 'Carry the origin.' },
]

export const getProduct = async (slug: string) => {
  const products = await getProducts()
  return products.find(p => p.slug === slug) || null
}
