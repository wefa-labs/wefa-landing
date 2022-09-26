import { LinkType, Link } from 'components/Link'

interface FooterInterface {
  socials?: LinkType[]
  links?: LinkType[]
}

export const Footer: React.FC<FooterInterface> = ({ socials, links }) => {
  return (
    <footer className="flex items-center justify-between px-6 py-3">
      <ul>
        {socials?.map((link) => (
          <Link key={link.title} {...link} />
        ))}
      </ul>
      <ul>
        {links?.map((link) => (
          <Link key={link.title} {...link} />
        ))}
      </ul>
    </footer>
  )
}
