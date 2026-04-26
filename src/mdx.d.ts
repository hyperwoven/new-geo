/**
 * Type declarations for MDX files with remark-mdx-frontmatter v4+.
 * All frontmatter fields are exported as a single named `frontmatter` object.
 */
declare module '*.mdx' {
  import type { ComponentType } from 'react'

  /** Rendered MDX content as a React component */
  const Component: ComponentType
  export default Component

  /** All frontmatter fields — must match the YAML in each article */
  export const frontmatter: {
    title: string
    date: string
    excerpt: string
    tag: string
    featured?: boolean
  }
}
