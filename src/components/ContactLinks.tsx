import { IconBrandLinkedin, IconPhone, IconMail } from '@tabler/icons-react'

type Props = {
  className?: string
  visible?: boolean
}

export default function ContactLinks({ className = '', visible = true }: Props) {
  const itemClass = `flex items-center gap-2 transition-all duration-500 ease-out ${
    visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
  }`

  const itemStyle = (delayMs: number) => ({ transitionDelay: `${delayMs}ms` })

  return (
    <div className={`flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:items-start sm:gap-6 ${className}`}>
      <div className={itemClass} style={itemStyle(0)}>
        <IconBrandLinkedin className="size-4" />
        <a
          href="https://www.linkedin.com/in/jan-garstecki-339068201/"
          target="_blank"
          rel="noreferrer"
          className="text-base text-black-200 underline decoration-from-font underline-offset-2"
        >
          see my profile
        </a>
      </div>
      <div className={itemClass} style={itemStyle(120)}>
        <IconPhone className="size-4" />
        <p className="text-base text-black-200">+48 784 381 328</p>
      </div>
      <div className={itemClass} style={itemStyle(240)}>
        <IconMail className="size-4" />
        <p className="text-base text-black-200">jasiek.garstecki@gmail.com</p>
      </div>
    </div>
  )
}
