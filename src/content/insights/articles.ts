import type { ComponentType } from 'react'

/**
 * Import each MDX article's default export (the rendered component) and its
 * frontmatter fields (exported as named exports by remark-mdx-frontmatter).
 */
import GeoContent, {
  title as geoTitle,
  date as geoDate,
  excerpt as geoExcerpt,
  tag as geoTag,
  featured as geoFeatured,
} from './geo-seo-ai-transition.mdx'

import WcagContent, {
  title as wcagTitle,
  date as wcagDate,
  excerpt as wcagExcerpt,
  tag as wcagTag,
  featured as wcagFeatured,
} from './wcag-22-changes.mdx'

import A11yContent, {
  title as a11yTitle,
  date as a11yDate,
  excerpt as a11yExcerpt,
  tag as a11yTag,
  featured as a11yFeatured,
} from './accessibility-competitive-advantage.mdx'

import SchemaContent, {
  title as schemaTitle,
  date as schemaDate,
  excerpt as schemaExcerpt,
  tag as schemaTag,
  featured as schemaFeatured,
} from './structured-data-2026.mdx'

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
    title: geoTitle,
    date: geoDate,
    excerpt: geoExcerpt,
    tag: geoTag as Article['tag'],
    featured: geoFeatured,
    Content: GeoContent,
  },
  {
    slug: 'wcag-22-changes',
    title: wcagTitle,
    date: wcagDate,
    excerpt: wcagExcerpt,
    tag: wcagTag as Article['tag'],
    featured: wcagFeatured,
    Content: WcagContent,
  },
  {
    slug: 'accessibility-competitive-advantage',
    title: a11yTitle,
    date: a11yDate,
    excerpt: a11yExcerpt,
    tag: a11yTag as Article['tag'],
    featured: a11yFeatured,
    Content: A11yContent,
  },
  {
    slug: 'structured-data-2026',
    title: schemaTitle,
    date: schemaDate,
    excerpt: schemaExcerpt,
    tag: schemaTag as Article['tag'],
    featured: schemaFeatured,
    Content: SchemaContent,
  },
]
