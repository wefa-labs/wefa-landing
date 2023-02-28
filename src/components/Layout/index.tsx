import { companyLinks, headerLinks, socialLinks } from 'lib/constants/links'
import { ReactElement, ReactNode } from 'react'

// import Logo from '../../public/logo/text/color.svg'

import { Footer } from './Footer'
import { Header } from './Header'

export const LAYOUT_CONTAINER_CLASS = 'container mx-auto max-w-screen-xl'
export const LAYOUT_PADDING_CLASS = 'px-8'

const Layout: React.FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <>
      <Header logo={'WEFA'} links={headerLinks} />
      <main
        className={`flex flex-col flex-grow h-[calc(100vh-4rem)] w-screen bg-[white]`}
      >
        {children}
      </main>
      <Footer socials={socialLinks} links={companyLinks} />
    </>
  )
}

const withLayout = (page: ReactElement, _canvas: ReactNode) => {
  return <Layout>{page}</Layout>
}

export { Layout, withLayout }
