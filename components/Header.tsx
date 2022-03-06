import React from 'react'
import Link from 'next/link'

const Header = () => {
  const categories = [
    {
      name: 'Web Development',
      slug: 'webdev',
    },
    {
      name: 'React',
      slug: 'react',
    },
  ]
  return (
    <div className="flex items-center justify-between border-b py-8 px-2">
      <h3 className="cursor-pointer text-3xl font-bold text-white">GraphCMS</h3>
      <div className="flex items-center space-x-3 font-semibold text-white">
        {categories.map((cat) => (
          <Link key={cat.slug} href={`/categories/${cat.slug}`}>
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Header
