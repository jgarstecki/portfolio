import CaseStudyLayout from '../components/CaseStudyLayout'
import CaseStudySection from '../components/CaseStudySection'
import glow from '../assets/icons/glow-drifthub.svg'
import cover from '../assets/images/drifthub-hero.webp'
import intro from '../assets/images/drifthub-intro.webp'
import img01 from '../assets/images/drifthub-01.webp'
import img02 from '../assets/images/drifthub-02.webp'
import img03 from '../assets/images/drifthub-03.webp'
import img04a from '../assets/images/drifthub-04a.webp'
import img04b from '../assets/images/drifthub-04b.webp'
import { sectionPadding } from '../styles/section'
import { works } from '../data/works'

const data = works.find((w) => w.slug === 'drifthub')!

export default function Drifthub() {
  return (
    <CaseStudyLayout
      slug="drifthub"
      eyebrow="Drifthub"
      heading={data.title}
      meta={data.subtitle}
      glow={glow}
      cover={cover}
      context="Drift's community operates largely outside dedicated platforms – cars sold through Facebook groups, events announced in scattered posts. DriftHub brings cars, events, tracks, and competition structure into one marketplace. A developer had already built a working MVP with AI-assisted coding; I joined to design on top of that live codebase."
      problem="The MVP I inherited had the logic in place, but the interface looked like a generic car marketplace – the kind of output AI produces when it draws on convention instead of context. The community it was built for wasn't visible anywhere in it."
      retro="The visual direction relied on proximity to the owner rather than structured research – worth closing next time. The token system was built reactively, and the naming shows it. Panel navigation assumes users know where their content lives, which remains untested. Joining after the MVP shipped meant the scope of my influence was set before I arrived – worth surfacing explicitly at the start of any similar engagement."
    >
      <div className={`w-full ${sectionPadding}`}>
        <div className="w-full overflow-hidden rounded-[10px] sm:rounded-corner-m">
          <img src={intro} alt="" className="w-full" />
        </div>
      </div>
      <CaseStudySection
        index="01"
        total="04"
        title="A product that looks like it was made from inside the community"
        body="Not dark mode as a trend, but because the sport lives in garages and on tracks. Heavy type and an amber accent for something loud and powerful; bold layout pulled from technicality and old racing games. The result is a product the community recognises without being told who it's for."
        images={[img01]}
      />
      <CaseStudySection
        index="02"
        total="04"
        title="Design System"
        body="The product was growing fast – new features shipping continuously, often without design input – so the system needed to hold visual consistency at that pace. A structured three-layer token architecture, a component library with plenty of properties and booleans, two responsive modes at root level. Ready enough that when the developer ships something independently, it still fits."
        images={[img02]}
      />
      <CaseStudySection
        index="03"
        total="04"
        title="Proving design ideas with vibecoding"
        body="Some of the visual identity – animation behaviour, analog image degradation, scroll-triggered reveals – couldn't be meaningfully prototyped in a design tool. So I built it directly in code using AI as a proof of concept, iterating against the live product until it matched. I applied the same thinking to track locations: inconsistent satellite imagery across 35+ venues wasn't in the brief, so I wrote a script to pull geolocation, capture screenshots, and apply a consistent filter – treating it as design, not a technical task."
        images={[img03]}
      />
      <CaseStudySection
        index="04"
        total="04"
        wide
        title="One orientation point for a user with five different relationships to the product"
        body="A single user can hold several roles at once – seller, buyer, event organiser, participant, someone tracking saved searches across cars and events. Rather than multiplying navigation entries for this, the sidebar stays fixed while each section's content adapts to the role. Saved filters signal their state through colour and contextual actions; event sections split by role through tabs within one navigation item."
        images={[img04a, img04b]}
      />
    </CaseStudyLayout>
  )
}
