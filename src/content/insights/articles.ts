import type { ComponentType } from 'react'

/**
 * Import each MDX article's default export (the rendered component) and its
 * frontmatter object (exported as `frontmatter` by remark-mdx-frontmatter v4).
 */
import GeoContent, { frontmatter as geoFrontmatter } from './geo-seo-ai-transition.mdx'
import WcagContent, { frontmatter as wcagFrontmatter } from './wcag-22-changes.mdx'
import A11yContent, { frontmatter as a11yFrontmatter } from './accessibility-competitive-advantage.mdx'
import SchemaContent, { frontmatter as schemaFrontmatter } from './structured-data-2026.mdx'

export interface Article {
  /** URL-safe identifier used as the href anchor. */
  slug: string
  title: string
  /** ISO 8601 date string, e.g. "2026-04-14" */
  date: string
  excerpt: string
  tag: 'GEO' | 'Accessibility'
  featured?: boolean
  /** The full MDX article rendered as a React component. */
  Content: ComponentType
}

/**
 * All insight articles, ordered newest first.
 * Add new articles here after creating an MDX file in this directory.
 */
export const articles: Article[] = [
  {
    slug: 'geo-seo-ai-transition',
    title: geoFrontmatter.title,
    date: geoFrontmatter.date,
    excerpt: geoFrontmatter.excerpt,
    tag: geoFrontmatter.tag as Article['tag'],
    featured: geoFrontmatter.featured,
    Content: GeoContent,
  },
  {
    slug: 'wcag-22-changes',
    title: wcagFrontmatter.title,
    date: wcagFrontmatter.date,
    excerpt: wcagFrontmatter.excerpt,
    tag: wcagFrontmatter.tag as Article['tag'],
    featured: wcagFrontmatter.featured,
    Content: WcagContent,
  },
  {
    slug: 'accessibility-competitive-advantage',
    title: a11yFrontmatter.title,
    date: a11yFrontmatter.date,
    excerpt: a11yFrontmatter.excerpt,
    tag: a11yFrontmatter.tag as Article['tag'],
    featured: a11yFrontmatter.featured,
    Content: A11yContent,
  },
  {
    slug: 'structured-data-2026',
    title: schemaFrontmatter.title,
    date: schemaFrontmatter.date,
    excerpt: schemaFrontmatter.excerpt,
    tag: schemaFrontmatter.tag as Article['tag'],
    featured: schemaFrontmatter.featured,
    Content: SchemaContent,
  },
]
