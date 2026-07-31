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
      context="Orion is a bespoke CRM for a network of homeschooling schools, built to serve one business owner's specific vision of how his schools should operate. Homeschooling sits outside the mental models most people carry from conventional schooling – the rules around students, cooperative structures, examinations, and government subsidies are specific enough that no established software could accommodate them. Seven months in: 275 screens, five user types, a live MVP entering user testing."
      problem="Five user types with interlocking flows, time-regulated processes, and requirements that evolved throughout the project. Users were encountering the domain for the first time, often with limited digital literacy, in a system that had to guide them through processes they didn't fully understand. The work happened without formal research, stable requirements, or a structured process – in a two-person team where domain knowledge and design thinking had to compensate for everything that was missing."
      retro="Lightweight research touchpoints early on would have reduced the assumptions baked into the design. A dedicated product owner able to translate and prioritise the business owner's needs would have caught shifting requirements before they propagated through screens already in production. The working method compensated for a lot – but it was a response to the conditions rather than a deliberate choice."
    >
      <CaseStudySection
        index="01"
        total="04"
        title="One student, multiple simultaneous identities"
        body="Schools are obligated to maintain student lists that include every entry – present, archived, and returned – as separate records. A student can be simultaneously active in one school while archived in another within the same network. When browsing any version of a student's profile, the secretariat needs two independent pieces of information at once: the status of this record within this school, and whether the student is currently active anywhere in the network – both without additional navigation."
        images={[img01]}
      />
      <CaseStudySection
        index="02"
        total="04"
        title="Designing for a multi-user, time-regulated process one role at a time"
        body="The examination process spans four user types – secretariat, cooperative leaders, parents, and examiners – each acting within specific time windows, with each step dependent on the previous user's actions. The work extended to validating the process itself, identifying friction before it reached users. Taking the parent's perspective: the declaration flow is multi-step and governed by unconventional rules, so each step was scoped to what the parent needs at that moment, with the interface carrying the logic so they don't have to interpret it."
        images={[img02a, img02b]}
      />
      <CaseStudySection
        index="03"
        total="04"
        title="Digital literacy as a persistent design constraint"
        body="For many users, Orion is an administrative requirement in an already complex domain – not software they sought out. This shaped decisions throughout the product: permanent access to coordinator contact details, explicit labels where conventions might otherwise be assumed, confirmation steps that leave no ambiguity about what follows."
        images={[img03]}
      />
      <CaseStudySection
        index="04"
        total="04"
        wide
        title="Ownership beyond the assigned scope"
        body="I extended my involvement into areas the project needed but hadn't formally assigned – thinking about email communication as an extension of the user experience beyond the interface, conducting QA on the live MVP, and selecting and extending the design system. More broadly, the team served as a validator of business ideas, translating the owner's expectations into structured concepts and identifying where they weren't viable before reaching production."
        images={[img04]}
      />
    </CaseStudyLayout>
  )
}
