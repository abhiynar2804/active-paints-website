import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://YOUR-DOMAIN.com'

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
  ]
}