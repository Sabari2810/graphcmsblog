import React from 'react'
import { Category, Post } from '../interface'
import Categories from './Categories'
import PostCard from './PostCard'
import RecentPosts from './RecentPosts'

interface Props {
  posts: [Post]
  recentPosts: [Post]
  cats: [Category]
}

const Posts = ({ posts, recentPosts, cats }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-10 py-10">
      <div className="col-span-2">
        {posts.map((post) => (
          <PostCard post={post} key={post.title} />
        ))}
      </div>
      <div className="sticky top-4 col-span-1 h-fit">
        <RecentPosts recentPosts={recentPosts} />
        <Categories cats={cats} />
      </div>
    </div>
  )
}

export default Posts
