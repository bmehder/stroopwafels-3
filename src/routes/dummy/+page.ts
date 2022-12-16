import type { RequestEvent } from '@sveltejs/kit'

export async function load({ fetch }: RequestEvent) {
  const response = await fetch('/api/dummy')
  const dummyData = await response.json()

  return { dummyData }
}
