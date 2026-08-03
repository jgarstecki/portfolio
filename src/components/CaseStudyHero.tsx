import { useLayoutEffect, useRef, useState } from 'react'
import { sectionPadding } from '../styles/section'

type Props = {
  eyebrow: string
  heading: string
  meta: string
  glow: string
  cover: string
}

const INITIAL_SCALE = 0.85
const BOTTOM_RADIUS_PX = 8
const BG_FROM = [235, 235, 235] // gray-200
const BG_TO = [255, 255, 255] // white

function mixBackground(progress: number) {
  const [r, g, b] = BG_FROM.map((c, i) => Math.round(c + (BG_TO[i] - c) * progress))
  return `rgb(${r}, ${g}, ${b})`
}

export default function CaseStudyHero({ eyebrow, heading, meta, glow, cover }: Props) {
  const heroRef = useRef<HTMLDivElement>(null)
  const spacerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const ellipseRef = useRef<HTMLImageElement>(null)
  const scaleRef = useRef<HTMLDivElement>(null)
  const [heroHeight, setHeroHeight] = useState(0)
  const [imageOffset, setImageOffset] = useState(0)

  useLayoutEffect(() => {
    const measure = () => {
      const total = heroRef.current?.offsetHeight ?? 0
      const spacer = spacerRef.current?.offsetHeight ?? 0
      setHeroHeight(total)
      // The real image should land exactly where the invisible spacer sits,
      // not after it - otherwise it doubles the gap and falls off-screen.
      setImageOffset(total - spacer)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  // Scale/opacity/background are driven directly on the DOM (bypassing React
  // state) so scroll updates don't trigger a re-render every frame.
  useLayoutEffect(() => {
    if (heroHeight === 0) return

    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const progress = Math.min(window.scrollY / heroHeight, 1)
        if (scaleRef.current) {
          scaleRef.current.style.transform = `scale(${INITIAL_SCALE + (1 - INITIAL_SCALE) * progress})`
          const radius = `${progress * BOTTOM_RADIUS_PX}px`
          scaleRef.current.style.borderBottomLeftRadius = radius
          scaleRef.current.style.borderBottomRightRadius = radius
        }
        if (ellipseRef.current) {
          ellipseRef.current.style.opacity = String(1 - progress)
        }
        if (textRef.current) {
          textRef.current.style.opacity = String(1 - progress)
        }
        if (heroRef.current) {
          heroRef.current.style.backgroundColor = mixBackground(progress)
          heroRef.current.style.opacity = progress < 1 ? '1' : '0'
        }
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
    }
  }, [heroHeight])

  return (
    <>
      <div
        ref={heroRef}
        className={`fixed inset-x-0 top-16 z-0 flex w-full flex-col items-center justify-end gap-16 overflow-hidden bg-gray-200 pb-0 pt-16 ${sectionPadding}`}
      >
        <img
          ref={ellipseRef}
          src={glow}
          alt=""
          className="pointer-events-none absolute left-1/2 top-full w-[160%] max-w-none -translate-x-1/2 -translate-y-1/2"
        />
        <div ref={textRef} className="relative z-10 flex w-full max-w-[880px] flex-col items-center gap-3">
          <p className="w-full text-center text-base text-black-200">{eyebrow}</p>
          <h1 className="w-full text-center font-sans text-[28px] leading-[1.2] text-black-200 md:text-[34px]">
            {heading}
          </h1>
          <p className="w-full text-center text-base text-black-200">{meta}</p>
        </div>
        {/* invisible placeholder matching the cover image's box, so the fixed
            header keeps the same height/rhythm it had when the image lived here */}
        <div ref={spacerRef} className="aspect-[880/473] w-full opacity-0" aria-hidden="true" />
      </div>

      <div className={`relative z-10 w-full ${sectionPadding}`} style={{ marginTop: imageOffset }}>
        <div
          ref={scaleRef}
          className="aspect-[880/473] w-full overflow-hidden rounded-t-corner"
          style={{ transform: `scale(${INITIAL_SCALE})`, transformOrigin: 'bottom center', willChange: 'transform' }}
        >
          <img src={cover} alt="" className="size-full object-cover object-top" />
        </div>
      </div>
    </>
  )
}
