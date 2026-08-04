import type { ReactNode } from 'react'
import Nav from './Nav'
import CaseStudyHero from './CaseStudyHero'
import ContextProblem from './ContextProblem'
import RetroSection from './RetroSection'
import Contact from './Contact'
import OtherWorksSection from './OtherWorksSection'
import Footer from './Footer'
import { sectionPadding } from '../styles/section'

type Props = {
  slug: string
  eyebrow: string
  heading: string
  meta: string
  glow: string
  cover: string
  heroShadow?: boolean
  coverAspect?: string
  context: string
  problem: string
  retro: string
  disclaimer?: string
  children: ReactNode
}

export default function CaseStudyLayout({
  slug,
  eyebrow,
  heading,
  meta,
  glow,
  cover,
  heroShadow,
  coverAspect,
  context,
  problem,
  retro,
  disclaimer,
  children,
}: Props) {
  return (
    <div className="flex w-full flex-col items-start bg-white">
      <Nav />
      <CaseStudyHero
        eyebrow={eyebrow}
        heading={heading}
        meta={meta}
        glow={glow}
        cover={cover}
        shadow={heroShadow}
        coverAspect={coverAspect}
      />
      <div className="relative z-10 flex w-full flex-col items-start bg-white">
        <ContextProblem context={context} problem={problem} />
        {children}
        <RetroSection body={retro} />
        {disclaimer && (
          <div className={`w-full pb-16 ${sectionPadding}`}>
            <p className="max-w-[672px] text-xs text-gray-300">{disclaimer}</p>
          </div>
        )}
        <div className="flex w-full flex-col items-start pb-[120px]">
          <Contact tone="gray" />
          <OtherWorksSection excludeSlug={slug} />
        </div>
        <Footer />
      </div>
    </div>
  )
}
