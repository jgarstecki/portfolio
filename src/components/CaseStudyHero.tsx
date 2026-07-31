import { sectionPadding } from '../styles/section'

type Props = {
  eyebrow: string
  heading: string
  meta: string
  glow: string
  cover: string
}

export default function CaseStudyHero({ eyebrow, heading, meta, glow, cover }: Props) {
  return (
    <div className={`relative flex w-full flex-col items-center justify-end gap-16 overflow-hidden bg-gray-200 pb-0 pt-16 ${sectionPadding}`}>
      <img
        src={glow}
        alt=""
        className="pointer-events-none absolute left-1/2 top-[40%] w-[160%] max-w-none -translate-x-1/2"
      />
      <div className="relative z-10 flex w-full max-w-[880px] flex-col items-center gap-3">
        <p className="w-full text-center text-base text-black-200">{eyebrow}</p>
        <h1 className="w-full text-center font-sans text-[28px] leading-[1.2] text-black-200 md:text-[34px]">
          {heading}
        </h1>
        <p className="w-full text-center text-base text-black-200">{meta}</p>
      </div>
      <div className="relative z-10 aspect-[880/473] w-full overflow-hidden rounded-t-[10px] sm:rounded-t-corner-m">
        <img src={cover} alt="" className="size-full object-cover object-top" />
      </div>
    </div>
  )
}
