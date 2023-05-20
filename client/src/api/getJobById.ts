export async function getJobById(): Promise<any> {
  const jobId = '0c53ee98b14c108b0126fdc68dc4b9'
  const url = `https://api.infojobs.net/api/7/offer?${jobId}`

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
