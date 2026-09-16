'use client'

import { useEffect, useRef } from 'react'

export function CinematicVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const currentRef = useRef(0)
  const targetRef = useRef(0)
  const durationRef = useRef(0)
  const mouseRef = useRef({ x: 0, y: 0 })
  const visualRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const lastSeekRef = useRef(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateTargetFromScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0
      const duration = durationRef.current
      targetRef.current = Math.max(0, Math.min(1, progress)) * Math.max(0, duration - 0.03)
    }

    const onMeta = () => {
      durationRef.current = Number.isFinite(video.duration) ? video.duration : 0
      updateTargetFromScroll()
    }

    const onPointer = (event: PointerEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = (event.clientY / window.innerHeight) * 2 - 1
    }

    video.addEventListener('loadedmetadata', onMeta)
    window.addEventListener('scroll', updateTargetFromScroll, { passive: true })
    window.addEventListener('pointermove', onPointer, { passive: true })
    updateTargetFromScroll()

    let raf = 0
    const tick = (now: number) => {
      currentRef.current += (targetRef.current - currentRef.current) * 0.10

      // Seeking a compressed video is expensive. Cap seeks to ~30fps rather than
      // forcing a decoder seek on every 60/120Hz animation frame.
      if (video.readyState >= HTMLMediaElement.HAVE_METADATA && now - lastSeekRef.current >= 33) {
        const delta = Math.abs(video.currentTime - currentRef.current)
        if (delta > 0.002) {
          try {
            video.currentTime = currentRef.current
            lastSeekRef.current = now
          } catch {
            // Seeking can race source/metadata changes.
          }
        }
      }

      const { x, y } = mouseRef.current
      if (visualRef.current) {
        visualRef.current.style.transform = `scale(1.06) translate3d(${x * 15}px, ${y * 15}px, 0) rotateX(${y * -2}deg) rotateY(${x * 2}deg)`
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${x * 34}px, ${y * 34}px, 0)`
      }

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      video.removeEventListener('loadedmetadata', onMeta)
      window.removeEventListener('scroll', updateTargetFromScroll)
      window.removeEventListener('pointermove', onPointer)
    }
  }, [])

  return (
    <div className="cine-root" aria-hidden="true">
      <div ref={visualRef} className="cine-media">
        <video
          ref={videoRef}
          playsInline
          muted
          preload="auto"
          className="cine-video"
          disablePictureInPicture
        >
          <source src="/video/portfolio-background-scrub-optimized.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="cine-vignette" />
      <div ref={glowRef} className="cine-glow" />
      <div className="cine-grain" />
      <div className="cine-scanlines" />
    </div>
  )
}
