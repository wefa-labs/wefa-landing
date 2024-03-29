import Head from 'next/head'

import { DEFAULT_SEO } from 'lib/config/seo'

const siteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL
const name = 'WEFA'
const twitterHandle = '@_wefa_'
const defaultOgImage = `${siteUrl}/social-image.png`

export const Meta: React.FC<{
  title: string
  description?: string
  prefix?: string
  ogImage?: string
}> = ({
  title,
  description = DEFAULT_SEO.description,
  prefix = name,
  ogImage = defaultOgImage,
}) => {
  const titleText = [prefix, title].filter(Boolean).join(' | ')

  return (
    <Head>
      <title key="title">{titleText}</title>
      <meta name="description" content={description} />
      <meta name="author" content={name} />

      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content="Banner for the site" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="675" />

      <meta property="og:title" content={titleText} />
      <meta property="og:site_name" content={name} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:description" content={description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={titleText} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  )
}
