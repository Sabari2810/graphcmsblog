import moment from 'moment'
import React from 'react'

const PostDetail = ({ post }: any) => {
  const getChildren = (type: string, children: [], item: any) => {
    switch (type) {
      case 'paragraph':
        return getParagraph(children)
      case 'image':
        return <img src={item.src} alt={item.altText} />
      case 'heading-one':
        return <h1>{children.map((h3: any) => h3.text)}</h1>
      case 'heading-two':
        return <h2>{children.map((h3: any) => h3.text)}</h2>
      case 'heading-three':
        return <h3>{children.map((h3: any) => h3.text)}</h3>
      case 'heading-four':
        return <h4>{children.map((h3: any) => h3.text)}</h4>
      case 'heading-five':
        return <h5>{children.map((h3: any) => h3.text)}</h5>
      case 'heading-six':
        return <h6>{children.map((h3: any) => h3.text)}</h6>
      default:
        break
    }
  }

  const getParagraph = (children: []) => {
    return (
      <p>
        {children.map((item: any) => {
          console.log('item.text', item.text)
          if (item) {
            if (item.bold) {
              return <b>{item.text}</b>
            } else if (item.text == '') {
              return <br />
            }
            {
              return <span>{item.text}</span>
            }
          }
        })}
      </p>
    )
  }
  return (
    <div className="rounded-lg bg-white pb-10">
      <img className="" src={post.image.url} alt={post.title} />
      <div className="flex items-center justify-between py-5 px-5">
        <div className="flex items-center space-x-2">
          <img
            src={post.author.image.url}
            className="h-6 w-6 rounded-full"
            alt={post.author.name}
          />
          <p className="text-black">{post.author.name}</p>
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
      <div className="px-10">
        {post.content.raw.children.map((child: any) =>
          getChildren(child.type, child.children, child)
        )}
      </div>
    </div>
  )
}

export default PostDetail
