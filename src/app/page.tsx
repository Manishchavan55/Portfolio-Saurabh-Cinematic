import { CinematicVideo } from '@/components/CinematicVideo'
import { Hero } from '@/components/sections/Hero'
import { Experience } from '@/components/sections/Experience'
import { Certifications } from '@/components/sections/Certifications'

const projects = [
  { n:'01', title:'Smart Systems', text:'Backend-first applications designed around clear APIs, reliable data flow and maintainable Java services.', tags:['JAVA','SPRING','REST'] },
  { n:'02', title:'Web Products', text:'Responsive interfaces that turn technical complexity into fast, focused user experiences.', tags:['NEXT.JS','TS','TAILWIND'] },
  { n:'03', title:'AI Toolkit', text:'Practical AI-assisted workflows for analysis, automation and faster software delivery.', tags:['AI','AUTOMATION','TOOLS'] },
  { n:'04', title:'Build Lab', text:'A living collection of experiments across systems, algorithms, UI motion and developer experience.', tags:['DSA','GIT','EXPERIMENTS'] },
]

export default function Home() {
  return <>
    <CinematicVideo />
    <header className="site-nav"><nav className="nav-inner"><a className="brand" href="#top">SAURABH<span>.</span></a><div className="nav-links"><a href="#projects">WORK</a><a href="#experience">PATH</a><a href="#certifications">CAPABILITIES</a><a href="#contact">CONTACT</a></div><a className="nav-button" href="#contact">LET&apos;S TALK</a></nav></header>
    <main>
      <Hero />
      <section id="projects" className="section"><div className="wrap"><p className="kicker">02 / SELECTED WORK</p><h2 className="section-title">Built to <em>work.</em><br/>Designed to <em>last.</em></h2><p className="section-copy">A selection of engineering directions — backend systems, product interfaces and experiments where code meets craft.</p><div className="project-grid">{projects.map(p=><article className="project-card" key={p.n}><span className="project-number">{p.n} / PROJECT</span><h3>{p.title}</h3><p>{p.text}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></article>)}</div></div></section>
      <Experience />
      <Certifications />
      <section className="section"><div className="wrap"><p className="kicker">05 / PROFILE</p><h2 className="section-title">Engineering with <em>intent.</em></h2><div className="about-grid"><div className="about-portrait" aria-hidden="true"/><div className="about-copy"><p>I&apos;m Saurabh Chavan, a software engineer working across Java, backend development and the modern web. I care about systems that are understandable, interfaces that communicate clearly, and details that survive contact with production.</p><p>This portfolio is intentionally cinematic: the background is not decoration, it is a responsive visual layer driven by your cursor and the page scroll.</p><div className="stat-grid"><div className="stat"><b>JAVA</b><span>PRIMARY STACK</span></div><div className="stat"><b>WEB</b><span>PRODUCT LAYER</span></div><div className="stat"><b>∞</b><span>BUILD MINDSET</span></div></div></div></div></div></section>
      <section id="contact" className="section"><div className="wrap"><p className="kicker">06 / OPEN CHANNEL</p><h2 className="section-title">Let&apos;s build the <em>next thing.</em></h2><div className="contact-grid"><div className="contact-panel"><p className="kicker">DIRECT</p><h3>Talk to me.</h3><div className="contact-row"><span>EMAIL</span><a href="mailto:saurabhchavan@example.com">saurabhchavan@example.com ↗</a></div><div className="contact-row"><span>GITHUB</span><a href="https://github.com/Manishchavan55" target="_blank" rel="noreferrer">github.com/Manishchavan55 ↗</a></div><div className="contact-row"><span>LINKEDIN</span><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div><div className="contact-panel"><p className="kicker">STATUS</p><h3>Build mode.</h3><p className="contact-note">Open to conversations around software engineering, backend systems, product development and technically interesting collaborations.</p></div></div></div></section>
    </main>
    <footer className="wrap"><span>© {new Date().getFullYear()} SAURABH CHAVAN</span><span>CURSOR / SCROLL / VIDEO ENGINE</span></footer>
  </>
}
