/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from 'zod'
import Cors from 'cors'
import mailchimp from '@mailchimp/mailchimp_marketing'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
  error?: any
}

mailchimp.setConfig({
  apiKey: process.env.EMAIL_API_KEY ?? '',
  server: 'us14',
})

export const config = {
  // runtime: 'experimental-edge',
  api: {
    bodyParser: {
      sizeLimit: '320b',
    },
  },
}

const listId = process.env.EMAIL_API_ID ?? ''

const Contact = z.object({
  email: z.string().email().max(320),
})

const cors = Cors({
  origin: true,
  methods: ['POST'],
})

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: (
    req: Cors.CorsRequest,
    res: {
      statusCode?: number | undefined
      setHeader(key: string, value: string): any
      end(): any
    },
    next: (err?: any) => any
  ) => void
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await runMiddleware(req, res, cors)

  if (req.method === 'POST') {
    const { email } = req.body

    await Contact.parseAsync({
      email,
    })

    const response = await mailchimp.lists.addListMember(listId, {
      email_address: email,
      status: 'subscribed',
    })

    console.log(
      `Successfully added contact as an audience member. The contact's id is ${response.status}.`
    )

    res.status(200).json({ message: 'success' })
  } else {
    res.status(400).json({ message: 'error' })
  }
}
