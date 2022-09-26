import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

import { DEFAULT_SEO } from 'lib/config/seo'

import '../styles/globals.css'
import { Layout } from 'components/Layout'

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
