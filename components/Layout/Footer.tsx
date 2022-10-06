import { LinkType, Link } from 'components/Link'

interface FooterInterface {
  socials?: LinkType[]
  links?: LinkType[]
}

export const Footer: React.FC<FooterInterface> = ({ socials, links }) => {
  return (
    <footer className="flex w-screen items-center justify-between text-white bg-[#633A11]  md:px-8 px-4 py-3">
      <ul className="flex gap-4">
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
