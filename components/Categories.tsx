import React, { useEffect, useState } from 'react'
import { getCategories } from '../services'
import { gql, useQuery } from '@apollo/client'
import { Category } from '../interface'
import Link from 'next/link'

interface Props {
  cats: [Category]
}

const Categories = ({ cats }: Props) => {
  return (
    <div className="mt-3 rounded-lg bg-white p-10">
      <h3 className="border-b pb-3 text-2xl font-bold">Categories</h3>

      <div className="flex flex-col pt-4">
        {cats.map((cat) => (
          <span className="pb-2">
            <Link key={cat.slug} href={`/categories/${cat.slug}`}>
              {cat.title}
            </Link>
          </span>
        ))}
      </div>
    </div>
  )
}

export default Categories
