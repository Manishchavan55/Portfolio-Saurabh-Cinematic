const items = [
  { side:'left', type:'EXPERIENCE', year:'2024 — PRESENT', title:'Software Engineer · TCS', copy:'Building maintainable Java applications, backend services and production-minded workflows inside an enterprise engineering environment.' },
  { side:'right', type:'EDUCATION', year:'B.E. / COMPUTER ENGINEERING', title:'Engineering Foundation', copy:'Computer engineering background with a focus on programming fundamentals, software architecture and practical application development.' },
  { side:'left', type:'BUILD LOG', year:'ONGOING', title:'Java · Spring · Web', copy:'Continuously shipping projects across backend APIs, databases, frontend interfaces and developer tooling.' },
  { side:'right', type:'MISSION', year:'NOW', title:'Next: Bigger Systems', copy:'Looking for technically ambitious problems where reliable engineering and strong product thinking can compound.' },
]

export function Experience() {
  return <section id="experience" className="section timeline-section"><div className="wrap"><p className="kicker">03 / TRAJECTORY</p><h2 className="section-title">Experience <em>&amp;</em> education.</h2><p className="section-copy">A bilateral timeline of the work, learning and systems that shaped the engineer behind the interface.</p><div className="timeline">{items.map((item,i)=><article key={item.title} className={`timeline-item ${item.side}`}><div className="timeline-node"><span /></div><div className="timeline-card"><p className="kicker">{item.type}</p><time>{item.year}</time><h3>{item.title}</h3><p>{item.copy}</p></div></article>)}</div></div></section>
}
