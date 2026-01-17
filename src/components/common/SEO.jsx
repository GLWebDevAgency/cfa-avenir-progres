import { Helmet } from 'react-helmet-async'
import { siteConfig } from '@/data/siteConfig'

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  noIndex = false,
}) => {
  const siteTitle = title 
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} - Centre de Formation Professionnelle`
  
  const siteDescription = description || siteConfig.description
  const siteImage = image || '/og-image.jpg'
  const siteUrl = url || siteConfig.url
  const siteKeywords = keywords || 'formation professionnelle, titre professionnel, reconversion professionnelle, alternance, RNCP, graphiste, conseiller commercial'

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:image" content={siteImage} />

      {/* Canonical */}
      <link rel="canonical" href={siteUrl} />
    </Helmet>
  )
}

export default SEO
