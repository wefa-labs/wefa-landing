import { LinkType } from 'components/Link'

import Twitter from 'assets/twitter.svg'
// import Instagram from '../../assets/instagram.svg'
import LinkedIn from 'assets/linkedin.svg'
import Github from 'assets/github.svg'

export const socialLinks: LinkType[] = [
  { link: 'https://twitter.com/_wefa_', title: 'Twitter', Icon: <Twitter /> },
  // {
  //   link: 'https://instagram.com/wefa_app',
  //   title: 'Instagram',
  //   Icon: <Instagram />,
  // },
  {
    link: 'https://www.linkedin.com/company/wefa-app',
    title: 'LinkedIn',
    Icon: <LinkedIn />,
  },
  {
    link: 'https://github.com/wefa-tech',
    title: 'Github',
    Icon: <Github />,
  },
]
export const companyLinks: LinkType[] = [
  { link: 'mailto: contact@wefa.app', title: 'Contact' },
]
export const headerLinks: LinkType[] = []
