import { useLayoutEffect, useRef, useState } from 'react'
import profile from '../assets/images/profile.png'
import WorkCard from '../components/WorkCard'
import Contact from '../components/Contact'
import { works } from '../data/works'
import { sectionPadding } from '../styles/section'

const featuredWorks = works.slice(0, 3)
// Inmed is kept in the data for a future case study, hidden from the homepage listing for now
const moreWorks = works.filter((w) => w.slug === 'wineke' || w.slug === 'collective')

const INITIAL_SCALE = 0.85

export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const scaleRef = useRef<HTMLDivElement>(null)
  const [heroHeight, setHeroHeight] = useState(0)

  useLayoutEffect(() => {
    const measure = () => setHeroHeight(heroRef.current?.offsetHeight ?? 0)
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  // Scale/opacity are driven directly on the DOM (bypassing React state) so
  // scroll updates don't trigger a re-render of the whole page every frame.
  useLayoutEffect(() => {
    if (heroHeight === 0) return

    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const progress = Math.min(window.scrollY / heroHeight, 1)
        if (scaleRef.current) {
          scaleRef.current.style.transform = `scale(${INITIAL_SCALE + (1 - INITIAL_SCALE) * progress})`
        }
        if (heroRef.current) {
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
    <div className="relative w-full bg-white">
      <section
        ref={heroRef}
        className={`fixed inset-x-0 top-0 z-0 flex w-full flex-col items-center justify-center gap-16 bg-white pb-8 pt-16 lg:pb-12 lg:pt-[92px] ${sectionPadding}`}
      >
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="font-sans text-[40px] font-bold leading-[1.2] text-black-200 md:text-[56px]">
              Hello, I&rsquo;m
            </span>
            <div className="size-16 shrink-0 overflow-hidden rounded-[10px] sm:rounded-corner-m md:size-[85px]">
              <img src={profile} alt="Jan Garstecki" className="size-full object-cover" />
            </div>
            <span className="font-sans text-[40px] font-bold leading-[1.2] text-black-200 md:text-[56px]">
              Jan!
            </span>
          </div>
          <p className="max-w-[853px] text-center text-xl text-text-secondary md:text-[34px]">
            I&rsquo;m a UX/UI designer with multidisciplinary experience, drawn to reading systems and finding
            the line through them. Outside work, that same instinct takes me to rock faces and racing circuits.
          </p>
        </div>
      </section>

      <div className="relative z-10" style={{ marginTop: heroHeight }}>
        <section id="my-works" className={`flex w-full flex-col items-start gap-8 pb-16 pt-4 ${sectionPadding}`}>
          <div
            ref={scaleRef}
            className="flex w-full max-w-[1320px] flex-col gap-16 mx-auto bg-white"
            style={{ transform: `scale(${INITIAL_SCALE})`, transformOrigin: 'top center', willChange: 'transform' }}
          >
            {featuredWorks.map((item) => (
              <WorkCard key={item.slug} item={item} />
            ))}
            <div className="grid w-full grid-cols-1 gap-16 md:grid-cols-2">
              {moreWorks.map((item) => (
                <WorkCard key={item.slug} item={item} compact />
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </div>
    </div>
  )
}
