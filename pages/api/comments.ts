import type { NextApiRequest, NextApiResponse } from 'next'

import { GraphQLClient, gql } from 'graphql-request'

const ENDPOINT = process.env.NEXT_GAPHCMS_ENDPOINT || ''

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, comment, slug } = req.body
  const client = new GraphQLClient(ENDPOINT, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  })

  const query = gql`
    mutation MyMutation(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          email: $email
          name: $name
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `

  const result = await client.request(query, {
    name,
    email,
    comment,
    slug,
  })

  console.log('result', result)

  res.status(200).send(result)
}
