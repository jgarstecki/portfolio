import { Link } from 'react-router-dom'
import type { WorkItem } from '../data/works'

export default function WorkCard({ item, compact = false }: { item: WorkItem; compact?: boolean }) {
  const wrapperClass = 'group flex w-full flex-col items-start gap-6'

  const content = (
    <>
      <div className="relative aspect-[628/406] w-full overflow-hidden rounded-corner">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="size-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
        {item.inProgress && (
          <div className="absolute inset-0 flex items-center justify-center bg-[rgba(38,38,38,0.7)]">
            <p className="px-4 text-center text-2xl font-medium text-white">
              Presentation in progress
            </p>
          </div>
        )}
      </div>
      <div className="flex w-full flex-col items-start gap-4">
        <p
          className={`w-full font-sans leading-[1.2] text-black-200 ${
            compact ? 'text-xl md:text-2xl' : 'text-[28px] md:text-[34px]'
          }`}
        >
          {item.title}
        </p>
        <p className="w-full text-base text-gray-300">{item.subtitle}</p>
      </div>
    </>
  )

  if (item.inProgress) {
    return <div className={`${wrapperClass} cursor-default`}>{content}</div>
  }

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        className={`${wrapperClass} cursor-pointer`}
      >
        {content}
      </a>
    )
  }

  return (
    <Link to={item.href} className={`${wrapperClass} cursor-pointer`}>
      {content}
    </Link>
  )
}
