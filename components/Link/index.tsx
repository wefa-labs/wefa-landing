import NextLink from 'next/link'

export type LinkType = {
  title: string
  link: string
  Icon?: React.ReactNode
}

export const Link: React.FC<LinkType> = ({ title, link, Icon }) => (
  <li className="font-medium tracking-wider hover:text-water-400 cursor-pointer">
    <NextLink href={link}>{Icon ? Icon : title}</NextLink>
  </li>
)
