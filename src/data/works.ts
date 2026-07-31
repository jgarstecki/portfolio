import thumbOrion from '../assets/images/thumb-orion.png'
import thumbDrifthub from '../assets/images/thumb-drifthub.png'
import thumbChange from '../assets/images/thumb-change.png'
import thumbWineke from '../assets/images/thumb-wineke.png'
import thumbInmed from '../assets/images/thumb-inmed.png'
import thumbCollective from '../assets/images/thumb-collective.png'

export type WorkItem = {
  slug: string
  title: string
  subtitle: string
  image: string
  href: string
  external?: boolean
  inProgress?: boolean
}

export const works: WorkItem[] = [
  {
    slug: 'orion',
    title: 'Navigating various users through tangled enterprise rules',
    subtitle: 'UX/UI · UX Lead · Design System · Enterprise CRM',
    image: thumbOrion,
    href: '/orion',
  },
  {
    slug: 'drifthub',
    title: 'Retrofitting design into a product that had shipped before it was designed',
    subtitle: 'UX/UI · Art Direction · Design System · Marketplace',
    image: thumbDrifthub,
    href: '/drifthub',
  },
  {
    slug: 'change',
    title: 'Twenty years of reputation, finally visible online',
    subtitle: 'UX Research · UX/UI · Art Direction · Copywriting · Website',
    image: thumbChange,
    href: '/change',
  },
  {
    slug: 'wineke',
    title: 'Animating a winemaking platform showcase',
    subtitle: 'Animation · Motion Design · Branding',
    image: thumbWineke,
    href: 'https://vimeo.com/773735957/6e9f62ef56?fl=pl&fe=sh',
    external: true,
  },
  {
    slug: 'inmed',
    title: 'Adaptable CMS components for medical equipment',
    subtitle: 'UX/UI · Design System · Healthcare',
    image: thumbInmed,
    href: '#',
    inProgress: true,
  },
  {
    slug: 'collective',
    title: 'Collective work showreel',
    subtitle: 'Branding · Animation · Photography · 3D Design',
    image: thumbCollective,
    href: '#',
    inProgress: true,
  },
]

export function otherWorks(excludeSlug: string, count = 3): WorkItem[] {
  return works.filter((w) => w.slug !== excludeSlug).slice(0, count)
}
