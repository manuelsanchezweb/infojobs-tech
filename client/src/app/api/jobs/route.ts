import { promises as fs } from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'
import path from 'path'

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'data')
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + '/jobs.json', 'utf8')

  return NextResponse.json({ jobs: JSON.parse(fileContents) })
}
