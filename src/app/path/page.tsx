import { CinematicVideo } from '@/components/CinematicVideo'
import { SiteNav } from '@/components/SiteNav'
import { SiteFooter } from '@/components/SiteFooter'
import { Experience } from '@/components/sections/Experience'

export default function PathPage() {
  return <><CinematicVideo /><SiteNav /><main className="page-shell"><div className="wrap page-heading"><p className="kicker">02 / TRAJECTORY</p><h1 className="section-title">Experience <em>&amp;</em><br />education.</h1><p className="section-copy">The work, learning and build cycles shaping the engineer behind the interface.</p></div><Experience /></main><SiteFooter /></>
}
