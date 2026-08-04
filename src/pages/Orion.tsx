import CaseStudyLayout from '../components/CaseStudyLayout'
import CaseStudySection from '../components/CaseStudySection'
import { works } from '../data/works'
import glow from '../assets/icons/glow-orion.svg'
import cover from '../assets/images/orion-hero.webp'
import img01 from '../assets/images/orion-01.webp'
import img02a from '../assets/images/orion-02a.webp'
import img02b from '../assets/images/orion-02b.webp'
import img03 from '../assets/images/orion-03.webp'
import img04 from '../assets/images/orion-04.webp'

const data = works.find((w) => w.slug === 'orion')!

export default function Orion() {
  return (
    <CaseStudyLayout
      slug="orion"
      eyebrow="Orion"
      heading={data.title}
      meta={data.subtitle}
      glow={glow}
      cover={cover}
      heroShadow
      coverAspect="1800 / 1125"
      context="Orion is a bespoke CRM for a network of homeschooling schools. The rules around student status, cooperative structures, exams, and subsidies are specific enough that no established software could handle them. Seven months in: 275 screens, five user types, a live MVP in testing."
      problem="Five user types, interlocking flows, and time-regulated processes that kept shifting mid-project. Most users were meeting the domain for the first time, often with limited digital literacy. All of it built without formal research or stable requirements, in a two-person team."
      retro="Lightweight research early on would have cut the assumptions baked into the design. A dedicated product owner could have caught shifting requirements before they reached screens already in production. The working method compensated for a lot – but it was a response to the conditions, not a deliberate choice."
      disclaimer="All student names and records shown are fictional. The profile photo is AI-generated."
    >
      <CaseStudySection
        index="01"
        total="04"
        title="One student, multiple simultaneous identities"
        body="Schools must keep every student record – present, archived, returned – separately, and a student can be active in one school while archived in another within the same network. Browsing any profile, the school office needs two things at once: this record's status here, and whether the student is active anywhere else in the network – without extra navigation."
        images={[img01]}
      />
      <CaseStudySection
        index="02"
        total="04"
        title="Designing for a multi-user, time-regulated process one role at a time"
        body="The examination process spans four user types – school office, cooperative leaders, parents, examiners – each acting in specific time windows, each step dependent on the last. Part of the work was validating the process itself, catching friction before it reached users. From the parent's side: the declaration flow is multi-step and governed by unconventional rules, so each step shows only what they need at that moment – the interface carries the logic instead of them."
        images={[img02a, img02b]}
      />
      <CaseStudySection
        index="03"
        total="04"
        title="Digital literacy as a persistent design constraint"
        body="For many users, Orion is an administrative requirement in an already complex domain – not software they sought out. That shaped decisions throughout: permanent access to coordinator contacts, explicit labels where conventions might otherwise be assumed, confirmation steps that leave no ambiguity."
        images={[img03]}
      />
      <CaseStudySection
        index="04"
        total="04"
        wide
        title="Work outside the brief"
        body="I picked up work the project needed but hadn't formally assigned me – email communication as part of the user experience, QA on the live MVP, and extending the design system. The team also stress-tested the owner's ideas before they reached production, flagging the ones that wouldn't hold up."
        images={[img04]}
      />
    </CaseStudyLayout>
  )
}
