import { DEFAULT_SEO } from 'lib/config/seo'
import { Head, Html, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html>
      <Head>
        <meta name="title" content="WEFA" />
        <meta name="description" content={DEFAULT_SEO.description} />
        <meta property="og:url" content="https://wefa.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={DEFAULT_SEO.title} />
        <meta property="og:description" content={DEFAULT_SEO.description} />
        <meta property="og:image" content="/logo/color.png" />
        <meta property="og:image:width" content="150" />
        <meta property="og:image:height" content="60" />
        <link rel="icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Varela+Round&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
