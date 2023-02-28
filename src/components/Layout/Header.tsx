import { css } from '@emotion/css'
import Image from 'next/image'
import gsap from 'gsap'

interface HeaderInterface {
  logo: React.ReactNode
  links?: { title: string; link: string }[]
}

const styles = css`
  /* .shapes {
    position: relative;
    height: 100%;
    width: 100%;
    background: #2128bd;
    overflow: hidden;
  }

  .shape {
    will-change: transform;
    position: absolute;
    border-radius: 50%;

    $shapes: (
      #005ffe: 650px,
      #ffe5e3: 440px,
      #ffcc57: 270px,
    );

    @each $color, $size in $shapes {
      &.shape-#{index($shapes, ($color $size))} {
        background: $color;
        width: $size;
        height: $size;
        margin: (-$size/2) 0 0 (-$size/2);
      }
    }
  }

  .content {
    top: 0;
    left: 0;
    position: absolute;
    mix-blend-mode: screen;
  }

  h1 {
    @include rf(100, 200);

    color: #3c91d6;
    margin: 0;
  }

  /* ::selection {
    color: #fff;
    background: #2128bd;
  } */
`

export const Header: React.FC<HeaderInterface> = ({ logo }) => {
  return (
    <header
      className={`${styles} w-screen relative bg-white flex md:px-8 px-4 py-2`}
      onMouseMove={(e) => {
        const mouseX = e.clientX
        const mouseY = e.clientY

        gsap.to('.shape', {
          x: mouseX,
          y: mouseY,
          stagger: -0.1,
        })
      }}
    >
      <Image
        src="/icon-310.png"
        width={64}
        height={64}
        priority={true}
        alt="WEFA logo"
      />
    </header>
  )
}
