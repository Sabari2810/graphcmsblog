import moment from 'moment'
import React from 'react'
import { Post } from '../interface'
import Link from 'next/link'

interface Props {
  post: Post
}

const RecentPost = ({ post }: Props) => {
  return (
    <div className="flex items-center space-x-3 pb-3">
      <div>
        <img
          src={post.author.image.url}
          alt={post.author.name}
          className="h-10 w-10 rounded-full"
        />
      </div>
      <div>
        <p>{moment(post.createdAt).format('MMM DD YYYY')}</p>
        <p>
          <Link key={post.title} href={`/post/${post.slug}`}>
            {post.title}
          </Link>
        </p>
      </div>
    </div>
  )
}

export default RecentPost
