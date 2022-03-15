import React, { useRef } from 'react'

const CommetsForm = ({ slug }: any) => {
  const nameEl = useRef(null)
  const mailEl = useRef(null)
  const commentEl = useRef(null)

  return (
    <div className="rounded-lg bg-white p-10">
      <h3 className="border-b pb-4 text-2xl font-bold">CommetsForm</h3>
      <div>
        <textarea
          ref={commentEl}
          className="w-full rounded-lg bg-gray-300 px-4 py-4
           outline-none focus:ring-2 focus:ring-gray-400"
          name="comment"
          placeholder="Comment"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <input
          className="rounded-lg bg-gray-300 px-4 py-2 outline-none
           focus:ring-2 focus:ring-gray-400"
          type="text"
          name="name"
          placeholder="Name"
          ref={nameEl}
        />
        <input
          className="rounded-lg bg-gray-300 px-4 py-2 outline-none
           focus:ring-2 focus:ring-gray-400"
          type="text"
          name="email"
          placeholder="Email"
          ref={mailEl}
        />
      </div>
    </div>
  )
}

export default CommetsForm
