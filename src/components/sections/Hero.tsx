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

  return <section id="hero" className="hero-section">
    <div className="wrap hero-wrap">
      <div className="hero-copy">
        <p className="eyebrow">SYSTEM / SAURABH.CHAVAN / ONLINE</p>
        <h1><span>SAURABH</span><em>CHAVAN</em><span>ENGINEER.</span></h1>
        <p className="hero-lede">Software Engineer at <strong>Tata Consultancy Services</strong>, focused on Java, backend development and modern web applications.</p>
        <div className="hero-ctas">
          <div ref={magnetic} onMouseMove={move} onMouseLeave={leave} className="magnetic"><a className="button button-primary" href="#work">VIEW MY WORK <span>↗</span></a></div>
          <a className="button" href="#contact">CONTACT <span>↓</span></a>
        </div>
        <div className="telemetry"><span><b>JAVA</b><small>CORE</small></span><span><b>SPRING BOOT</b><small>BACKEND</small></span><span><b>TCS</b><small>ENGINEER</small></span><span><b>WEB</b><small>PRODUCT LAYER</small></span></div>
      </div>
      <div className="hero-index"><span>SC / 01</span><i /><span>SCROLL TO SCRUB</span></div>
    </div>
  </section>
}