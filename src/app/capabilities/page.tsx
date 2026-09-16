import { CinematicVideo } from '@/components/CinematicVideo'
import { SiteNav } from '@/components/SiteNav'
import { SiteFooter } from '@/components/SiteFooter'
import { Certifications } from '@/components/sections/Certifications'

export default function CapabilitiesPage() {
  return <><CinematicVideo /><SiteNav /><main className="page-shell"><div className="wrap page-heading"><p className="kicker">03 / CAPABILITIES</p><h1 className="section-title">A ring of <em>proof.</em></h1><p className="section-copy">Drag the cylinder to explore the engineering capabilities and technical areas in the portfolio.</p></div><Certifications /></main><SiteFooter /></>
}
