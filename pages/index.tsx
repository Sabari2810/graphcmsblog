import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { getCategories, getPosts, getRecentPost } from '../services'

const Home: NextPage = ({ posts, recentPosts, cats }: any) => {
  return (
    <div className="mx-auto max-w-5xl">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Posts posts={posts} cats={cats} recentPosts={recentPosts} />
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getPosts()
  const recentPosts = await getRecentPost()
  const cats = await getCategories()

  return {
    props: {
      posts,
      recentPosts,
      cats,
    },
  }
}

export default Home
