import React from 'react'
import { Post } from '../interface'
import RecentPost from './RecentPost'

interface Props {
  recentPosts: [Post]
}

const RecentPosts = ({ recentPosts }: Props) => {
  return (
    <div className="rounded-lg bg-white p-10">
      <h3 className="border-b pb-4 text-2xl font-bold">Recent Posts</h3>
      <div className="pt-3">
        {recentPosts.map((post) => (
          <RecentPost key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}

export default RecentPosts
