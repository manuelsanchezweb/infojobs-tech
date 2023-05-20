export async function getJobById(): Promise<any> {
  const jobId = '0c53ee98b14c108b0126fdc68dc4b9'
  const url = `https://api.infojobs.net/api/7/offer?${jobId}`

  // TODO: make this with the API

  const headers = {
    'Content-Type': 'application/json',
    Authorization:
      'Basic OWJiMDA0YjlkZDI5NGJiZGI3ZTI0NTBkN2Y0YmExOGU6RExSV1NEaXFDaUxJQ21IQzFYUXdoUHhwakdWQ0VMVDhicUpEa2o5cE5FaUorbkNRSmE=',
  }

  try {
    const response = await fetch(url, { headers })
    console.log('RESPONSE:', response)
    const data = await response.json()
    console.log('JOB OFFER:', data)
    return data
  } catch (error) {
    console.error(`Fetch failed: ${error}`)
    return null
  }
}
