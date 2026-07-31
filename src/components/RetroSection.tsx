import { sectionPadding } from '../styles/section'

export default function RetroSection({ body }: { body: string }) {
  return (
    <section className={`w-full py-16 ${sectionPadding}`}>
      <div className="flex w-full flex-col items-start gap-3">
        <p className="text-sm uppercase text-black-200">Retro</p>
        <p className="max-w-[672px] text-2xl font-medium text-text-primary">Looking back</p>
        <p className="w-full text-base text-text-secondary">{body}</p>
      </div>
    </section>
  )
}
