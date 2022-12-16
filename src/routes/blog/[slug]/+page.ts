import type { RequestEvent } from '@sveltejs/kit'
import type { WP_REST_API_Posts } from 'wp-types'

export async function load({ fetch, params }: RequestEvent) {
  const response = await fetch(
    `https://sprucehealthgroup.com/wp-json/wp/v2/posts?slug=${params.slug}&_embed`
  )
  const post: WP_REST_API_Posts = await response.json()

  return { post }
}
