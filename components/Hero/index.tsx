import Image from 'next/image'

import { PrimaryButton } from 'components/Button/Primary'

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

export const Hero: React.FC<HeroInterface> = ({
  type,
  title,
  subtitle,
  cta,
  cta_link,
  image,
  background_image,
}) => {
  return (
    <section
    // className={`grid place-items-center w-full max-w-screen-2xl h-screen  ${
    //   background_image ? `bg-[url(${background_image})]` : ''
    // }`}
    >
      <div className="flex-1 grid place-items-center h-full">
        <h1 className="text-8xl">{title}</h1>
        <h2 className="text-8xl">{subtitle}</h2>
        {cta && cta_link ? (
          <PrimaryButton href={cta_link}>{cta}</PrimaryButton>
        ) : null}
      </div>
      {type === 'split' ? (
        <div className="flex-1 grid place-items-center h-full">
          {image ? <Image src={image} alt={``} /> : null}
        </div>
      ) : null}
    </section>
  )
}
