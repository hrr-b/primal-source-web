import productsData from '@/content/products.json'

export type Product = {
  id: string
  slug: string
  name: string
  price: number
  description: string
  identity?: string
  statement?: string
  meaning?: string
  feel?: string
  close?: string
  benefits?: string[]
}

export const getProducts = async (): Promise<Product[]> => {
  return productsData.products
}

export const getProduct = async (slug: string): Promise<Product | null> => {
  const products = await getProducts()
  return products.find(p => p.slug === slug) || null
}
