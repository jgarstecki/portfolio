import { useEffect, useRef, useState } from 'react'
import ContactLinks from './ContactLinks'
import { sectionPadding } from '../styles/section'

export default function Contact({ tone = 'light' }: { tone?: 'light' | 'gray' }) {
  const bg = tone === 'gray' ? 'bg-gray-200' : 'bg-gray-100'
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className={`w-full ${bg} py-16 ${sectionPadding} transition-all duration-700 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div className="mx-auto flex max-w-[1320px] flex-col items-center gap-[18px]">
        <h2 className="w-full text-center font-sans text-[40px] font-bold leading-[1.2] text-black-200 md:text-[56px]">
          Let&rsquo;s get in touch
        </h2>
        <ContactLinks />
      </div>
    </section>
  )
}
