import Link from 'next/link'
import React from 'react'
import { Post } from '../interface'

import moment from 'moment'

interface Props {
  post: Post
}

const PostCard = ({ post }: Props) => {
  return (
    <div className="mb-14 flex flex-col items-center space-y-8 rounded-lg bg-white p-7">
      <img
        className="h-48 w-full rounded-lg object-cover"
        src={post.image.url}
        alt=""
      />
      <div className="text-2xl font-semibold capitalize">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </div>
      <div className="flex items-center space-x-5">
        <div className="flex items-center space-x-2">
          <img
            src={post.author.image.url}
            className="h-6 w-6 rounded-full"
            alt={post.author.name}
          />
          <p>{post.author.name}</p>
        </div>
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p>{moment(post.createdAt).format('MMM DD YYYY')}</p>
        </div>
      </div>
      <div>
        <p className="px-12 text-center">{post.excerpt}</p>
      </div>
      <span className="cursor-pointer rounded-3xl bg-blue-600 p-3 px-4 text-lg font-medium text-white duration-300 hover:-translate-y-2">
        <Link href={`/post/${post.slug}`}>Continue Reading</Link>
      </span>
    </div>
  )
}

export default PostCard
