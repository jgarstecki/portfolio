import CaseStudyLayout from '../components/CaseStudyLayout'
import CaseStudySection from '../components/CaseStudySection'
import glow from '../assets/icons/glow-change.svg'
import cover from '../assets/images/change-hero.webp'
import imgResearch from '../assets/images/change-research.webp'
import imgDecision1 from '../assets/images/change-decision1.webp'
import imgDecision2 from '../assets/images/change-decision2.webp'
import imgDecision3 from '../assets/images/change-decision3.webp'
import { works } from '../data/works'

const data = works.find((w) => w.slug === 'change')!

export default function Change() {
  return (
    <CaseStudyLayout
      slug="change"
      eyebrow="Change"
      heading={data.title}
      meta={data.subtitle}
      glow={glow}
      cover={cover}
      coverAspect="1800 / 1125"
      context="Change is a boutique English academy in Toruń, twenty years of reputation built by word of mouth. New parents came through referrals, so the website's job wasn't to attract – it was to confirm what they'd already heard."
      problem="The school had a genuine identity built over twenty years. The website communicated none of it – it looked like any other language school, working against the trust already earned."
      retro="Starting without a baseline meant no reference point for measuring what changed. A lightweight reception exercise before the redesign would have sharpened the brief and made decisions easier to defend. The affinity framework worked well as a retro instrument after the fact – applying that rigour earlier is what I'd carry forward next time. Some visual decisions were made on instinct where systematic reasoning would have served better."
    >
      <CaseStudySection
        label="Research"
        title="Interviewing the owner and the parents"
        body="I structured separate interviews with the owner and seven existing clients to triangulate rather than gather the same picture twice. The affinity framework I designed extracted tone-of-voice signals and mapped the gap between how the school communicates in person and how it appeared online. The finding: parents described the school in almost the same terms the owner used to build it. Not a positioning problem – a translation one."
        images={[imgResearch]}
      />
      <CaseStudySection
        index="01"
        total="03"
        title="Trust through authenticity"
        body="Stock imagery and generic layouts would have contradicted everything the brand stood for. I briefed and supervised a photoshoot of the actual people and space, commissioned illustrations from a directed moodboard, and designed value cards from brand research – nothing in the visual layer could be reused elsewhere."
        images={[imgDecision1]}
      />
      <CaseStudySection
        index="02"
        total="03"
        title="Language and structure that sound like the school"
        body={'Research surfaced the language the owner and parents actually used, and "We start with crayons, we end with a certificate" anchored the tone throughout. I curated the FAQ from teachers who are also parents, so the questions are the ones that actually come up. CTAs appear at natural decision points with topic pre-selected, cutting friction at the first step.'}
        images={[imgDecision2]}
      />
      <CaseStudySection
        index="03"
        total="03"
        title="The parent gets something too"
        body="One finding from parent interviews: the parent who brings their child to class often has an hour nearby with nothing to do. Addressing that signals the school considered their experience too – something most schools never mention."
        images={[imgDecision3]}
      />
    </CaseStudyLayout>
  )
}
