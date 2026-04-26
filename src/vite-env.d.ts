/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Backend API base URL. Set in .env.local for dev, production env for deployment. */
  readonly VITE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
