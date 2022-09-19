interface FooterInterface {
  page: PageType
  type: 'full' | 'split'
  title: string
  subtitle?: string
  cta?: string
  cta_link?: string
  image?: string
  background_image?: string
}

export const Footer: React.FC<FooterInterface> = ({}) => {
  return <div className="flex flex-col items-center ">hhh</div>
}
