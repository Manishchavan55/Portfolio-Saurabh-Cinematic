'use client'

import { useEffect, useRef } from 'react'

export function CinematicVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const targetRef = useRef(0)
  const durationRef = useRef(0)
  const mouseRef = useRef({ x: 0, y: 0 })
  const visualRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const lastSeekRef = useRef(0)
  const seekTimerRef = useRef<number | null>(null)
  const scrollingRef = useRef(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateTarget = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0
      targetRef.current = Math.max(0, Math.min(1, progress)) * Math.max(0, durationRef.current - 0.05)
    }

    const seekToTarget = () => {
      if (!video || video.readyState < HTMLMediaElement.HAVE_METADATA) return
      const target = targetRef.current
      if (Math.abs(video.currentTime - target) < 0.025) return

      try {
        // fastSeek lets browsers use nearby keyframes instead of forcing an
        // expensive exact decode on every scroll event.
        if ('fastSeek' in video && typeof video.fastSeek === 'function') {
          video.fastSeek(target)
        } else {
          video.currentTime = target
        }
        lastSeekRef.current = performance.now()
      } catch {
        // Ignore transient seeks while the media element is loading/changing.
      }
    }

    const onMeta = () => {
      durationRef.current = Number.isFinite(video.duration) ? video.duration : 0
      updateTarget()
      seekToTarget()
    }

    const onScroll = () => {
      updateTarget()
      scrollingRef.current = true

      // Do not continuously hammer the video decoder. Schedule one seek at a
      // time and let the browser finish decoding before the next one.
      if (seekTimerRef.current === null) {
        seekTimerRef.current = window.setTimeout(() => {
          seekTimerRef.current = null
          seekToTarget()
        }, 70)
      }
    }

    const onScrollEnd = () => {
      scrollingRef.current = false
      seekToTarget()
    }

    const onPointer = (event: PointerEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = (event.clientY / window.innerHeight) * 2 - 1
    }

    video.addEventListener('loadedmetadata', onMeta)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('pointermove', onPointer, { passive: true })
    updateTarget()

    let scrollEndTimer: number | null = null
    const scrollWithEnd = () => {
      onScroll()
      if (scrollEndTimer !== null) window.clearTimeout(scrollEndTimer)
      scrollEndTimer = window.setTimeout(onScrollEnd, 140)
    }

    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', scrollWithEnd, { passive: true })

    let raf = 0
    const tick = () => {
      const { x, y } = mouseRef.current
      if (visualRef.current) {
        visualRef.current.style.transform = `scale(1.035) translate3d(${x * 10}px, ${y * 10}px, 0) rotateX(${y * -1.25}deg) rotateY(${x * 1.25}deg)`
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${x * 24}px, ${y * 24}px, 0)`
      }
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      if (seekTimerRef.current !== null) window.clearTimeout(seekTimerRef.current)
      if (scrollEndTimer !== null) window.clearTimeout(scrollEndTimer)
      video.removeEventListener('loadedmetadata', onMeta)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('scroll', scrollWithEnd)
      window.removeEventListener('pointermove', onPointer)
      void scrollingRef
      void lastSeekRef
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
