import { Head, Html, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html>
      <Head>
        <meta name="title" content="Freeport" />
        <meta
          name="description"
          content="Freeport is the future of ownership."
        />
        <link rel="icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=Poppins:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" href="/api/v1/users/current" as="fetch" />
      </Head>
      <body className="h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
