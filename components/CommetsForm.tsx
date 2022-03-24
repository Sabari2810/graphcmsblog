import React, { useRef, useState } from 'react'
import { createComment } from '../services'

const CommetsForm = ({ slug }: any) => {
  const nameEl = useRef<HTMLInputElement | null>(null)
  const mailEl = useRef<HTMLInputElement | null>(null)
  const commentEl = useRef<HTMLTextAreaElement | null>(null)
  const storeDataEl = useRef<HTMLInputElement | null>(null)
  const [error, setError] = useState(false)

  const handleCommentClick = async () => {
    setError(false)
    const name = nameEl.current?.value
    const email = mailEl.current?.value
    const comment = commentEl.current?.value
    const storeData = storeDataEl.current?.checked

    if (!name || !email || !comment) {
      setError(true)
      return
    }

    const commentObj = { name, email, comment, storeData, slug }

    if (storeData) {
      localStorage.setItem(
        'name-email',
        JSON.stringify({
          name,
          email,
        })
      )
    } else {
      localStorage.removeItem('name-email')
    }

    const response = await createComment(commentObj)

    console.log('response', response)
  }

  return (
    <div className="rounded-lg bg-white p-10">
      <h3 className="border-b pb-4 text-2xl font-bold">Leace a Comment</h3>
      <div className="mt-2">
        <textarea
          ref={commentEl}
          className="mb-3 w-full rounded-lg bg-gray-300 px-4
           py-4 outline-none focus:ring-2 focus:ring-gray-400"
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
          autoComplete="off"
          placeholder="Name"
          ref={nameEl}
        />
        <input
          className="rounded-lg bg-gray-300 px-4 py-2 outline-none
           focus:ring-2 focus:ring-gray-400"
          type="text"
          autoComplete="off"
          name="email"
          placeholder="Email"
          ref={mailEl}
        />
      </div>
      {error && <p className="mt-2 text-red-400">All Fields are Required</p>}
      <div className="py-3">
        <input
          type="checkbox"
          ref={storeDataEl}
          id="storeData"
          name="storeData"
        />
        <label
          className="ml-2 cursor-pointer text-gray-600"
          htmlFor="storeData"
        >
          save my email and name for the next time
        </label>
      </div>
      <div>
        <button
          onClick={handleCommentClick}
          className="mt-3 rounded-full bg-pink-500 px-4 py-2 text-white transition-all duration-700
            hover:bg-indigo-500"
        >
          Post Comment
        </button>
      </div>
    </div>
  )
}

export default CommetsForm
