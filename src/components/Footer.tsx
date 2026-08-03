import { sectionPadding } from '../styles/section'

export default function Footer({ tone = 'transparent' }: { tone?: 'transparent' | 'gray' }) {
  const bg = tone === 'gray' ? 'bg-gray-100' : ''
  const text = tone === 'gray' ? 'text-text-secondary' : 'text-gray-300'

  return (
    <footer className={`w-full py-6 ${bg} ${sectionPadding}`}>
      <p className={`w-full text-center text-sm ${text}`}>&copy; Jan Garstecki {new Date().getFullYear()}</p>
    </footer>
  )
}
