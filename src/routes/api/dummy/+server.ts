import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const GET: RequestHandler = () => {
  const dummyData = {
    count: 3,
    data: [
      { name: 'Big Dummy', job: 'Senator' },
      { name: 'Other Dummy', job: 'Developer' },
      { name: 'Big Dummy, Jr.', job: 'Trust Fund' },
    ],
  }

  return json(dummyData)
}
