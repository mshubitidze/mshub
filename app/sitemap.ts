export default function sitemap() {
  let routes = ['', '/blog'].map((route) => ({
    url: `https://mshub.dev${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return routes
}
