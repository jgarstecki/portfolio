import { Link } from 'react-router-dom'
import { IconHome } from '@tabler/icons-react'
import { sectionPadding } from '../styles/section'

export default function Nav() {
  return (
    <div className={`sticky top-0 z-20 flex h-16 w-full items-center justify-between bg-gray-200 ${sectionPadding}`}>
      <Link
        to="/"
        className="flex items-center gap-2 rounded-corner px-4 py-2 text-black-200 hover:bg-gray-100"
      >
        <IconHome className="size-4" />
        <span className="text-base font-medium">Homepage</span>
      </Link>
      <span className="hidden text-base font-medium text-black-200 sm:block">
        Jan Garstecki – portfolio
      </span>
    </div>
  )
}
