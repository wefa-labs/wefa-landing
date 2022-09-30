import { css } from '@emotion/css'
import gsap from 'gsap'

interface HeaderInterface {
  logo: string
  links?: { title: string; link: string }[]
}

const styles = css`
  .shapes {
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

  ::selection {
    color: #fff;
    background: #2128bd;
  }
`

export const Header: React.FC<HeaderInterface> = ({ logo }) => {
  return (
    <header
      className={`${styles} fixed top-0 w-screen flex md:px-8 px-4 py-6`}
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
      <div className="relative w-full">
        <div className="shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="content w-full">
          <h1 className="2xl:text-5xl md:text-4xl text-3xl font-bold tracking-wider ">
            {logo}
          </h1>
        </div>
      </div>
    </header>
  )
}
