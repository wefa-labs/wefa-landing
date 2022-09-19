interface HeroInterface {
  page: PageType
  type: 'full' | 'split'
  title: string
  subtitle?: string
  cta?: string
  cta_link?: string
  image?: string
  background_image?: string
}

export const Hero: React.FC<HeroInterface> = ({}) => {
  return <div className="flex flex-col items-center ">hhh</div>
}
