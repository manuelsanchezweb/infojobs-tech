import { API_JOB_OFFER_BY_ID } from '@/constants/constants'

export async function getJobById({ jobId }: { jobId: string }): Promise<any> {
  const url = `${API_JOB_OFFER_BY_ID}${jobId}`
  // TODO: make this with the API

  try {
    const response = await fetch(url)
    console.log('RESPONSE:', response)
    const data = await response.json()
    console.log('JOB OFFER:', data)
    return data
  } catch (error) {
    console.error(`Fetch failed: ${error}`)
    return null
  }
}
