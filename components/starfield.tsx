'use client'

import { useEffect, useRef } from 'react'

type Star = { x: number; y: number; r: number; phase: number; speed: number }
type Shooting = { x: number; y: number; vx: number; vy: number; life: number }

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let stars: Star[] = []
    let shooting: Shooting[] = []
    let frame = 0
    let raf = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.floor((window.innerWidth * window.innerHeight) / 4500)
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.3 + 0.2,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.005,
      }))
    }

    const draw = () => {
      frame++
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      for (const s of stars) {
        const alpha = reduceMotion ? 0.7 : 0.35 + Math.abs(Math.sin(s.phase + frame * s.speed)) * 0.65
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 244, 214, ${alpha})`
        ctx.fill()
      }

      if (!reduceMotion && Math.random() < 0.006) {
        shooting.push({
          x: Math.random() * window.innerWidth * 0.8,
          y: Math.random() * window.innerHeight * 0.4,
          vx: 7 + Math.random() * 4,
          vy: 3 + Math.random() * 2,
          life: 1,
        })
      }
      shooting = shooting.filter((s) => s.life > 0)
      for (const s of shooting) {
        const grad = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * 12, s.y - s.vy * 12)
        grad.addColorStop(0, `rgba(255, 236, 190, ${s.life})`)
        grad.addColorStop(1, 'rgba(255, 236, 190, 0)')
        ctx.strokeStyle = grad
        ctx.lineWidth = 1.6
        ctx.beginPath()
        ctx.moveTo(s.x, s.y)
        ctx.lineTo(s.x - s.vx * 12, s.y - s.vy * 12)
        ctx.stroke()
        s.x += s.vx
        s.y += s.vy
        s.life -= 0.015
      }
      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.26_0.07_285)_0%,oklch(0.14_0.03_270)_55%,oklch(0.1_0.02_265)_100%)]" />
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  )
}
