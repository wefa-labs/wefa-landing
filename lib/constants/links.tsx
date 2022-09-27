import { LinkType } from 'components/Link'

import Twitter from '../../public/twitter.svg'
import Instagram from '../../public/instagram.svg'

export const socialLinks: LinkType[] = [
  { link: 'https://twitter.com/_wefa_', title: 'Twitter', Icon: <Twitter /> },
  {
    link: 'https://instagram.com/wefa_app',
    title: 'Instagram',
    Icon: <Instagram />,
  },
]
export const companyLinks: LinkType[] = [
  { link: 'mailto: contact@wefa.app', title: 'Contact' },
]
export const headerLinks: LinkType[] = []
