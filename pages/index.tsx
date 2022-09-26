import { useRef, useEffect } from 'react'
import anime from 'animejs'

import type { NextPage } from 'next'
import { css } from '@emotion/css'
import { DEFAULT_SEO } from 'lib/config/seo'

const styles = {
  title: css`
    font-weight: 900;
    font-size: 3.5em;
  `,
}

const HeroTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const animation = useRef<HTMLHeadingElement | null>(null)

  useEffect(() => {
    if (animation.current) {
      const textWrapper = document.querySelector('.ml3')

      if (textWrapper && textWrapper.textContent) {
        textWrapper.innerHTML = textWrapper.textContent.replace(
          /\S/g,
          "<span class='letter'>$&</span>"
        )
      }

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      animation.current = anime.timeline({ loop: false }).add({
        targets: '.ml3 .letter',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 2250,
        delay: (el, i) => 150 * (i + 1),
      })
    }
  }, [])

  return (
    <h1 ref={animation} className={`${styles.title} ml3`}>
      {children}
    </h1>
  )
}

const Home: NextPage = () => {
  return (
    <div>
      <HeroTitle>{DEFAULT_SEO.title}</HeroTitle>
    </div>
  )
}

export default Home
