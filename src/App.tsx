import { useEffect } from 'react'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Services } from './components/Services'
import { Manifesto } from './components/Manifesto'
import { Stats } from './components/Stats'
import { Approach } from './components/Approach'
import { Geo } from './components/Geo'
import { Location } from './components/Location'
import { Insights } from './components/Insights'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'

/**
 * Root application component.
 * Sets up the global scroll-reveal IntersectionObserver that watches all
 * elements with the `reveal` class and adds `visible` when they enter the
 * viewport. Mirrors the original vanilla-JS behaviour.
 */
export function App() {
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
    <>
      <Nav />
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
      <Footer />
    </>
  )
}
