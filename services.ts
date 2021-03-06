import { request, gql } from 'graphql-request'

const endpoint = process.env.NEXT_GAPHCMS_ENDPOINT || ''

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      posts {
        categories {
          slug
          title
        }
        author {
          id
          name
          image {
            url
          }
        }
        excerpt
        featuredPost
        image {
          url
        }
        title
        slug
      }
    }
  `

  const response = await request(endpoint, query)

  return await response.posts
}

export const getRecentPost = async () => {
  const query = gql`
    query getRecentPosts {
      posts(orderBy: createdAt_ASC, last: 3) {
        title
        createdAt
        author {
          name
          image {
            url
          }
        }
        slug
      }
    }
  `

  const response = await request(endpoint, query)

  return await response.posts
}

export const getCategories = async () => {
  const query = gql`
    query getCategories {
      categories {
        title
        slug
      }
    }
  `

  const response = await request(endpoint, query)

  return response.categories
}

export const getPost = async (slug: string) => {
  const query = gql`
    query getPost($slug: String!) {
      post(where: { slug: $slug }) {
        title
        slug
        author {
          name
          image {
            url
          }
          bio
        }
        createdAt
        content {
          raw
        }
        image {
          url
        }
      }
    }
  `

  const variables = {
    slug,
  }

  const response = await request(endpoint, query, variables)

  return response.post
}

export const createComment = async (obj: any) => {
  console.log('obj', obj)
  const response = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  })

  return response
}

export async function getComments(slug: string) {
  const query = gql`
    query MyQuery($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        id
        comment
        name
        email
        createdAt
      }
    }
  `

  const result = await request(endpoint, query, {
    slug: slug,
  })

  return result.comments
}
