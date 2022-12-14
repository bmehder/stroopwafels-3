export const prerender = true

import type { RequestEvent } from '@sveltejs/kit'
import type { WP_REST_API_Posts } from 'wp-types'
import type { PageLoad } from './$types'

// Get Posts for prerendering
export async function load({ fetch }: RequestEvent): PageLoad {
  const BASE_URL = 'https://sprucehealthgroup.com/wp-json/wp/v2/'

  const response = await fetch(BASE_URL + 'posts?_embed')
  const posts: WP_REST_API_Posts = await response.json()

  return { posts }
}
