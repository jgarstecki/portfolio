import { IconBrandLinkedin, IconPhone, IconMail } from '@tabler/icons-react'

export default function ContactLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-start justify-center gap-6 ${className}`}>
      <div className="flex items-center gap-2">
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
      <div className="flex items-center gap-2">
        <IconPhone className="size-4" />
        <p className="text-base text-black-200">+48 784 381 328</p>
      </div>
      <div className="flex items-center gap-2">
        <IconMail className="size-4" />
        <p className="text-base text-black-200">jasiek.garstecki@gmail.com</p>
      </div>
    </div>
  )
}
