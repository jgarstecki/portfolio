import CaseStudyLayout from '../components/CaseStudyLayout'
import CaseStudySection from '../components/CaseStudySection'
import glow from '../assets/icons/glow-change.svg'
import cover from '../assets/images/change-hero.png'
import imgResearch from '../assets/images/change-research.png'
import imgDecision1 from '../assets/images/change-decision1.png'
import imgDecision2 from '../assets/images/change-decision2.png'
import imgDecision3 from '../assets/images/change-decision3.png'
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
      context="Change is a boutique English academy in Toruń with twenty years of reputation built through word of mouth. New parents came through referrals – which meant the website's job was not to attract, but to confirm. A referred parent would open it and decide, often without realising they were deciding, whether what they'd heard felt true."
      problem="The school had a genuine identity built over those twenty years. The website communicated none of it – visually and structurally, it looked like any other language school, working against the trust the school had spent years building."
      retro="Starting without a baseline meant no reference point for measuring what changed. A lightweight reception exercise before the redesign would have made the brief sharper and decisions easier to defend. The affinity framework worked well as a retro instrument after the fact – applying that rigour earlier is what I'd carry forward. Some visual UI decisions were made on instinct where systematic reasoning would have served better."
    >
      <CaseStudySection
        label="Research"
        title="A product that looks like it was made from inside the community"
        body="I structured separate interviews with the owner and seven existing clients to triangulate rather than gather the same picture twice. The affinity framework I designed extracted tone of voice signals, identified the gap between how the school communicates in person and how it appeared online, and served as a retro instrument once the design was done. The central finding: parents described the school in almost the same terms the owner used to build it. Not a positioning problem – a translation one."
        images={[imgResearch]}
      />
      <CaseStudySection
        index="02"
        total="04"
        title="Trust through authenticity"
        body="Stock imagery and generic layouts would have contradicted everything the brand stood for. I briefed and supervised the photoshoot to capture actual people in the actual space, commissioned illustrations from a directed moodboard, and designed value cards from brand research. The intent was that nothing in the visual layer could be reused elsewhere."
        images={[imgDecision1]}
      />
      <CaseStudySection
        index="03"
        total="04"
        title="Language and structure that sound like the school"
        body={'Research surfaced the language the owner and parents actually used, and "We start with crayons, we end with a certificate" anchored the tone throughout. I curated the FAQ from teachers who are also parents – so the questions are the ones that actually come up. CTAs appear at natural decision points with topic pre-selection, reducing friction at the first step.'}
        images={[imgDecision2]}
      />
      <CaseStudySection
        index="04"
        total="04"
        title="Making it not all about kids – parent as a beneficiary"
        body="One finding from parent interviews led me to create a section for the parent who brings their child to class and has an hour nearby. Addressing that signals the school has considered the parent's experience alongside the child's – something that rarely appears in how schools present themselves."
        images={[imgDecision3]}
      />
    </CaseStudyLayout>
  )
}
