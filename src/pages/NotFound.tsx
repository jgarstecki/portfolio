import { Link } from 'react-router-dom'
import { IconHome } from '@tabler/icons-react'
import { sectionPadding } from '../styles/section'

export default function NotFound() {
  return (
    <div
      className={`flex min-h-screen w-full flex-col items-center justify-center gap-6 bg-white text-center ${sectionPadding}`}
    >
      <p className="font-sans text-[40px] font-bold leading-[1.2] text-black-200 md:text-[56px]">
        404
      </p>
      <p className="max-w-[600px] text-xl text-text-secondary md:text-[34px]">
        This page doesn&rsquo;t exist – looks like the link took a wrong turn.
      </p>
      <Link to="/" className="flex items-center gap-2 text-black-200 hover:text-gray-300">
        <IconHome className="size-4" />
        <span className="text-base font-medium">Back to homepage</span>
      </Link>
    </div>
  )
}
