import { sectionPadding } from '../styles/section'

type Props = {
  index?: string
  total?: string
  label?: string
  title: string
  body: string
  images?: string[]
  wide?: boolean
}

export default function CaseStudySection({ index, total, label, title, body, images = [], wide }: Props) {
  return (
    <section className={`flex w-full flex-col items-start gap-16 py-16 ${sectionPadding}`}>
      <div className="flex w-full flex-col items-start gap-3">
        {(index || label) && (
          <div className="flex items-baseline gap-1 text-sm uppercase">
            {index ? (
              <>
                <span className="text-black-200">{index}</span>
                <span className="text-gray-300">/ {total}</span>
              </>
            ) : (
              <span className="text-black-200">{label}</span>
            )}
          </div>
        )}
        <p className={`text-2xl font-medium text-text-primary ${wide ? 'max-w-[672px]' : ''}`}>{title}</p>
        <p className="w-full text-base text-text-secondary">{body}</p>
      </div>
      {images.map((src) => (
        <div key={src} className="w-full overflow-hidden rounded-corner shadow-[0px_1px_18px_0px_rgba(0,0,0,0.09)]">
          <img src={src} alt="" loading="lazy" className="w-full" />
        </div>
      ))}
    </section>
  )
}
