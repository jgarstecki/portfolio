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
      context="Drift is a serious, technical sport whose community operates largely outside dedicated platforms – cars sold through Facebook groups, events announced in scattered posts, track locations passed by word of mouth. DriftHub is an attempt to address that – a marketplace for drift cars, events, track locations, and competition structure in one place. A developer built a working MVP using AI-assisted coding before I joined the project. My role was to establish the design layer on top of that existing codebase – adjusting, structuring, and extending what was already live."
      problem="The MVP I inherited had the product's logic in place, but the interface looked like a general car sales marketplace – the kind of output AI produces when it draws on established conventions rather than the specific context it's designing for. The community this product was built for wasn't visible anywhere in it."
      retro="The visual direction relied on proximity to the owner rather than structured research – a gap worth closing on a similar project. The token system was built reactively, and it shows in the naming. Panel navigation assumes users know where their content lives, which remains untested. Joining a project after the MVP was shipped meant the scope of design influence was set before I arrived – a constraint worth surfacing explicitly at the start of any similar engagement."
    >
      <div className={`w-full ${sectionPadding}`}>
        <div className="w-full overflow-hidden rounded-corner-m">
          <img src={intro} alt="" className="w-full" />
        </div>
      </div>
      <CaseStudySection
        index="01"
        total="04"
        title="A product that looks like it was made from inside the community"
        body="Not dark mode as a trend but because the sport lives in garages and on tracks. Heavy type and energetic amber accent because drift is loud and powerful and bold layout coming from technicality and old racing games. The result is a product the community recognises without being told who it's for."
        images={[img01]}
      />
      <CaseStudySection
        index="02"
        total="04"
        title="Design System"
        body="The product was growing fast – new features shipping continuously, often without design input. The system needed to be robust enough to hold visual consistency across that pace. Standard structured three-layer token architecture, component library with plenty of properties and booleans, two responsive modes at root level. The kit is ready for new features and when the developer ships something independently, it fits."
        images={[img02]}
      />
      <CaseStudySection
        index="03"
        total="04"
        title="Proving design ideas with vibecoding"
        body="Some aspects of the visual identity – animation behaviour, analog image degradation, scroll-triggered content reveals – couldn't be meaningfully prototyped in a design tool. Rather than approximating them in static files, I built the visual layer directly in code using AI as a proof of concept – iterating against the live product until the behaviour matched the intended direction. I applied the same thinking to track locations: inconsistent satellite imagery across 35+ venues wasn't in the brief, but I wrote a script to pull geolocation, capture screenshots, and apply a consistent visual filter, treating it as an extension of the design rather than a technical task."
        images={[img03]}
      />
      <CaseStudySection
        index="04"
        total="04"
        wide
        title="One orientation point for a user with five different relationships to the product"
        body="A single user can occupy several roles simultaneously – seller, buyer, event organiser, participant, and someone tracking saved searches across both cars and events. Each role comes with different states, actions, and time logic. Rather than multiplying navigation entries to reflect this, the sidebar remains fixed while the content within each section adapts to the role being addressed. Saved filters communicate their state through colour and contextual actions; event sections split by role through tabs within a single navigation item."
        images={[img04a, img04b]}
      />
    </CaseStudyLayout>
  )
}
