import React from 'react'
import Header from './Header'

const Layout = ({ children, posts }: any) => {
  return (
    <div className="mx-auto max-w-6xl">
      <Header />
      {children}
    </div>
  )
}

export default Layout
