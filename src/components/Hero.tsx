import { useEffect, useRef } from 'react'

const NODE_COUNT = 60
const CONNECT_DIST = 140
const TEAL: [number, number, number] = [114, 228, 194]
const VIOLET: [number, number, number] = [177, 138, 255]

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

/**
 * Hero section with animated canvas mesh, headline, and CTAs.
 * The canvas animation pauses automatically when the user prefers reduced motion.
 */
export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = 0
    let H = 0
    let nodes: Node[] = []
    let rafId: number
    const mouse = { x: -999, y: -999 }
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)')

    function resize() {
      W = canvas!.width = canvas!.offsetWidth
      H = canvas!.height = canvas!.offsetHeight
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
      }))
    }

    function lerp(a: number, b: number, t: number) { return a + (b - a) * t }

    function lerpColor(ca: [number, number, number], cb: [number, number, number], t: number) {
      return (
        'rgba(' +
        Math.round(lerp(ca[0], cb[0], t)) + ',' +
        Math.round(lerp(ca[1], cb[1], t)) + ',' +
        Math.round(lerp(ca[2], cb[2], t)) + ','
      )
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H)

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > W) n.vx *= -1
        if (n.y < 0 || n.y > H) n.vy *= -1
        const dx = n.x - mouse.x
        const dy = n.y - mouse.y
        const d = Math.sqrt(dx * dx + dy * dy)
        if (d < 100) {
          n.vx += (dx / d) * 0.3
          n.vy += (dy / d) * 0.3
        }
        n.vx *= 0.99
        n.vy *= 0.99
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < CONNECT_DIST) {
            const alpha = (1 - d / CONNECT_DIST) * 0.35
            const t = (a.x + b.x) / W / 2
            ctx!.beginPath()
            ctx!.moveTo(a.x, a.y)
            ctx!.lineTo(b.x, b.y)
            ctx!.strokeStyle = lerpColor(TEAL, VIOLET, t) + alpha + ')'
            ctx!.lineWidth = 0.5
            ctx!.stroke()
          }
        }
      }

      for (const n of nodes) {
        const t = n.x / W
        ctx!.beginPath()
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx!.fillStyle = lerpColor(TEAL, VIOLET, t) + '0.8)'
        ctx!.fill()
      }
    }

    function loop() {
      if (!prefersReduced.matches) draw()
      rafId = requestAnimationFrame(loop)
    }

    function handleMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    function handleMouseLeave() {
      mouse.x = -999
      mouse.y = -999
    }

    resize()
    loop()
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('resize', resize, { passive: true })

    return () => {
      cancelAnimationFrame(rafId)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="hero" aria-labelledby="hero-heading">
      <canvas ref={canvasRef} id="hero-canvas" aria-hidden="true" />
      <div className="hero-glow-teal" aria-hidden="true" />
      <div className="hero-glow-violet" aria-hidden="true" />

      <div className="hero-inner">
        <p className="hero-eyebrow">Tees Valley, United Kingdom</p>
        <h1 className="hero-headline" id="hero-heading">
          The web, built for<br /><em>everyone</em> — and every<br />AI that reads it.
        </h1>
        <p className="hero-sub">
          Hyperwoven is a digital agency specialising in Web Accessibility and Generative Engine
          Optimisation — crafting digital experiences that are inclusive, intelligent, and built
          for the future.
        </p>
        <div className="hero-actions">
          <a className="btn-primary" href="#cta">Start a Project</a>
          <a className="btn-ghost" href="#services">Our Services</a>
        </div>
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <span className="scroll-label">Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
