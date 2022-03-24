import React, { useEffect, useState } from 'react'
import { Comment } from '../interface'
import moment from 'moment'

interface props {
  slug: String
  comments: [Comment]
}

export const Comments = ({ comments }: props) => {
  return (
    <div className="mt-14 mb-10 rounded-lg  bg-white p-10">
      <h3 className="border-b pb-4 text-2xl font-bold">
        {comments.length} Comments
      </h3>

      <div>
        {comments.map((comment) => (
          <div className="py-2" key={comment.id}>
            <p>
              <b>{comment.name}</b> on{' '}
              <span>{moment(comment.createdAt).format('MMM DD, YYYY')}</span>
            </p>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
