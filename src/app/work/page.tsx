import { CinematicVideo } from '@/components/CinematicVideo'
import { SiteNav } from '@/components/SiteNav'
import { SiteFooter } from '@/components/SiteFooter'

const projects = [
  ['01','SMART SYSTEMS','Backend-first applications built around clear APIs, reliable data flow and maintainable Java services.',['JAVA','SPRING','REST']],
  ['02','WEB PRODUCTS','Responsive interfaces that turn technical complexity into fast, focused user experiences.',['NEXT.JS','TYPESCRIPT','TAILWIND']],
  ['03','AI TOOLKIT','Practical AI-assisted workflows for analysis, automation and faster software delivery.',['AI','AUTOMATION','TOOLS']],
  ['04','BUILD LAB','Experiments across systems, algorithms, UI motion and developer experience.',['DSA','GIT','EXPERIMENTS']],
] as const

export default function WorkPage() {
  return <><CinematicVideo /><SiteNav /><main className="page-shell"><div className="wrap page-heading"><p className="kicker">01 / SELECTED WORK</p><h1 className="section-title">Built to <em>work.</em><br />Designed to <em>last.</em></h1><p className="section-copy">A focused portfolio of engineering work, product experiments and systems thinking.</p></div><div className="wrap project-grid project-grid-page">{projects.map(([n,title,text,tags])=><article className="project-card" key={n}><span className="project-number">{n} / PROJECT</span><h2>{title}</h2><p>{text}</p><div className="tags">{tags.map(tag=><span key={tag}>{tag}</span>)}</div></article>)}</div></main><SiteFooter /></>
}
