import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import React from 'react'
import Categories from '../../components/Categories'
import Layout from '../../components/Layout'
import PostDetail from '../../components/PostDetail'
import RecentPosts from '../../components/RecentPosts'
import { Post } from '../../interface'
import { getCategories, getPost, getPosts, getRecentPost } from '../../services'

const Post = ({ recentPosts, cats, post }: any) => {
  console.log('post', post.content.raw)
  return (
    <Layout>
      <div className="mx-auto grid grid-cols-1 px-10 py-10 lg:grid-cols-3 lg:gap-10 lg:px-0">
        <div className="col-span-2">
          <PostDetail post={post} />
        </div>
        <div className="relative top-4 col-span-1 mt-10 h-fit lg:sticky lg:mt-0">
          <RecentPosts recentPosts={recentPosts} />
          <Categories cats={cats} />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const posts = await getPosts()

  return {
    paths: posts.map(({ slug }: any) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const recentPosts = await getRecentPost()
  const cats = await getCategories()

  const post = await getPost(params.slug)

  return {
    props: {
      recentPosts,
      cats,
      post,
    },
  }
}

export default Post
