import { Head, Html, Main, NextScript } from 'next/document'

import { DEFAULT_SEO } from 'lib/config/seo'

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#b8abee" />
        <meta name="msapplication-TileColor" content="#582be0" />
        <meta name="title" content="WEFA Landing" />
        <meta name="description" content={DEFAULT_SEO.description} />

        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon-310.png" />
        {/* <link type="text/plain" rel="author" href="/humans.txt" /> */}
        {/* <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#b8abee" /> */}
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
