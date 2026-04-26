/**
 * Type declarations for MDX files with remark-mdx-frontmatter.
 * Each .mdx file exports its frontmatter keys as named exports
 * and the rendered component as the default export.
 */
declare module '*.mdx' {
  import type { ComponentType } from 'react'

  /** Rendered MDX content as a React component */
  const Component: ComponentType
  export default Component

  /** Frontmatter fields — must match the YAML in each article */
  export const title: string
  export const date: string
  export const excerpt: string
  export const tag: string
  export const featured: boolean | undefined
}
