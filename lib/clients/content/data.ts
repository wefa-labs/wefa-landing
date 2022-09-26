import { createClient } from './contentful'

// TODO: Is there a better way to sort these?
const sortPostsByDate = (posts: any[]) => {
  return posts.sort((a, b) => {
    const aDate = new Date(a.fields.publishedAt || a.sys.createdAt)
    const bDate = new Date(b.fields.publishedAt || b.sys.createdAt)
    return bDate.getTime() - aDate.getTime()
  })
}

const getAllPosts = async () => {
  const client = createClient()

  const posts = await client.getEntries({
    content_type: 'post',
  })

  return sortPostsByDate(posts.items)
}

const getPostsByTag = async (tag: string) => {
  const client = createClient()

  const post = await client.getEntries({
    content_type: 'post',
    'metadata.tags.sys.id[in]': tag,
  })

  return sortPostsByDate(post.items)
}

const getPreviewPostBySlug = async (slug: string) => {
  const client = createClient({ preview: true })

  const post = await client.getEntries({
    content_type: 'post',
    'fields.slug': slug,
  })

  return post.items[0]
}

const getPostBySlug = async (slug: string) => {
  const client = createClient()

  const post = await client.getEntries({
    content_type: 'post',
    'fields.slug': slug,
  })

  return post.items[0]
}

export { getAllPosts, getPostBySlug, getPostsByTag, getPreviewPostBySlug }
