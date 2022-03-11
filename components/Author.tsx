import React from 'react'
import { Author } from '../interface'

interface Props {
  author: Author
}

const Author = ({ author }: Props) => {
  return (
    <div className="relative mt-14 mb-10 flex flex-col items-center rounded-lg bg-black bg-opacity-60 p-12">
      <div className="absolute -top-10 align-middle ">
        <img
          src={author.image.url}
          className="h-20 w-20 rounded-full"
          alt={author.name}
        />
      </div>
      <h3 className="font-bold text-white">{author.name}</h3>
      <p className="text-xl text-white">{author.bio}</p>
    </div>
  )
}

export default Author
