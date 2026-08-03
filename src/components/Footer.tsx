import { sectionPadding } from '../styles/section'

export default function Footer() {
  return (
    <footer className={`w-full py-6 ${sectionPadding}`}>
      <p className="text-sm text-gray-300">Jan Garstecki {new Date().getFullYear()}</p>
    </footer>
  )
}
