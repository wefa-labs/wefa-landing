import { useRef, useEffect } from 'react'
import type { NextPage } from 'next'
import { DEFAULT_SEO } from 'lib/config/seo'
import Subscribe from 'components/Forms/Subscribe'
import Link from 'next/link'

const HeroContent: React.FC<{
  className?: string
  title?: string
  subtitle?: string
}> = ({ className, subtitle }) => {
  const animation = useRef<HTMLDivElement | null>(null)

  return (
    <div
      ref={animation}
      className={`content flex flex-col md:flex-row sm:gap-8 gap-6 md:justify-around w-full h-1/2  md:-translate-y-1/3 ${className}`}
    >
      <h3
        className={`title max-w-xl sm:text-4xl text-3xl text-center md:text-left text-slate-800 md:translate-x-8`}
      >
        <span className="text-blue-400">Connecting</span> our{' '}
        <span className="text-green-600">Environment</span> to our{' '}
        <span className="text-red-500">Digital</span>{' '}
        <span className="text-amber-400">World.</span>
      </h3>
      <div
        className={`subtitle max-w-2xl 2xl:text-xl md:text-lg flex flex-col gap-1 md:px-0 px-2 text-slate-800 self-center`}
      >
        <h4>{subtitle}</h4>
        <h4>
          Using{' '}
          <Link
            target="_blank"
            href={'https://www.youtube.com/watch?v=hYip_Vuv8J0'}
          >
            <span className="text-blue-400 cursor-pointer hover:text-blue-500 ">
              Blockchain
            </span>
          </Link>
          ,{' '}
          <Link
            target="_blank"
            href={'https://www.youtube.com/watch?v=f9MwaH6oGEY'}
          >
            <span className="text-blue-400 cursor-pointer hover:text-blue-500 ">
              Augmented Reality
            </span>
          </Link>
          , &{' '}
          <Link
            target="_blank"
            href={'https://www.youtube.com/watch?v=5q87K1WaoFI'}
          >
            <span className="text-blue-400 cursor-pointer hover:text-blue-500 ">
              Machine Learning
            </span>
          </Link>{' '}
          to build a Permisionless, Personal, & Insightful Experience with
          Nature & Community.
        </h4>
        <h4 className="mb-4">
          Currently Building, Learning, & Getting Feedback.{' '}
          {/* <Link
            target="_blank"
            href={'https://research.typeform.com/to/zAB6Jx58'}
          >
            <span className="text-blue-400 cursor-pointer hover:text-blue-500 ">
              Give Yours!
            </span>
          </Link> */}
        </h4>
        {/* <Subscribe /> */}
      </div>
    </div>
  )
}

const Home: NextPage = () => {
  const animation = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (animation.current) {
      // const textWrapper = document.querySelector(`.title`)
      // if (textWrapper && textWrapper.textContent) {
      //   textWrapper.innerHTML = textWrapper.textContent.replace(
      //     /\S/g,
      //     "<span class='letter'>$&</span>"
      //   )
      // }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // animation.current = anime
      //   .timeline({ loop: false })
      //   .add({
      //     targets: `.title .letter`,
      //     opacity: [0, 1],
      //     easing: 'easeInOutQuad',
      //     duration: 1200,
      //     delay: (el, i) => 150 * (i + 1),
      //   })
      //   .add({
      //     targets: `.subtitle`,
      //     opacity: [1],
      //     easing: 'easeInOutQuad',
      //     duration: 1200,
      //   })
      // gsap.to(q('.box'), { x: 100 })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section
      ref={animation}
      className="h-full w-full container mx-auto overflow-x-hidden grid sm:place-items-center md:py-12 md:px-12 px-8  pb-16 sm:pb-0  bg-landing_bg bg-no-repeat bg-bottom xl:bg-contain sm:bg-auto bg-contain"
    >
      <HeroContent
        title={DEFAULT_SEO.title}
        subtitle={DEFAULT_SEO.description}
        className=""
      />
    </section>
  )
}

export default Home
