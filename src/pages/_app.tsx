import Head from 'next/head'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'

import { Layout } from 'components/Layout'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const { route, asPath } = useRouter()
  const canonicalRoute = route === '/' ? '' : `${asPath}`

  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}${canonicalRoute}`}
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
