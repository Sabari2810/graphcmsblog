import React from 'react'
import Author from '../../components/Author'
import CommentsForm from '../../components/CommetsForm'
import Categories from '../../components/Categories'
import Layout from '../../components/Layout'
import PostDetail from '../../components/PostDetail'
import RecentPosts from '../../components/RecentPosts'
import { Post } from '../../interface'
import {
  getCategories,
  getComments,
  getPost,
  getPosts,
  getRecentPost,
} from '../../services'
import { Comments } from '../../components/Comments'

const Post = ({ recentPosts, cats, post, comments }: any) => {
  return (
    <Layout>
      <div className="mx-auto grid grid-cols-1 px-10 py-10 lg:grid-cols-3 lg:gap-10 lg:px-0">
        <div className="col-span-2">
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} comments={comments} />
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
  const comments = await getComments(params.slug)

  const post = await getPost(params.slug)

  return {
    props: {
      recentPosts,
      cats,
      post,
      comments,
    },
  }
}

export default Post
