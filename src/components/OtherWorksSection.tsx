import WorkCard from './WorkCard'
import { otherWorks } from '../data/works'
import { sectionPadding } from '../styles/section'

export default function OtherWorksSection({ excludeSlug }: { excludeSlug: string }) {
  const items = otherWorks(excludeSlug, 2)
  return (
    <section className={`flex w-full flex-col items-start gap-8 pb-16 pt-14 ${sectionPadding}`}>
      <p className="text-[28px] leading-[1.2] text-text-primary md:text-[34px]">Other works</p>
      <div className="grid w-full grid-cols-1 gap-16 md:grid-cols-2">
        {items.map((item) => (
          <WorkCard key={item.slug} item={item} compact />
        ))}
      </div>
    </section>
  )
}
