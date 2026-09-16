import { CinematicVideo } from '@/components/CinematicVideo'
import { SiteNav } from '@/components/SiteNav'
import { SiteFooter } from '@/components/SiteFooter'

export default function ContactPage() {
  return <><CinematicVideo /><SiteNav /><main className="page-shell"><section className="section contact-page"><div className="wrap"><p className="kicker">04 / OPEN CHANNEL</p><h1 className="section-title">Let&apos;s build the <em>next thing.</em></h1><div className="contact-grid"><div className="contact-panel"><p className="kicker">DIRECT</p><h2>Talk to me.</h2><div className="contact-row"><span>EMAIL</span><a href="mailto:saurabhchavan@example.com">saurabhchavan@example.com ↗</a></div><div className="contact-row"><span>GITHUB</span><a href="https://github.com/Manishchavan55" target="_blank" rel="noreferrer">github.com/Manishchavan55 ↗</a></div><div className="contact-row"><span>LINKEDIN</span><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div><div className="contact-panel"><p className="kicker">STATUS</p><h2>Build mode.</h2><p className="contact-note">Open to conversations around software engineering, backend systems, product development and technically interesting collaborations.</p></div></div></div></section></main><SiteFooter /></>
}
