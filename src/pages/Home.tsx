import { useEffect } from 'react'
import { Hero } from '../components/Hero'
import { Marquee } from '../components/Marquee'
import { Services } from '../components/Services'
import { Manifesto } from '../components/Manifesto'
import { Stats } from '../components/Stats'
import { Approach } from '../components/Approach'
import { Geo } from '../components/Geo'
import { Location } from '../components/Location'
import { Insights } from '../components/Insights'
import { Cta } from '../components/Cta'

/**
 * Home page — all above-the-fold and in-page sections.
 * Owns the scroll-reveal IntersectionObserver so it re-runs
 * correctly when the route mounts.
 */
export function Home() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <Hero />
      <Marquee />
      <Services />
      <Manifesto />
      <Stats />
      <Approach />
      <Geo />
      <Location />
      <Insights />
      <Cta />
    </main>
  )
}
