import { CinematicVideo } from '@/components/CinematicVideo'
import { SiteNav } from '@/components/SiteNav'
import { SiteFooter } from '@/components/SiteFooter'

export default function AboutPage() {
  return <><CinematicVideo /><SiteNav /><main className="page-shell"><section className="section"><div className="wrap"><p className="kicker">05 / PROFILE</p><h1 className="section-title">Engineering with <em>intent.</em></h1><div className="about-grid"><div className="about-portrait" aria-hidden="true"/><div className="about-copy"><p>I&apos;m Saurabh Chavan, a software engineer working across Java, backend development and the modern web. I care about systems that are understandable, interfaces that communicate clearly, and details that survive contact with production.</p><p>This portfolio is intentionally cinematic: the background is a responsive visual layer driven by cursor movement and page scroll.</p><div className="stat-grid"><div className="stat"><b>JAVA</b><span>PRIMARY STACK</span></div><div className="stat"><b>WEB</b><span>PRODUCT LAYER</span></div><div className="stat"><b>∞</b><span>BUILD MINDSET</span></div></div></div></div></div></section></main><SiteFooter /></>
}
