import type { ReactNode } from 'react'
import Nav from './Nav'
import CaseStudyHero from './CaseStudyHero'
import ContextProblem from './ContextProblem'
import RetroSection from './RetroSection'
import Contact from './Contact'
import OtherWorksSection from './OtherWorksSection'

type Props = {
  slug: string
  eyebrow: string
  heading: string
  meta: string
  glow: string
  cover: string
  context: string
  problem: string
  retro: string
  children: ReactNode
}

export default function CaseStudyLayout({
  slug,
  eyebrow,
  heading,
  meta,
  glow,
  cover,
  context,
  problem,
  retro,
  children,
}: Props) {
  return (
    <div className="flex w-full flex-col items-start bg-white">
      <Nav />
      <CaseStudyHero eyebrow={eyebrow} heading={heading} meta={meta} glow={glow} cover={cover} />
      <div className="relative z-10 flex w-full flex-col items-start bg-white">
        <ContextProblem context={context} problem={problem} />
        {children}
        <RetroSection body={retro} />
        <div className="flex w-full flex-col items-start pb-[120px]">
          <Contact tone="gray" />
          <OtherWorksSection excludeSlug={slug} />
        </div>
      </div>
    </div>
  )
}
