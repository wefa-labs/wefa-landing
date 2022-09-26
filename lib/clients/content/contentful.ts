import { createClient as createContentfulClient } from 'contentful'

const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID || ''
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN || ''
const CONTENTFUL_ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT || 'prod'
const CONTENTFUL_PREVIEW_ACCESS_TOKEN =
  process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN || ''

const createClient = (
  { preview }: { preview?: boolean } = { preview: false }
) => {
  // NOTE: Preview client is used to allow Contentful editors to preview content
  // before it's public.
  if (preview) {
    return createContentfulClient({
      space: CONTENTFUL_SPACE_ID,
      accessToken: CONTENTFUL_PREVIEW_ACCESS_TOKEN,
      host: 'preview.contentful.com',
    })
  }

  return createContentfulClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_ACCESS_TOKEN,
    environment: CONTENTFUL_ENVIRONMENT,
  })
}

export { createClient }
