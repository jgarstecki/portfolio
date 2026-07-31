import profile from '../assets/images/profile.png'
import WorkCard from '../components/WorkCard'
import Contact from '../components/Contact'
import { works } from '../data/works'
import { sectionPadding } from '../styles/section'

const featuredWorks = works.slice(0, 3)
// Inmed is kept in the data for a future case study, hidden from the homepage listing for now
const moreWorks = works.filter((w) => w.slug === 'wineke' || w.slug === 'collective')

export default function Home() {
  return (
    <div className="flex w-full flex-col items-start bg-bone">
      <section className={`flex w-full flex-col items-center justify-center bg-white pb-8 pt-16 lg:pb-12 lg:pt-[92px] ${sectionPadding}`}>
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="font-sans text-[40px] font-bold leading-[1.2] text-black-200 md:text-[56px]">
              Hello, I&rsquo;m
            </span>
            <div className="size-16 shrink-0 overflow-hidden rounded-corner-m md:size-[85px]">
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

      <section id="my-works" className={`flex w-full flex-col items-start gap-8 bg-white pb-16 pt-4 ${sectionPadding}`}>
        <div className="flex w-full max-w-[1320px] flex-col gap-16 mx-auto">
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
  )
}
