'use client'

import { useEffect, useRef, useState } from 'react'

const cards = [
  ['JAVA','Core Java / OOP','01'],['SPRING','Spring Boot / APIs','02'],['SQL','Relational Data','03'],['WEB','HTML / CSS / JS','04'],['GIT','Version Control','05'],['DSA','Algorithms / Logic','06'],['CLOUD','Cloud Fundamentals','07'],['AI','AI-assisted tooling','08']
]

export function Certifications() {
  const angle = useRef(0), velocity = useRef(0), dragging = useRef(false), lastX = useRef(0), raf = useRef(0)
  const [, redraw] = useState(0)
  useEffect(() => {
    const loop = () => {
      if (!dragging.current) { velocity.current *= 0.945; angle.current += Math.abs(velocity.current) > 0.02 ? velocity.current : 0.035 }
      else velocity.current *= 0.945
      redraw(v => v + 1); raf.current = requestAnimationFrame(loop)
    }
    raf.current = requestAnimationFrame(loop); return () => cancelAnimationFrame(raf.current)
  }, [])
  const down = (x:number) => { dragging.current=true; lastX.current=x; velocity.current=0 }
  const move = (x:number) => { if(!dragging.current)return; const dx=x-lastX.current; lastX.current=x; velocity.current=dx*0.22; angle.current+=dx*0.28 }
  const up = () => { dragging.current=false }
  return <section id="certifications" className="section cert-section"><div className="wrap"><p className="kicker">04 / CAPABILITIES</p><h2 className="section-title">A ring of <em>proof.</em></h2><p className="section-copy">Drag the cylinder. Release it and inertia takes over. On touch devices, swipe across the cards.</p><div className="cylinder-stage" onPointerDown={e=>down(e.clientX)} onPointerMove={e=>move(e.clientX)} onPointerUp={up} onPointerCancel={up} onPointerLeave={up}><div className="cylinder" style={{transform:`translateZ(calc(var(--radius) * -1)) rotateY(${angle.current}deg)`}}>{cards.map(([tag,title,n],i)=>{const step=360/cards.length; return <div key={tag} className="cylinder-card" style={{ transform:`rotateY(${i*step}deg) translateZ(var(--radius))` }}><span className="card-no">{n}</span><b>{tag}</b><h3>{title}</h3><span className="card-line" /></div>})}</div></div><div className="cert-footer"><span>08 NODES</span><span>360° ACCESS</span><span>DRAG / RELEASE</span></div></div></section>
}
