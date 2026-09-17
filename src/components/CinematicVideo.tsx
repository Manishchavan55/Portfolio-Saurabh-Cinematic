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
  const seekingRef = useRef(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateTargetFromScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0
      targetRef.current = Math.max(0, Math.min(1, progress)) * Math.max(0, durationRef.current - 0.04)
    }

    const onMeta = () => {
      durationRef.current = Number.isFinite(video.duration) ? video.duration : 0
      updateTargetFromScroll()
    }

    const onSeeked = () => {
      seekingRef.current = false
    }

    const onPointer = (event: PointerEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = (event.clientY / window.innerHeight) * 2 - 1
    }

    video.addEventListener('loadedmetadata', onMeta)
    video.addEventListener('seeked', onSeeked)
    window.addEventListener('scroll', updateTargetFromScroll, { passive: true })
    window.addEventListener('pointermove', onPointer, { passive: true })
    updateTargetFromScroll()

    let raf = 0
    const tick = (now: number) => {
      currentRef.current += (targetRef.current - currentRef.current) * 0.12

      // One seek at a time. This prevents the browser decoder from building a
      // queue of stale seeks while the user scrolls quickly.
      if (
        video.readyState >= HTMLMediaElement.HAVE_METADATA &&
        !seekingRef.current &&
        now - lastSeekRef.current >= 45
      ) {
        const delta = Math.abs(video.currentTime - currentRef.current)
        if (delta > 0.018) {
          try {
            seekingRef.current = true
            video.currentTime = currentRef.current
            lastSeekRef.current = now
          } catch {
            seekingRef.current = false
          }
        }
      }

      const { x, y } = mouseRef.current
      if (visualRef.current) {
        visualRef.current.style.transform = `scale(1.04) translate3d(${x * 12}px, ${y * 12}px, 0) rotateX(${y * -1.5}deg) rotateY(${x * 1.5}deg)`
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${x * 28}px, ${y * 28}px, 0)`
      }

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      video.removeEventListener('loadedmetadata', onMeta)
      video.removeEventListener('seeked', onSeeked)
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
          disableRemotePlayback
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
