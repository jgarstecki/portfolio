import ContactLinks from './ContactLinks'
import { sectionPadding } from '../styles/section'

export default function Contact({ tone = 'light' }: { tone?: 'light' | 'gray' }) {
  const bg = tone === 'gray' ? 'bg-gray-200' : 'bg-gray-100'
  return (
    <section className={`w-full ${bg} py-16 ${sectionPadding}`}>
      <div className="mx-auto flex max-w-[1320px] flex-col items-center gap-[18px]">
        <h2 className="w-full text-center text-[40px] leading-[1.2] text-orange md:text-[56px] lg:text-[67px]">
          Let&rsquo;s get in touch
        </h2>
        <ContactLinks />
      </div>
    </section>
  )
}
