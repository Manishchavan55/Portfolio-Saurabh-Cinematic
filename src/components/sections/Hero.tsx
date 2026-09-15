'use client'

import { useRef } from 'react'

export function Hero() {
  const magnetic = useRef<HTMLDivElement>(null)
  const move = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!magnetic.current) return
    const r = magnetic.current.getBoundingClientRect()
    magnetic.current.style.transform = `translate(${(e.clientX-r.left-r.width/2)*0.12}px, ${(e.clientY-r.top-r.height/2)*0.12}px)`
  }
  const leave = () => { if (magnetic.current) magnetic.current.style.transform = 'translate(0,0)' }
  return <section id="top" className="hero-section">
    <div className="wrap hero-wrap">
      <div className="hero-copy">
        <p className="eyebrow">SYSTEM / SAURABH.CHAVAN / ONLINE</p>
        <h1><span>BUILD</span><em>BEYOND</em><span>LIMITS.</span></h1>
        <p className="hero-lede">Software engineer crafting resilient <strong>Java backends</strong>, intelligent web experiences and products that feel inevitable.</p>
        <div className="hero-ctas">
          <div ref={magnetic} onMouseMove={move} onMouseLeave={leave} className="magnetic"><a className="button button-primary" href="#projects">ENTER THE WORK <span>↗</span></a></div>
          <a className="button" href="#contact">CONTACT <span>↓</span></a>
        </div>
        <div className="telemetry"><span><b>JAVA</b><small>CORE</small></span><span><b>BACKEND</b><small>SYSTEMS</small></span><span><b>TCS</b><small>ENGINEER</small></span><span><b>∞</b><small>BUILD MODE</small></span></div>
      </div>
      <div className="hero-index"><span>SC / 01</span><i /> <span>SCROLL TO SCRUB</span></div>
    </div>
  </section>
}
