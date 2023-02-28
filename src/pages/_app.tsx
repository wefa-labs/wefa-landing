import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'

import { Layout } from 'components/Layout'
import { DEFAULT_SEO } from 'lib/config/seo'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
