import { defineConfig } from 'basehub'

export default defineConfig({
  basehub: {
    token: process.env.BASEHUB_TOKEN!,
  },
  experimental: {
    typedFieldsInGenerics: true,
  },
})