import { sectionPadding } from '../styles/section'

type Props = {
  context: string
  problem: string
}

export default function ContextProblem({ context, problem }: Props) {
  return (
    <section className={`w-full py-16 ${sectionPadding}`}>
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
        <div className="flex flex-col items-start gap-4 rounded-corner bg-gray-100 p-6">
          <p className="text-2xl font-medium text-text-primary">Context</p>
          <p className="text-base text-text-secondary">{context}</p>
        </div>
        <div className="flex flex-col items-start gap-4 rounded-corner bg-gray-100 p-6">
          <p className="text-2xl font-medium text-text-primary">Problem</p>
          <p className="text-base text-text-secondary">{problem}</p>
        </div>
      </div>
    </section>
  )
}
