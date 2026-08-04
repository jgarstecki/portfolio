import { useLayoutEffect, useRef, useState } from 'react'
import { sectionPadding } from '../styles/section'

type Props = {
  eyebrow: string
  heading: string
  meta: string
  glow: string
  cover: string
  shadow?: boolean
  // Defaults to the design's 880:473 crop. Pass the image's native ratio
  // (e.g. "1760 / 1100") to show it uncropped instead.
  coverAspect?: string
}

const INITIAL_SCALE = 0.85
const BOTTOM_RADIUS_PX = 8
// Same shadow as the case-study section images (CaseStudySection.tsx).
const SHADOW_ALPHA = 0.09
// The image scale/corner-radius, the ellipse, and the background crossfade
// all finish early - they're already done by 30% of the scroll distance.
// Text keeps the original, slower pacing across the full scroll distance.
const FADE_SPEEDUP = 0.3
const BG_FROM = [235, 235, 235] // gray-200
const BG_TO = [255, 255, 255] // white

function mixBackground(progress: number) {
  const [r, g, b] = BG_FROM.map((c, i) => Math.round(c + (BG_TO[i] - c) * progress))
  return `rgb(${r}, ${g}, ${b})`
}

export default function CaseStudyHero({ eyebrow, heading, meta, glow, cover, shadow, coverAspect = '880 / 473' }: Props) {
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
        const fadeProgress = Math.min(progress / FADE_SPEEDUP, 1)
        if (scaleRef.current) {
          scaleRef.current.style.transform = `scale(${INITIAL_SCALE + (1 - INITIAL_SCALE) * fadeProgress})`
          const radius = `${fadeProgress * BOTTOM_RADIUS_PX}px`
          scaleRef.current.style.borderBottomLeftRadius = radius
          scaleRef.current.style.borderBottomRightRadius = radius
          if (shadow) {
            scaleRef.current.style.boxShadow = `0px 1px 18px 0px rgba(0,0,0,${SHADOW_ALPHA * fadeProgress})`
          }
        }
        if (ellipseRef.current) {
          ellipseRef.current.style.opacity = String(1 - fadeProgress)
        }
        if (textRef.current) {
          textRef.current.style.opacity = String(1 - progress)
        }
        if (heroRef.current) {
          heroRef.current.style.backgroundColor = mixBackground(fadeProgress)
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
  }, [heroHeight, shadow])

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
        <div ref={spacerRef} className="w-full opacity-0" style={{ aspectRatio: coverAspect }} aria-hidden="true" />
      </div>

      {/* z-[15]: sits above the content section below (z-10) so the hero
          shadow's blur isn't painted over by it, but stays under the sticky
          nav (z-20) */}
      <div className={`relative w-full ${shadow ? 'z-[15]' : 'z-10'} ${sectionPadding}`} style={{ marginTop: imageOffset }}>
        <div
          ref={scaleRef}
          className="w-full overflow-hidden rounded-t-corner"
          style={{
            aspectRatio: coverAspect,
            transform: `scale(${INITIAL_SCALE})`,
            transformOrigin: 'bottom center',
            willChange: 'transform',
          }}
        >
          <img src={cover} alt="" className="size-full object-cover object-top" />
        </div>
      </div>
    </>
  )
}
